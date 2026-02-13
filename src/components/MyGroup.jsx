import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import { MdDelete, MdEdit } from "react-icons/md";
import { HiUserRemove } from "react-icons/hi";

const MyGroup = ({ group }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const memberCount = group?.members?.length ?? 0;

  console.log(group);

  // Email Host Check (your system)
  const hostByEmail = user?.email === group?.hostEmail;

  // GitHub Host Check (fallback)
  const isGitHubUser = user?.providerData?.some(
    (p) => p?.providerId === "github.com",
  );

  const hostByUid = isGitHubUser && user?.uid === group?.hostUid;

  // Final host condition (email OR github)
  const host = hostByEmail || hostByUid;

  const handleDelete = (id) => {
    Swal.fire({
      html: `
        <div>
          <p class="text-sm">Are you sure you want to delete? </p> <br>
          <span class="roboto-bold text-xl text-cpink dark:text-lpurple">${group.groupName}</span>
        </div>
      `,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
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
          bg-lpurple hover:bg-cpurple
          !text-white
          dark:bg-cpurple dark:hover:bg-lpurple
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
          bg-lpink hover:bg-cpink
          !text-white
          dark:bg-cpink dark:hover:bg-lpink
          cursor-pointer
        `,
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobby-hub-server-ivory.vercel.app/groups/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
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
                  title: "roboto-bold text-sm  !text-white",
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
              });

              navigate("/groups");
            }
          });
      }
    });
  };

  return (
    <>
      {/* XS (Mobile Card View only) */}
      <tr className="sm:hidden">
        <td className="block p-0">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-md ring-1 ring-white/10">
            {/* top */}
            <div className="flex items-start gap-3">
              <div className="w-20 h-16 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img
                  className="w-full h-full object-cover"
                  src={group?.imageUrl}
                  alt={group?.groupName || "group"}
                  loading="lazy"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white truncate">
                  {group?.groupName}
                </p>
                <p className="mt-1 text-xs text-white/60 break-words whitespace-normal">
                  {group?.meetingLocation}
                </p>

                <div className="mt-2 inline-flex items-center rounded-full border border-white/10 bg-black/30 px-2 py-1">
                  <span className="text-[11px] text-white/70">
                    {group?.startDate}
                  </span>
                </div>
              </div>
            </div>

            {/* host notice */}
            {!host && (
              <div className="mt-3 rounded-xl border border-white/10 bg-black/20 p-3">
                <p className="text-[11px] text-white/60">
                  Only the host can <span className="text-white/80">edit</span>,{" "}
                  <span className="text-white/80">delete</span>, or{" "}
                  <span className="text-white/80">remove members</span>.
                </p>
              </div>
            )}

            {/* actions */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <Link
                to={`/updateGroup/${group?._id}`}
                className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold
            border border-white/10 bg-white/10 text-white
            hover:bg-white/15 active:scale-[0.98] transition
            ${host ? "" : "pointer-events-none opacity-50"}`}
                title="Edit group"
              >
                <MdEdit size={16} />
                <span className="hidden xs:inline">Edit</span>
              </Link>

              <button
                type="button"
                onClick={() => handleDelete(group?._id)}
                className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold
            border border-red-500/20 bg-red-500/15 text-red-100
            hover:bg-red-500/25 hover:text-white active:scale-[0.98] transition
            ${host ? "" : "pointer-events-none opacity-50"}`}
                title="Delete group"
              >
                <MdDelete size={16} />
                <span className="hidden xs:inline">Delete</span>
              </button>

              <Link
                to={`/remove/${group?._id}`}
                className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold
            border border-yellow-500/20 bg-yellow-500/15 text-yellow-100
            hover:bg-yellow-500/25 hover:text-white active:scale-[0.98] transition
            ${host ? "" : "pointer-events-none opacity-50"}`}
                title="Remove member"
              >
                <HiUserRemove size={16} />
                <span className="hidden xs:inline">Remove</span>
              </Link>
            </div>
          </div>
        </td>
      </tr>

      <tr className="hidden roboto-regular sm:table-row align-middle transition-all duration-200 ease-in-out hover:bg-white/5">
        <td className="w-[45%]">
          <div className="flex items-center gap-3">
            <div className="border w-20 h-14 md:w-24 md:h-16 lg:w-40 lg:h-24 overflow-hidden rounded-md">
              <img
                className="w-full h-full object-cover"
                src={group.imageUrl}
                alt="group"
              />
            </div>

            <div className="min-w-0">
              <p className="font-bold truncate text-xs md:text-sm lg:text-base">
                {group.groupName}
              </p>
              <p className="text-xs opacity-50 truncate">
                {group.meetingLocation}
              </p>
              <p className="text-xs font-bold text-cpink opacity-60 truncate">
                {group.startDate}
              </p>
            </div>
          </div>
        </td>

        <td className="w-[25%] text-center text-xs md:text-sm">
          {memberCount}/{group.maxMembers}
        </td>

        {/* Edit */}
        <td className="w-[15%]">
          <Link
            to={`/updateGroup/${group._id}`}
            className={`px-2 font-semibold py-1 rounded-lg text-xs text-center inline-flex items-center justify-center gap-1
              bg-blue-600 text-white
              transition-all duration-200 ease-in-out
              hover:bg-white hover:text-blue-600 hover:shadow-md
              active:scale-[0.98]
              ${host ? "" : "pointer-events-none opacity-50"}`}
          >
            <MdEdit size={18} />
            Edit Group
          </Link>
        </td>

        {/* Delete */}
        <td className="w-[15%]">
          <button
            onClick={() => handleDelete(group._id)}
            className={`px-2 font-semibold py-1 rounded-lg text-xs cursor-pointer flex items-center justify-center gap-1
              bg-red-700 text-white
              transition-all duration-200 ease-in-out
              hover:bg-white hover:text-red-700 hover:shadow-md
              active:scale-[0.98]
              ${host ? "" : "pointer-events-none opacity-50"}`}
          >
            <MdDelete size={18} />
            Delete Group
          </button>
        </td>

        {/* Remove Member */}
        <td className="w-[15%]">
          <Link
            to={`/remove/${group._id}`}
            className={`px-2 font-semibold py-1 rounded-lg text-xs text-center inline-flex items-center justify-center gap-1
              bg-yellow-600 text-white
              transition-all duration-200 ease-in-out
              hover:bg-white hover:text-yellow-600 hover:shadow-md
              active:scale-[0.98]
              ${host ? "" : "pointer-events-none opacity-50"}`}
          >
            <HiUserRemove size={18} />
            Remove Member
          </Link>
        </td>
      </tr>
    </>
  );
};

export default MyGroup;
