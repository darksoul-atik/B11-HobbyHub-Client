import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import GradientShadowButton from "../utils/GradientShadowButton";
import { SlCalender } from "react-icons/sl";
import { AuthContext } from "../contexts/AuthContext";
import TimeCount from "../utils/TimeCount";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { ChevronsLeft } from "lucide-react";

const GroupDetails = () => {
  const groupInfo = useLoaderData();
  // const location = useLocation();
  // const setGroups = location.state?.setGroups;  // <-- GET setGroups
  const dateStatus = TimeCount(groupInfo);
  
 
  const navigate = useNavigate();



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

{/* 
 */}
        {/* Host Admin Section */}


        
      </div>
    </div>
  );
};

export default GroupDetails;
