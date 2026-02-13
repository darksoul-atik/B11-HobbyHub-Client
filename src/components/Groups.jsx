import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
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
import { Helmet } from "react-helmet";

const Groups = ({ group }) => {
  const description = group.description.slice(0, 400) + "......";
  const startDate = group.startDate;
  const todaysDate = new Date().toISOString().split("T")[0];
  const altImage = "https://i.postimg.cc/mgvBzLt5/user.png";

  return (
    <motion.div
      className="roboto-regular"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <Helmet>
        <title>Group</title>
        <meta name="Create Group" content="Helmet application" />
      </Helmet>

      <div className="flex roboto-regular justify-center">
        <Card className="w-full dark:bg-[url('https://i.postimg.cc/g0Ps8yCt/bgauth.png')] bg-[url('https://i.postimg.cc/d3sJWt3P/Purple-and-Black-Modern-Login-and-Sign-up-Website-Page-UI-Desktop-Prototype.png')] px-3 sm:px-4 md:px-5 shadow-lg">
          <CardHeader floated={false} color="blue-gray">
            <img
              src={group.imageUrl}
              alt="Hobby Group Image"
              className="rounded-xl object-cover h-48 sm:h-56 md:h-64 lg:h-72 w-full border-2 border-cpink"
            />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
          </CardHeader>

          <CardBody className="px-2 sm:px-4 md:px-6">
            <div className="mb-3 flex flex-col items-center justify-between gap-1">
              <div className="flex-1">
                <button className="btn text-sm sm:text-base md:text-lg lg:text-xl text-cpink roboto-bold hover:opacity-100 text-center">
                  {group.groupName}
                </button>
              </div>

              <div className="flex gap-2 mt-2 justify-center flex-col items-center">
                <div className="w-6 sm:w-7 md:w-8">
                  <img
                    className="rounded-full w-full"
                    src={group.hostPhotoURL || altImage}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = altImage;
                    }}
                    alt="Host"
                  />
                </div>
                <span className="roboto-regular text-[10px] sm:text-xs roboto-bold text-center">
                  Hosted by{" "}
                  <span className="text-cpink">{group?.userName}</span>
                </span>
              </div>
            </div>

            <div>
              <Typography
                className="h-16 sm:h-18 md:h-20 text-ellipsis roboto-regular text-gray-400 line-clamp-3 text-[11px] sm:text-xs"
                color="gray"
              >
                {description}
              </Typography>

              <div className="flex roboto-regular flex-col pt-2 sm:pt-3 my-2 gap-1.5 sm:gap-2">
                <span className="font-bold flex items-center gap-1.5 sm:gap-2 roboto-bold text-xs sm:text-sm text-white">
                  <FaPeopleGroup className="flex-shrink-0" />
                  <span className="truncate">
                    Members : {group?.members?.length ?? 0}/{group?.maxMembers}
                  </span>
                </span>

                <span className="font-bold flex items-center gap-1.5 sm:gap-2 roboto-bold text-xs sm:text-sm text-white">
                  <FaLocationDot className="flex-shrink-0" />
                  <span className="truncate">
                    Location : {group.meetingLocation || "N/A"}
                  </span>
                </span>

                <span className="font-bold flex items-center gap-1.5 sm:gap-2 roboto-bold text-xs sm:text-sm text-white">
                  <SlCalender className="flex-shrink-0" />
                  <span className="break-words">
                    Starting Date :{" "}
                    <span className="text-cpink">
                      {group.startDate
                        ? new Date(group.startDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )
                        : "N/A"}
                    </span>
                  </span>
                </span>

                <span className="font-bold flex items-center gap-1.5 sm:gap-2 roboto-bold text-xs sm:text-sm text-white">
                  <BiCategory className="flex-shrink-0" />
                  <span className="truncate">
                    Category : {group.hobbyCategory || "N/A"}
                  </span>
                </span>
              </div>
            </div>
          </CardBody>

          <CardFooter className="pt-2 sm:pt-3 px-2 sm:px-4 md:px-6">
            <Link to={`/groups/${group._id}`}>
              <Button
                className={`bg-cpink cursor-pointer p-1 text-xs sm:text-sm md:text-base hover:opacity-80 ${
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
    </motion.div>
  );
};

export default Groups;
