import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import GradientShadowButton from "../utils/GradientShadowButton";
import { MdDelete, MdEdit } from "react-icons/md";
import { HiUserRemove } from "react-icons/hi";

const MyGroup = ({ group }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const host = user?.email === group?.hostEmail;


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
        fetch(`http://localhost:3000/groups/${id}`, {
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
        <td className="block">
          <div className="rounded-xl border border-white/10 bg-black/40 p-4 shadow-md backdrop-blur-md space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-20 h-16 overflow-hidden rounded-lg border">
                <img
                  className="w-full h-full object-cover"
                  src={group.imageUrl}
                  alt="group"
                />
              </div>

              <div className="min-w-0">
                <p className="font-bold text-sm truncate">{group.groupName}</p>
                <p className="text-xs opacity-60 truncate">
                  {group.meetingLocation}
                </p>
              </div>
            </div>

            <p className="text-xs opacity-60 truncate">{group.startDate}</p>

            {/* warning text */}
            {!host && (
              <p className="text-[10px] italic text-gray-400 roboto-italic">
                Only the host can delete, edit, or remove members.
              </p>
            )}

            {/* buttons */}
            <div className="flex flex-col gap-2">
              <Link
                to={`/updateGroup/${group._id}`}
                className={`px-2 font-semibold py-2 rounded-lg text-xs text-center
                  bg-blue-600 text-white
                  transition-all duration-200 ease-in-out
                  hover:bg-white hover:text-blue-600 hover:shadow-md
                  active:scale-[0.98]
                  ${host ? "" : "pointer-events-none opacity-50"}`}
              >
                <span className="flex items-center justify-center gap-1">
                  <MdEdit size={18} />
                  Edit Group
                </span>
              </Link>

              <button
                onClick={() => handleDelete(group._id)}
                className={`px-2 font-semibold py-2 rounded-lg text-xs cursor-pointer
                  bg-red-700 text-white
                  transition-all duration-200 ease-in-out
                  hover:bg-white hover:text-red-700 hover:shadow-md
                  active:scale-[0.98]
                  ${host ? "" : "pointer-events-none opacity-50"}`}
              >
                <span className="flex items-center justify-center gap-1">
                  <MdDelete size={18} />
                  Delete Group
                </span>
              </button>

              <button
                className={`px-2 font-semibold py-2 rounded-lg text-xs cursor-pointer
                  bg-yellow-600 text-white
                  transition-all duration-200 ease-in-out
                  hover:bg-white hover:text-yellow-600 hover:shadow-md
                  active:scale-[0.98]
                  ${host ? "" : "pointer-events-none opacity-50"}`}
              >
                <span className="flex items-center justify-center gap-1">
                  <HiUserRemove size={18} />
                  Remove Member
                </span>
              </button>
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
          0/{group.maxMembers}
        </td>

        {/* Edit */}
        <td className="w-[15%]">
          <Link
            to={`/updateGroup/${group._id}`}
            className={`px-2 font-semibold py-1 rounded-lg text-xs text-center inline-block
              bg-blue-600 text-white
              transition-all duration-200 ease-in-out
              hover:bg-white hover:text-blue-600 hover:shadow-md
              active:scale-[0.98]
              ${host ? "" : "pointer-events-none opacity-50"}`}
          >
            <span className="flex items-center justify-center gap-1">
              <MdEdit size={18} />
              Edit Group
            </span>
          </Link>
        </td>

        {/*  Delete */}
        <td className="w-[15%]">
          <button
            onClick={() => handleDelete(group._id)}
            className={`px-2 font-semibold py-1 rounded-lg text-xs cursor-pointer
              bg-red-700 text-white
              transition-all duration-200 ease-in-out
              hover:bg-white hover:text-red-700 hover:shadow-md
              active:scale-[0.98]
              ${host ? "" : "pointer-events-none opacity-50"}`}
          >
            <span className="flex items-center justify-center gap-1">
              <MdDelete size={18} />
              Delete Group
            </span>
          </button>
        </td>

        {/*  Remove Member */}
        <td className="w-[15%]">
          <button
            className={`px-2 font-semibold py-1 rounded-lg text-xs cursor-pointer
              bg-yellow-600 text-white
              transition-all duration-200 ease-in-out
              hover:bg-white hover:text-yellow-600 hover:shadow-md
              active:scale-[0.98]
              ${host ? "" : "pointer-events-none opacity-50"}`}
          >
            <span className="flex items-center justify-center gap-1">
              <HiUserRemove size={18} />
              Remove Member
            </span>
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyGroup;
