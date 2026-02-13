import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import MyGroup from "../components/MyGroup";
import { AuthContext } from "../contexts/AuthContext";
import AnimatedGradientText from "../utils/AnimatedGradientText";
import GradientShadowButton from "../utils/GradientShadowButton";
import { Helmet } from "react-helmet";

const MyGroups = () => {
  const initialGroups = useLoaderData() ?? [];
  const [updatedGroups, setUpdatedGroups] = useState(initialGroups);
  const { user } = useContext(AuthContext);

  const isGitHubUser = user?.providerData?.some(
    (p) => p?.providerId === "github.com",
  );

  const myGroups = updatedGroups.filter((group) => {
    if (isGitHubUser) {
      return group.hostUid === user?.uid;
    }
    return group.hostEmail === user?.email;
  });

  return (
    <div
      className="
    px-2 py-4 sm:p-6
    bg-center bg-cover bg-no-repeat
    bg-[linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.35)),url('https://i.postimg.cc/d3sJWt3P/Purple-and-Black-Modern-Login-and-Sign-up-Website-Page-UI-Desktop-Prototype.png')]
    dark:bg-[linear-gradient(180deg,rgba(0,0,0,.65),rgba(0,0,0,.45)),url('https://i.postimg.cc/g0Ps8yCt/bgauth.png')]
    rounded-2xl
    border border-white/10
    shadow-lg m-5
  "
    >
      <Helmet>
        <title>My Groups</title>
        <meta name="My Groups" content="Helmet application" />
      </Helmet>
      <h2 className="roboto-bold text-center text-base sm:text-lg md:text-xl mb-4 text-white">
        <span className="flex flex-col">
          <span className="text-xs">Groups managed by</span>
          <AnimatedGradientText className="text-xl">
            {user.displayName}
          </AnimatedGradientText>
        </span>
      </h2>

      <hr className="mb-2 opacity-50" />

      <div className="overflow-x-auto">
        <table className="table table-fixed w-full">
          {/* Hide table head on xs (mobile) */}
          <thead
            className={
              myGroups?.length ? `hidden sm:table-header-group` : "hidden"
            }
          >
            <tr className="text-xs md:text-sm">
              <th className="w-[45%] roboto-bold">Group Name</th>
              <th className="w-[25%] text-center roboto-bold">
                Members Joined
              </th>
              <th className="w-[10%]  roboto-bold"></th>
              <th className="w-[10%] roboto-bold"></th>
              <th className="w-[10%] roboto-bold"></th>
            </tr>
          </thead>
          <tbody>
            {myGroups?.length ? (
              myGroups.map((group) => (
                <MyGroup
                  key={group._id}
                  group={group}
                  setUpdatedGroups={setUpdatedGroups}
                />
              ))
            ) : (
              <tr className="roboto-regular">
                <td colSpan={100} className="py-6 h-100 text-center w-full">
                  <div>
                    <h2 className="text-lg roboto-regular">
                      Your groups will appear here
                    </h2>
                    <GradientShadowButton className="text-xs px-2 py-1 rounded mt-10 text-white ">
                      <Link to={"/creategroup"}>Create your first group</Link>
                    </GradientShadowButton>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
