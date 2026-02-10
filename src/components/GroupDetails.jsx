import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import GradientShadowButton from "../utils/GradientShadowButton";
import { SlCalender } from "react-icons/sl";
import { AuthContext } from "../contexts/AuthContext";
import TimeCount from "../utils/TimeCount";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { ChevronsLeft } from "lucide-react";
import { ToastContext } from "../contexts/ToastContext";
import Comments from "./Comments";
import ShowAllComment from "./ShowAllComment";
import { Helmet } from "react-helmet";

const GroupDetails = () => {
  const groupInfo = useLoaderData();
  const dateStatus = TimeCount(groupInfo);
  const { showToast } = useContext(ToastContext);
  const { user } = useContext(AuthContext);
  const [refreshComment, setRefreshComment] = useState(false);
  const navigate = useNavigate();
  const timeOver = dateStatus === "Event date has expired";

  const isGitHubUser = user?.providerData?.some(
    (p) => p?.providerId === "github.com",
  );
  const githubUser = isGitHubUser
    ? `${user?.uid}:${user?.displayName || "Unknown"}`
    : null;

  const email = user?.email || githubUser;
  const initialJoinedState =
    groupInfo?.members?.some((m) => m.email === email) || false;
  const [member, setMember] = useState(groupInfo?.members || []);
  const [joined, setJoined] = useState(initialJoinedState);
  const isOverLimit = member.length >= groupInfo.maxMembers;
  const altImage = "https://i.postimg.cc/mgvBzLt5/user.png";
  const isHost = user.email === groupInfo.hostEmail;

  // Group Join Related functions
  const handleLimit = () => {
    showToast(
      "This group has reached its maximum capacity. Please contact the host to request additional slots.",
      "error",
    );
  };
  const handleJoin = (id) => {
    const email = user?.email || githubUser;

    if (!email) {
      return showToast(
        "No email found. Please update your account email.",
        "error",
      );
    }

    const alreadyJoined = member?.some((m) => m.email === email);

    if (alreadyJoined) {
      return showToast("You already joined this group!", "error");
    }

    const newMember = {
      name: user?.displayName || "Unknown",
      photoUrl: user?.photoURL || "",
      email,
    };

    const updatedMembers = [...member, newMember];
    setMember(updatedMembers);

    fetch(`http://localhost:3000/groups/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMembers),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          showToast("Joined successfully!");
          setJoined(true);
        } else {
          showToast("Could not join. Please try again.", "error");
        }
      })
      .catch(() => showToast("Server error. Please try again later.", "error"));
  };
  const handleLeave = (id) => {
    const email = user?.email || githubUser;

    if (!email) {
      return showToast(
        "No email found. Please update your account email.",
        "error",
      );
    }

    const updatedMembers = member.filter((m) => m.email !== email);
    setMember(updatedMembers);

    fetch(`http://localhost:3000/groups/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMembers),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          showToast("Left the group successfully!");
          setJoined(false);
        } else {
          showToast("Could not leave. Please try again.", "error");
        }
      })
      .catch(() => showToast("Server error. Please try again later.", "error"));
  };

  //Admin Related Functions
  const handleReport = () => {
    showToast("Reported to Admin");
  };

  // Comment Related Functions
  const handleRefreshComments = () => {
    setRefreshComment((prev) => !prev);
  };
  const handleEditComment = (commentId, editedText) => {
    const groupId = groupInfo._id;
    const editedAt = new Date().toISOString();

    fetch(`http://localhost:3000/groups/${groupId}/comments/${commentId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        editedCommentText: editedText,
        editedAt,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          showToast("Comment edited successfully!");
          setRefreshComment((prev) => !prev);
        } else {
          showToast("No changes were made.", "error");
        }
      })
      .catch(() => showToast("Server error. Please try again later.", "error"));
  };
  const handleDeleteComment = (id) => {
    const groupId = groupInfo._id;
    fetch(`http://localhost:3000/groups/${groupId}/comments/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount) {
          showToast("Comment deleted successfully!");
          setRefreshComment((prev) => !prev);
        } else {
          showToast("Error while deleting the comment.", "error");
        }
      })
      .catch(() => showToast("Server error. Please try again later.", "error"));
  };
  const handleReplyComment = (id, comment) => {
    const groupId = groupInfo._id;
    const repliedText = comment;
    fetch(`http://localhost:3000/groups/${groupId}/comments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        repliedText,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          showToast("Comment replied successfully!");
          setRefreshComment((prev) => !prev);
        } else {
          showToast("No replied were made.", "error");
        }
      })
      .catch(() => showToast("Server error. Please try again later.", "error"));
  };

  //Reply Related
  const handleEditReply = (commentId, replyText) => {
    const groupId = groupInfo._id;

    fetch(`http://localhost:3000/groups/${groupId}/comments/${commentId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        repliedText: replyText,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          showToast("Reply edited successfully!");
          setRefreshComment((prev) => !prev);
        } else {
          showToast("Reply was not updated.", "error");
        }
      })
      .catch(() => showToast("Server error. Please try again later.", "error"));
  };
  const handleDeleteReply = (commentId) => {
    const groupId = groupInfo._id;

    fetch(`http://localhost:3000/groups/${groupId}/comments/${commentId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        repliedText: null, // 👈 THIS deletes reply
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          showToast("Reply deleted successfully!");
          setRefreshComment((prev) => !prev);
        } else {
          showToast("Reply was not deleted.", "error");
        }
      })
      .catch(() => showToast("Server error. Please try again later.", "error"));
  };

  return (
    <div className="card mt-5 roboto-regular bg-no-repeat bg-cover bg-center dark:bg-cover dark:bg-[url('https://i.postimg.cc/g0Ps8yCt/bgauth.png')] bg-[url('https://i.postimg.cc/d3sJWt3P/Purple-and-Black-Modern-Login-and-Sign-up-Website-Page-UI-Desktop-Prototype.png')] pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-3 sm:px-5 md:px-7 lg:px-10 shadow-sm">
         <Helmet>
        <title>{groupInfo.groupName}</title>
        <meta name="Create Group" content="Helmet application" />
      </Helmet>
      {/* Back Button */}
      <div className="self-end mb-2">
        <GradientShadowButton
          onClick={() => {
            navigate("/groups");
          }}
          className="pr-2 rounded-lg text-xs flex items-center justify-center px-1 py-1 roboto-regular"
        >
          <ChevronsLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back to Groups</span><span className="sm:hidden">Back</span>
        </GradientShadowButton>
      </div>

      {/* Group Image Big sized */}
      <figure className="flex justify-center">
        <img
          src={groupInfo.imageUrl}
          alt="groupPhoto"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl h-auto rounded-lg object-cover"
        />
      </figure>

      {/* Group's Card Body with Infomations */}
      <div className="card-body px-0 sm:px-4 md:px-6 lg:px-8">
        {/* Group Title and Date*/}
        <div className="card-title roboto-bold flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-2">
          {/* Right Part  */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl break-words">{groupInfo.groupName}</h2>
            <div className="badge badge-secondary  text-xs sm:text-sm whitespace-nowrap">
              Starting Date: {groupInfo.startDate}
            </div>
          </div>

          {/* Left Part */}
          <div className="w-full sm:w-auto">
            <button className="btn btn-sm sm:btn-md btn-outline btn-secondary hover:bg-transparent hover:text-cpink hover:border-cpink roboto-bold w-full sm:w-auto text-xs sm:text-sm">
              {dateStatus}
            </button>
          </div>
        </div>

        <hr />

        {/* Host and Group Information */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
          {/* Left Side */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center justify-start gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src={groupInfo.hostPhotoURL || altImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = altImage;
                  }}
                  alt="Host"
                />
              </div>
              <p className="text-xs sm:text-xs">
                Hosted by <br />
                <span className="text-cpink text-sm sm:text-base font-extrabold">
                  {groupInfo.hostName}
                </span>
              </p>
            </div>

            <p className="w-full mt-4 sm:mt-5 roboto-regular text-xs sm:text-sm">{groupInfo.description}</p>
          </div>

          {/* Right Side */}
          <div className="roboto-regular mt-2 w-full lg:w-1/3">
            <div className="w-full">
              <div className="card roboto-regular w-full max-w-full sm:max-w-md lg:max-w-none bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl mx-auto lg:mx-0">
                <div className="card-body p-4 sm:p-6">
                  {/* Warning Badge */}
                  <span className="badge badge-sm badge-warning text-xs">
                    Important Notice
                  </span>

                  {/* Title + Info */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl sm:text-2xl roboto-bold">Before You Join</h2>
                      <p className="text-xs opacity-70 mt-1">
                        Please review the group rules and contact details carefully.
                      </p>
                    </div>
                  </div>

                  {/* Rules List */}
                  <ul className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-3 text-xs">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 flex-shrink-0 text-success mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Only join if you can attend regularly and follow the group schedule.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 flex-shrink-0 text-success mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Respect all members — harassment or inappropriate behavior is not allowed.
                      </span>
                    </li>

                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 flex-shrink-0 text-success mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Meeting locations may change — always confirm before arriving.
                      </span>
                    </li>

                    <li className="opacity-70 flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 flex-shrink-0 text-warning mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v4m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
                        />
                      </svg>
                      <span className="text-red-500 font-semibold">
                        Never share sensitive personal information in public group chats.
                      </span>
                    </li>
                  </ul>

                  {/* Contact Section */}
                  <div className="mt-4 sm:mt-6 rounded-xl border border-white/10 bg-black/20 p-3 sm:p-4">
                    <h3 className="text-sm font-semibold mb-2">Host Contact</h3>

                    <div className="flex flex-col gap-2 text-xs opacity-90">
                      <p className="break-all">
                        📧 <span className="font-semibold">Email:</span>{" "}
                        <span className="underline underline-offset-2">
                          {groupInfo.hostEmail}
                        </span>
                      </p>

                      <p>
                        📱 <span className="font-semibold">Phone:</span>{" "}
                        <span className="ml-0 sm:ml-2 badge badge-sm bg-cpink text-xs inline-block mt-1 sm:mt-0">
                          For Premium Subscribers only
                        </span>
                      </p>

                      <p className="text-[11px] opacity-70">
                        Contact the host only for urgent updates, meeting changes, or support.
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-4 sm:mt-6">
                    <GradientShadowButton
                      onClick={() => {
                        handleReport();
                      }}
                      className="btn btn-xs btn-primary btn-block"
                    >
                      Report to admin
                    </GradientShadowButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join section */}
        <div className="flex flex-col gap-3 sm:gap-4 mt-4">
          <div>
            <p className="text-bold roboto-bold text-sm sm:text-sm">Members Joined: </p>
            <p className="text-sm sm:text-sm">
              {member.length}/{groupInfo.maxMembers}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {!isOverLimit && !joined && !timeOver && (
              <button
                onClick={() => handleJoin(groupInfo._id)}
                className="bg-cpink self-start py-1.5 sm:py-2 cursor-pointer rounded-lg px-4 sm:px-6 text-sm sm:text-sm"
              >
                Join
              </button>
            )}

            {/* Show this when already joined */}
            {joined && !timeOver && (
              <button
                disabled
                className="py-1.5 sm:py-2 bg-gray-600 opacity-80 self-start cursor-not-allowed rounded-lg px-4 sm:px-6 text-sm sm:text-sm"
              >
                Already Joined
              </button>
            )}

            {/* Show this when limit reached and not joined */}
            {isOverLimit && !joined && !timeOver && (
              <button
                onClick={() => {
                  handleLimit();
                }}
                disabled
                className="py-1.5 sm:py-2 bg-gray-600 opacity-80 self-start cursor-not-allowed rounded-lg px-4 sm:px-6 text-sm sm:text-sm"
              >
                Group Full
              </button>
            )}

            {/* Leave button - only show when joined */}
            {joined && !timeOver && (
              <button
                onClick={() => handleLeave(groupInfo._id)}
                className="bg-cpink self-start py-1.5 sm:py-2 cursor-pointer rounded-lg px-4 sm:px-6 text-sm sm:text-sm"
              >
                Leave
              </button>
            )}

            {/* Show this when event date has expired */}
            {timeOver && (
              <button
                disabled
                className="py-1.5 sm:py-2 bg-gray-600 opacity-80 self-start cursor-not-allowed rounded-lg px-4 sm:px-6 text-sm sm:text-sm"
              >
                Event Expired
              </button>
            )}
          </div>
        </div>

        {/* Members of Group Section */}
        <div className="mt-4 sm:mt-5 roboto-bold">
          <hr className="mb-2" />
          <p className="text-sm sm:text-sm">Joined Members</p>

          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {member?.map((m, idx) => (
              <a
                key={m.email || idx}
                data-tooltip-id="member-tooltip"
                data-tooltip-content={m?.name || "No Name"}
                className="animate-in fade-in slide-in-from-left-5 duration-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <img
                  src={m?.photoUrl}
                  alt={m?.name || "Member"}
                  className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-cpink rounded-full object-cover transition-transform hover:scale-110 duration-300"
                />
              </a>
            ))}

            <Tooltip id="member-tooltip" place="bottom" />
          </div>
        </div>

        {/* Post Comment Section */}
        <div className="mt-4 sm:mt-6 roboto-regular flex flex-col gap-1">
          <span className="text-xs sm:text-xs roboto-regular text-amber-60 flex flex-wrap items-center gap-2">
            <span>Commenting as{" "}
            <span className="font-medium text-cpink">{user.displayName}</span>.</span>
            <span className="hidden sm:inline">Your question will be sent to the host.</span>
            {/* Disclaimer hover icon  */}
            <span
              data-tooltip-id="comment-guidelines"
              data-tooltip-content="Please keep comments respectful. Don't use sexual, explicit, or sensitive language."
              className="cursor-pointer max-sm:text-xs max-sm:text-wrap inline-flex items-center justify-center"
            >
              <span className="w-4 h-4 bg-red-900 rounded-full border text-[10px] leading-none flex items-center justify-center">
                i
              </span>
            </span>
            <Tooltip id="comment-guidelines" place="top" />
          </span>

          <Comments
            groupId={groupInfo._id}
            handleRefreshComments={handleRefreshComments}
          />
        </div>

        {/*Show All Comment  Section */}
        <ShowAllComment
          refreshComment={refreshComment}
          groupId={groupInfo._id}
          isHost={isHost}
          handleDeleteComment={handleDeleteComment}
          handleEditComment={handleEditComment}
          handleReplyComment={handleReplyComment}
          handleEditReply={handleEditReply}
          handleDeleteReply={handleDeleteReply}
        />
      </div>
    </div>
  );
};

export default GroupDetails;