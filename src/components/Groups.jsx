import React, { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router";
// import GroupCard from "./GroupCard";

const Groups = ({ group }) => {
  /* { "_id": "692937b8b70e3e3ab58ad20a", "groupName": "Lab18 Reunion", "hobbyCategory": "Others", "description": "The Reunion of SSC 2018 Batch of Government Laboratory High School Dhaka will be held on Hotel Sheraton , Gulshan. \nFor more details, stay tuned", "meetingLocation": "Gulshan 2, Dhaka", "maxMembers": "100", "startDate": "2025-12-06", "imageUrl": "https://i.postimg.cc/qRMLLKdT/events-default.jpg", "userName": "AS Ananto 1", "userEmail": "atikpubg01@gmail.com" }, */

  // Show text section
  const [showText, setShowText] = useState(false);
  const getFirstChars = (text, charLimit = 50) => {
    if (!text) return "";
    return text.length > charLimit ? text.slice(0, charLimit) : text;
  };
  const description = group?.description || "No group description was added";
  const isLongDescription = description.length > 50;

  // Event Date Checking section
  const startDate = group.startDate;
  const todaysDate = new Date().toISOString().split("T")[0];

  return (
    <div className="roboto-regular ">
      {/* Group Container */}
      <div className="flex roboto-regular  justify-center">
        <Card className="w-full dark:bg-[url('https://i.postimg.cc/g0Ps8yCt/bgauth.png')] bg-[url('https://i.postimg.cc/d3sJWt3P/Purple-and-Black-Modern-Login-and-Sign-up-Website-Page-UI-Desktop-Prototype.png')] px-5 shadow-lg">
          <CardHeader floated={false} color="blue-gray">
            <img
              src={group.imageUrl}
              alt="Hobby Group Image"
              className="rounded-xl object-cover h-72 w-full border-2 border-cpink"
            />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
          </CardHeader>

          <CardBody>
            {/* group name and date divs */}
            <div className="mb-3 flex flex-col items-center justify-between gap-1">
              <div className="flex-1">
                <button className="btn lg:text-xl sm:text-xs md:text-xs text-cpink roboto-bold hover:opacity-100 text-center">
                  {group.groupName}
                </button>
              </div>

              {/* hosted by section */}
              <div className="flex gap-2 lg:mt-2 justify-center flex-col items-center">
                <div className="lg:w-8">
                  <img
                    className="rounded-full w-full"
                    src={group.hostPhotoURL}
                  />
                </div>
                <span className="roboto-regular text-xs">
                  Hosted by {group?.userName}
                </span>
              </div>
            </div>
            <div>
              <Typography
                className="h-20 text-ellipsis roboto-regular text-gray-400 line-clamp-3 text-xs"
                color="gray"
              >
                {showText
                  ? description
                  : `${getFirstChars(description, 50)}${
                      isLongDescription ? "..." : ""
                    }`}

                {isLongDescription && (
                  <button
                    onClick={() => setShowText(!showText)}
                    className="text-cpink ml-1  underline"
                  >
                    {showText ? "Show less" : "Show more"}
                  </button>
                )}
              </Typography>

              <div className="flex roboto-regular flex-col pt-3 my-2">
                <span className="font-bold flex items-center gap-2 roboto-bold text-sm max-sm:text-xs text-white">
                  <FaPeopleGroup /> Members : 0/{group.maxMembers}
                </span>

                <span className="font-bold flex items-center text-sm roboto-bold max-sm:text-xs gap-2 text-white">
                  <FaLocationDot /> Location : {group.meetingLocation || "N/A"}
                </span>

                <span className="mt-2">
                  <button
                    className={
                      "btn btn-xs btn-soft btn-secondary w-full block text-center"
                    }
                  >
                    Starting Date: {group.startDate}
                  </button>
                </span>

                <span className="mt-2">
                  <button
                    className={
                      "btn btn-xs btn-soft btn-secondary w-full block text-center"
                    }
                  >
                    Category: {group.hobbyCategory}
                  </button>
                </span>
              </div>
            </div>
          </CardBody>

          <CardFooter className="pt-3">
            <Link to={`/groups/${group._id}`}>
              <Button
                className={`bg-cpink cursor-pointer p-1 hover:opacity-80 ${
                  startDate < todaysDate ? "bg-slate-600 " : " "
                }`}
                size="lg"
                fullWidth={true}
              >
                {startDate < todaysDate ? "Event Ended" : "Visit "}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Groups;
