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

const GroupDetails = () => {
  const groupInfo = useLoaderData();
  const dateStatus = TimeCount(groupInfo);
  const { showToast } = useContext(ToastContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const timeOver =  dateStatus === "Event date has expired";


  
  

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
  const handleReport = () => {
    showToast("Reported to Admin");
  };

  return (
    <div className="card roboto-regular bg-no-repeat bg-cover bg-center dark:bg-cover dark:bg-[url('https://i.postimg.cc/g0Ps8yCt/bgauth.png')] bg-[url('https://i.postimg.cc/d3sJWt3P/Purple-and-Black-Modern-Login-and-Sign-up-Website-Page-UI-Desktop-Prototype.png')] pt-10 px-10  shadow-sm">
      {/* Back Button */}
      <div className="self-end mb-2">
        <GradientShadowButton
          onClick={() => {
            navigate("/groups");
          }}
          className="pr-2 rounded-lg text-xs flex items-center justify-center  px-1 py-1 roboto-regular"
        >
          <ChevronsLeft /> Back to Groups
        </GradientShadowButton>
      </div>

      {/* Group Image Big sized */}
      <figure className="flex justify-center">
        <img
          src={groupInfo.imageUrl}
          alt="groupPhoto"
          className="
      w-full
      max-w-xs
      sm:max-w-sm
      md:max-w-md
      lg:max-w-4xl
      h-auto
      rounded-lg
      object-cover
    "
        />
      </figure>

      {/* Group's Card Body with Infomations */}
      <div className="card-body ">
        {/* Group Title and Date*/}
        <div className="card-title  roboto-bold  flex justify-between">
          {/* Right Part  */}
          <div className="flex items-center gap-2">
            {groupInfo.groupName}
            <div className="badge badge-secondary">
              Starting Date: {groupInfo.startDate}
            </div>
          </div>

          {/* Left Part */}
          <div className="">
            <button className="btn btn-outline btn-secondary hover:bg-transparent hover:text-cpink  hover:border-cpink roboto-bold">
              {dateStatus}
            </button>
          </div>
        </div>

        <hr />

        {/* Host and Group Information */}
        <div className="flex  ">
          {/* Left Side */}
          <div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-10">
                <img
                  className="rounded-full w-full"
                  src={groupInfo.hostPhotoURL || altImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = altImage;
                  }}
                />
              </div>
              <p className="text-xs">
                Hosted by <br />
                <span className="text-cpink text-sm font-extrabold">
                  {groupInfo.hostName}
                </span>{" "}
              </p>
            </div>

            <p className="lg:w-[70%]  mt-5 ">{groupInfo.description}</p>
          </div>

          {/* Right Side */}

          <div className="roboto-regular mt-2">
            <div className="">
              <div className="card roboto-regular  w-96 bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl">
                <div className="card-body">
                  {/* Warning Badge */}
                  <span className="badge badge-sm badge-warning">
                    Important Notice
                  </span>

                  {/* Title + Info */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl roboto-bold">Before You Join</h2>
                      <p className="text-xs opacity-70 mt-1">
                        Please review the group rules and contact details
                        carefully.
                      </p>
                    </div>
                  </div>

                  {/* Rules List */}
                  <ul className="mt-6 flex flex-col gap-3 text-xs">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
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
                        Only join if you can attend regularly and follow the
                        group schedule.
                      </span>
                    </li>

                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
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
                        Respect all members — harassment or inappropriate
                        behavior is not allowed.
                      </span>
                    </li>

                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
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
                        Meeting locations may change — always confirm before
                        arriving.
                      </span>
                    </li>

                    <li className="opacity-70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-warning"
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
                        Never share sensitive personal information in public
                        group chats.
                      </span>
                    </li>
                  </ul>

                  {/* Contact Section */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
                    <h3 className="text-sm font-semibold mb-2">Host Contact</h3>

                    <div className="flex flex-col gap-2 text-xs opacity-90">
                      <p>
                        📧 <span className="font-semibold">Email:</span>{" "}
                        <span className="underline underline-offset-2">
                          {groupInfo.hostEmail}
                        </span>
                      </p>

                      <p>
                        📱 <span className="font-semibold">Phone:</span>{" "}
                        <span className="">
                          <span className="ml-2 badge badge-sm bg-cpink text-xs">
                            For Premium Subscribers only
                          </span>
                        </span>
                      </p>

                      <p className="text-[11px] opacity-70">
                        Contact the host only for urgent updates, meeting
                        changes, or support.
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-6">
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
        <div className="flex flex-col gap-4 ">
          <div>
            <p className="text-bold roboto-bold">Members Joined: </p>
            <p>
              {" "}
              {member.length}/{groupInfo.maxMembers}
            </p>
          </div>

          <div className="flex gap-2">
            {!isOverLimit && !joined && !timeOver && (
              <button
                onClick={() => handleJoin(groupInfo._id)}
                className="bg-cpink self-start py-1 cursor-pointer rounded-lg px-3"
              >
                Join
              </button>
            )}

            {/* Show this when already joined */}
            {joined && !timeOver && (
              <button
                disabled
                className="py-1 bg-gray-600 opacity-80 self-start cursor-not-allowed rounded-lg px-3"
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
                className="py-1 bg-gray-600 opacity-80 self-start cursor-not-allowed rounded-lg px-3"
              >
                Group Full
              </button>
            )}

            {/* Leave button - only show when joined */}
            {joined && !timeOver && (
              <button
                onClick={() => handleLeave(groupInfo._id)}
                className="bg-cpink self-start py-1 cursor-pointer rounded-lg px-3"
              >
                Leave
              </button>
            )}

            {/* Show this when event date has expired */}
            {timeOver && (
              <button
                disabled
                className="py-1 bg-gray-600 opacity-80 self-start cursor-not-allowed rounded-lg px-3"
              >
                Event Expired
              </button>
            )}
          </div>
        </div>


        {/* Members of Group Section */}

        <div className="mt-5 roboto-bold">
          <hr className="mb-2" />
          <p>Joined Members</p>

          <div className="mt-4  flex flex-wrap">

          
            {member?.map((m, idx) => (
              <a
                key={m.email || idx}
                data-tooltip-id="member-tooltip"
                data-tooltip-content={m?.name || "No Name"}
                className=" lg:mr-2 animate-in fade-in slide-in-from-left-5 duration-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <img
                  src={m?.photoUrl}
                  alt={m?.name || "Member"}
                  className="w-10  border-2 border-cpink h-10 rounded-full object-cover transition-transform hover:scale-110 duration-300"
                />
              </a>
            ))}

            <Tooltip id="member-tooltip" place="bottom"/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;