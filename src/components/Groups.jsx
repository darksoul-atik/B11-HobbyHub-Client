import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { BiCategory } from "react-icons/bi";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router";

const Groups = ({ group }) => {
  const description = group.description.slice(0, 400) + "......";

  const startDate = group.startDate;
  const todaysDate = new Date().toISOString().split("T")[0];

  return (
    <div className="roboto-regular ">
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
            <div className="mb-3 flex flex-col items-center justify-between gap-1">
              <div className="flex-1">
                <button className="btn lg:text-xl sm:text-xs md:text-xs text-cpink roboto-bold hover:opacity-100 text-center">
                  {group.groupName}
                </button>
              </div>

              <div className="flex gap-2 lg:mt-2 justify-center flex-col items-center">
                <div className="lg:w-8">
                  <img
                    className="rounded-full w-full"
                    src={group.hostPhotoURL}
                  />
                </div>
                <span className="roboto-regular text-xs roboto-bold">
                  Hosted by {group?.userName}
                </span>
              </div>
            </div>

            <div>

              <Typography
                className="h-20 text-ellipsis roboto-regular text-gray-400 line-clamp-3 text-xs"
                color="gray"
              >
                {description}
              </Typography>



              <div className="flex  roboto-regular flex-col pt-3 my-2 gap-2">
                <span className="font-bold flex items-center gap-2 roboto-bold text-sm max-sm:text-xs text-white">
                  <FaPeopleGroup /> Members : 0/{group.maxMembers}
                </span>

                <span className="font-bold flex items-center gap-2 roboto-bold text-sm max-sm:text-xs text-white">
                  <FaLocationDot /> Location : {group.meetingLocation || "N/A"}
                </span>

                <span className="font-bold flex items-center gap-2 roboto-bold text-sm max-sm:text-xs text-white">
                  <SlCalender /> Starting Date :{" "}
                  <span className="text-cpink">
                    {group.startDate
                      ? new Date(group.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "N/A"}
                  </span>
                </span>

                <span className="font-bold flex items-center gap-2 roboto-bold text-sm max-sm:text-xs text-white">
                  <BiCategory /> Category : {group.hobbyCategory || "N/A"}
                </span>
              </div>



            </div>
          </CardBody>

          <CardFooter className="pt-3">
            <Link to={`/groups/${group._id}`}>
              <Button
                className={`bg-cpink cursor-pointer p-1 hover:opacity-80 ${
                  startDate < todaysDate ? "bg-slate-600" : ""
                }`}
                size="lg"
                fullWidth={true}
              >
                {startDate < todaysDate ? "Event Ended" : "Visit"}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Groups;
