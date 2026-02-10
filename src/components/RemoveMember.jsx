import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import { HiUserRemove } from "react-icons/hi";
import { IoArrowBack } from "react-icons/io5";
import Swal from "sweetalert2";
import AnimatedGradientText from "../utils/AnimatedGradientText";
import GradientShadowButton from "../utils/GradientShadowButton";
import { Helmet } from "react-helmet";

const RemoveMember = () => {
  const groupInfo = useLoaderData();
  const members = groupInfo.members || [];
  const navigate = useNavigate();

  const handleRemoveMember = (memberEmail, memberName) => {
    Swal.fire({
      html: `
        <div>
          <p class="text-sm">Are you sure you want to remove?</p> <br>
          <span class="roboto-bold text-xl text-cpink dark:text-lpurple">${memberName}</span>
        </div>
      `,
      text: "This member will be removed from the group!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove!",
      cancelButtonText: "Cancel",
      backdrop: `
        bg-black/30
        backdrop-blur-sm
      `,
      background: "transparent",
      customClass: {
        popup: `
          roboto-regular
          rounded-2xl
          shadow-2xl
          px-6 py-5
          backdrop-blur-md
          border border-white/20
          bg-cblack/70
          !text-white
        `,
        title: `
          roboto-bold
          text-lg
          !text-white
        `,
        htmlContainer: `
          roboto-regular
          text-xl
          !text-white
        `,
        confirmButton: `
          roboto-regular
          text-sm
          px-4 py-2
          rounded-lg
          transition
          bg-red-600 hover:bg-red-700
          !text-white
          cursor-pointer
          mr-1
        `,
        cancelButton: `
          ml-1
          roboto-regular
          text-sm
          px-4 py-2
          rounded-lg
          transition
          bg-gray-600 hover:bg-gray-700
          !text-white
          cursor-pointer
        `,
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedMembers = members.filter(
          (member) => member.email !== memberEmail,
        );

        fetch(`http://localhost:3000/groups/${groupInfo._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedMembers),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire({
                title: "Removed!",
                text: `${memberName} has been removed from the group.`,
                icon: "success",
                backdrop: `
                  bg-black/30
                  backdrop-blur-sm
                `,
                background: "transparent",
                customClass: {
                  popup: `
                    roboto-regular
                    rounded-2xl
                    shadow-2xl
                    text-sm
                    px-6 py-5
                    backdrop-blur-md
                    border border-white/20
                    bg-cblack/70
                    !text-white
                  `,
                  title: "roboto-bold text-sm !text-white",
                  htmlContainer: "roboto-regular !text-sm !text-white",
                  confirmButton: `
                    roboto-regular
                    text-sm
                    px-4 py-2
                    rounded-lg
                    transition
                    bg-lpurple hover:bg-cpurple
                    !text-white
                    dark:bg-cpurple dark:hover:bg-lpurple
                    cursor-pointer
                  `,
                },
                buttonsStyling: false,
              }).then(() => {
                // Reload the page to reflect changes
                window.location.reload();
              });
            }
          })
          .catch((error) => {
            console.error("Error removing member:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to remove member. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  const avatarFallback = "https://i.postimg.cc/mgvBzLt5/user.png";

  return (
    <div className="min-h-screen px-2 py-4 sm:p-6">
      <Helmet>
        <title>Remove Member</title>
        <meta name="Create Group" content="Helmet application" />
      </Helmet>
      <div
        className="max-w-5xl mx-auto
        bg-center bg-cover bg-no-repeat
        bg-[linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.35)),url('https://i.postimg.cc/d3sJWt3P/Purple-and-Black-Modern-Login-and-Sign-up-Website-Page-UI-Desktop-Prototype.png')]
        dark:bg-[linear-gradient(180deg,rgba(0,0,0,.65),rgba(0,0,0,.45)),url('https://i.postimg.cc/g0Ps8yCt/bgauth.png')]
        rounded-2xl
        border border-white/10
        shadow-2xl
        backdrop-blur-xl
        p-4 sm:p-6 md:p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xs sm:text-2xl md:text-xl font-bold text-white roboto-bold">
              Manage Members
            </h2>
            <AnimatedGradientText className="text-xs sm:text-sm text-white/60 mt-1 roboto-regular">
              {groupInfo.groupName}
            </AnimatedGradientText>
          </div>

          <GradientShadowButton
            onClick={() => navigate(-1)}
            className="flex roboto-regular items-center gap-2 px-2 py-2 rounded-lg
              bg-white/10 hover:bg-white/20
              text-white text-xs
              transition-all duration-200
               border-white/20"
          >
            <IoArrowBack size={18} />
            <span className="hidden sm:inline">Back</span>
          </GradientShadowButton>
        </div>

        {/* Members Count */}
        <div className="mb-4 px-4 py-3 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-white/80 roboto-regular">
            Total Members:{" "}
            <span className="font-bold text-white">{members.length}</span> /{" "}
            {groupInfo.maxMembers}
          </p>
        </div>

        {/* Members List */}
        {members.length === 0 ? (
          <div className="text-center py-12">
            <FaUserAlt className="mx-auto  text-white/20 mb-4" size={48} />
            <p className="text-white/60 text-xs roboto-regular">
              No members in this group yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-3 sm:gap-4">
            {members.map((member, index) => (
              <div
                key={index}
                className="group
                  rounded-xl
                  border border-white/10
                  bg-white/5 hover:bg-white/10
                  backdrop-blur-md
                  p-3 sm:p-4
                  transition-all duration-200
                  hover:shadow-lg hover:border-white/20"
              >
                <div className="flex items-center justify-between gap-3">
                  {/* Member Info */}
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <img
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/20"
                        src={member.photoUrl || avatarFallback}
                        onError={(e) => {
                          e.currentTarget.src = avatarFallback;
                        }}
                        alt={member.name}
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-cblack"></div>
                    </div>

                    {/* Name & Email */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs  sm:text-base font-semibold text-white roboto-bold truncate">
                        {member.name || "Anonymous"}
                      </p>
                      <p className="text-[0.55rem]  sm:text-sm text-white/60 roboto-regular truncate">
                        {member.email}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() =>
                      handleRemoveMember(member.email, member.name)
                    }
                    className="flex-shrink-0
                      px-3 py-1 sm:px-4 sm:py-1
                      rounded-lg
                      bg-red-600 hover:bg-red-700
                      text-white
                      text-xs sm:text-xs
                      cursor-pointer
                      font-semibold
                      transition-all duration-200
                      hover:shadow-lg
                      active:scale-95
                      flex items-center gap-1.5 sm:gap-2"
                  >
                    <HiUserRemove size={16} className="sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Remove</span>
                    <span className="sm:hidden">×</span>
                  </button>
                </div>

                {/* Member Index (optional) */}
                <div className="mt-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] sm:text-xs text-white/40 roboto-regular">
                    Member #{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveMember;
