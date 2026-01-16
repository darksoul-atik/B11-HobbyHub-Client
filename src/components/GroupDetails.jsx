import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import GradientShadowButton from "../utils/GradientShadowButton";
import { AuthContext } from "../contexts/AuthContext";
import TimeCount from "../utils/TimeCount";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const GroupDetails = () => {
  const groupInfo = useLoaderData();
  const dateStatus = TimeCount(groupInfo);
  const {user} = useContext(AuthContext)
  const host = user.email === groupInfo.hostEmail;
  const navigate = useNavigate();

  console.log(user.email);
  

  const handleDelete = () => {

  
    console.log(groupInfo.hostEmail);
    
    
    Swal.fire({
      html: `
    <div>
      <p class="text-sm">Are you sure you want to delete? </p> <br>
         <span class="roboto-bold text-xl text-cpink dark:text-lpurple">${groupInfo.groupName}</span>
    
    </div>
  `,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",

      // Frosted background behind popup
      backdrop: `
    bg-black/30
    backdrop-blur-sm
  `,

      // Make popup itself glass-like
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
  };

  /*
 { "_id": "692937b8b70e3e3ab58ad20a", "groupName": "Lab18 Reunion", "hobbyCategory": "Others", "description": "The Reunion of SSC 2018 Batch of Government Laboratory High School Dhaka will be held on Hotel Sheraton , Gulshan. \nFor more details, stay tuned", "meetingLocation": "Gulshan 2, Dhaka", "maxMembers": "100", "startDate": "2025-12-06", "imageUrl": "https://i.postimg.cc/qRMLLKdT/events-default.jpg", "userName": "AS Ananto 1", "userEmail": "atikpubg01@gmail.com" }
*/
  return (
    <div className="card roboto-regular bg-no-repeat bg-cover bg-center dark:bg-cover dark:bg-[url('https://i.postimg.cc/g0Ps8yCt/bgauth.png')] bg-[url('https://i.postimg.cc/d3sJWt3P/Purple-and-Black-Modern-Login-and-Sign-up-Website-Page-UI-Desktop-Prototype.png')] pt-10 px-10  shadow-sm">
      {/* Group Image Big sized */}
      <figure>
        <img src={groupInfo.imageUrl} alt="groupPhoto" />
      </figure>

      {/* Group's Card Body with Infomations */}
      <div className="card-body">
        <h2 className="card-title flex justify-between">
          {/* Right Part  */}
          <div className="flex items-center gap-2">
            {groupInfo.groupName}
            <div className="badge badge-secondary">
              Starting Date: {groupInfo.startDate}
            </div>
          </div>

          {/* Left Part */}
          <div>
            <button className="btn btn-outline btn-secondary hover:bg-transparent hover:text-cpink  hover:border-cpink roboto-bold">
              {dateStatus}
            </button>
          </div>
        </h2>

        <hr />

        {/* Host Information */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-10">
            <img className="rounded-full w-full" src={groupInfo.hostPhotoURL} />
          </div>
          <p className="text-xs">
            Hosted by{" "}
            <span className="font-extrabold">{groupInfo.hostName}</span>{" "}
          </p>
        </div>

        <p className="lg:w-[60%]">{groupInfo.description}</p>

        {/* Join section */}
        <div className="flex flex-col gap-4 ">
          <div>
            <p className="text-bold roboto-bold">Members Joined: </p>
            <p> 0/{groupInfo.maxMembers}</p>
          </div>

          <button className="bg-cpink self-start  py-1 cursor-pointer rounded-lg px-3 ">
            Join
          </button>
        </div>

        {/* Host Admin Section */}
        <div className="card-actions lg:self-end flex flex-col  ">

          <p className={` text-xs italic text-gray-400 roboto-italic ${host ? "hidden" :" "} `}>Only the host can delete, edit, or remove members.</p>

          {/* Host Admin Button Section */}
          <div className="flex gap-2">
         <div className={`badge badge-outline cursor-pointer hover:bg-cpink hover:border-cpink ${host ? "" : "pointer-events-none opacity-50"}`}>
            <Link
              to={`/updateGroup/${groupInfo._id}`}
              className="cursor-pointer"
            >
              Edit
            </Link>
          </div>

        <div className={`badge badge-outline cursor-pointer hover:bg-cpink hover:border-cpink ${host ? "" : "pointer-events-none opacity-50"}`}>
        
            <button
              onClick={() => {
                handleDelete(groupInfo._id);
              }}
              className="cursor-pointer"
            >
              Delete
            </button>
          </div>

          <div className={`badge badge-outline cursor-pointer hover:bg-cpink hover:border-cpink ${host ? "" : "pointer-events-none opacity-50"}`}>
            <button className="cursor-pointer">Remove Members</button>
          </div>
          </div>

        </div>
        <Tooltip id="my-tooltip" />
      </div>
    </div>
  );
};

export default GroupDetails;
