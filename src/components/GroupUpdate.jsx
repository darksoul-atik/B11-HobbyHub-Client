import React, { useContext } from "react";
import AnimatedGradientText from "../utils/AnimatedGradientText";
import GradientShadowButton from "../utils/GradientShadowButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { AuthContext } from "../contexts/AuthContext";
import { ToastContext } from "../contexts/ToastContext";
import { useLoaderData } from "react-router";
import GroupDetails from "./GroupDetails";

const GroupUpdate = () => {
  // Contexts
  const auth = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);

  const {
    _id,
    groupName,
    description,
    hobbyCategory,
    _hostEmail,
    _hostName,
    _hostPhotoURL,
    _hostUid,
    imageUrl,
    maxMembers,
    meetingLocation,
    startDate,
    _userEmail,
    _userName,
  } = useLoaderData();

  const defaultImageURL = "https://i.postimg.cc/qRMLLKdT/events-default.jpg";

  // Logged-in user info (host)
  const displayName = auth?.user?.displayName || "";
  const email = auth?.user?.email || "";
  const photoURL = auth?.user?.photoURL || "";
  const uid = auth?.user?.uid || "";

  // Date (min today)
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!auth?.user) {
      showToast("Please login first to create a group.", "error");
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);

    // Default group image if empty
    if (!formDataObject.imageUrl) {
      formDataObject.imageUrl = defaultImageURL;
    }

    alert(formDataObject.maxMembers)

    formDataObject.hostName = displayName;
    formDataObject.hostEmail = email;
    formDataObject.hostPhotoURL = photoURL;
    formDataObject.hostUid = uid;
    formDataObject.userName = displayName;
    formDataObject.userEmail = email;

    // fetch("http://localhost:3000/groups/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formDataObject),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data?.insertedId) {
    //       showToast(`${formDataObject?.groupName} has been created successfully`);
    //       form.reset();
    //     } else {
    //       showToast("Error occurred while creating event, please try again", "error");
    //     }
    //   })
    //   .catch(() => {
    //     showToast("Server error. Please try again later.", "error");
    //   });
  };

  return (
    <div className="hero min-h-screen dark:bg-[url('https://i.postimg.cc/g0Ps8yCt/bgauth.png')] bg-[url('https://i.postimg.cc/d3sJWt3P/Purple-and-Black-Modern-Login-and-Sign-up-Website-Page-UI-Desktop-Prototype.png')]  rounded-lg mt-5 mb-5 bg-cblack dark:bg-lblack">
      <div className="hero-content max-sm:py-10 max-sm:px-3 px-10 gap-10 flex-col lg:flex-row w-full">
        {/* FORM CARD */}
        <div
          className="
            card w-full max-w-xl
            bg-base-100/20 dark:bg-lwhite/10
            backdrop-blur-xl
            shadow-xl
            rounded-2xl
            text-base-content dark:text-lpurple
          "
        >
          <div className="card-body">
            <AnimatedGradientText className="max-sm:text-lg roboto-bold text-2xl font-bold mb-4 text-primary">
              Edit Information
            </AnimatedGradientText>

            <form className="space-y-3 roboto-light" onSubmit={handleSubmit}>
              {/* Group Name */}
              <div className="form-control">
                <label className="label">
                  <span className="font-bold max-sm:text-xs label-text mb-1 dark:text-lpink">
                    Group Name
                  </span>
                </label>
                <input
                  type="text"
                  name="groupName"
                  placeholder="e.g. Weekend Sketchers"
                  className="
                    input placeholder:text-xs input-bordered w-full
                    bg-purple-800/50 text-base-content
                    dark:bg-lwhite dark:border-lcyan dark:text-black dark:font-regular
                    focus:outline-none focus:ring-0 focus:border-cpink
                  "
                  defaultValue={groupName}
                  required
                />
              </div>

              {/* Hobby Category */}
              <div className="form-control">
                <label className="label">
                  <span className="font-bold max-sm:text-xs label-text mb-1 dark:text-lpink">
                    Hobby Category
                  </span>
                </label>
                <select
                  name="hobbyCategory"
                  className="
                    max-sm:text-xs text-xs
                    select select-bordered w-full placeholder:text-xs
                    bg-purple-800/50 text-base-content dark:text-black
                    dark:bg-lwhite dark:border-lcyan
                    focus:outline-none focus:ring-0 focus:border-cpink
                  "
                  defaultValue={hobbyCategory}
                  required
                >
                  <option value="" disabled>
                    Select a hobby category
                  </option>
                  <option>Drawing &amp; Painting</option>
                  <option>Photography</option>
                  <option>Video Gaming</option>
                  <option>Fishing</option>
                  <option>Running</option>
                  <option>Cooking</option>
                  <option>Reading</option>
                  <option>Writing</option>
                  <option>Coding</option>
                  <option>Others</option>
                </select>
              </div>

              {/* Description */}
              <div className="form-control">
                <label className="label">
                  <span className="font-bold max-sm:text-xs label-text mb-1 dark:text-lpink">
                    Description
                  </span>
                </label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Describe your hobby group..."
                  className="
                    textarea textarea-bordered w-full placeholder:text-xs
                    bg-purple-800/50 text-base-content
                    dark:bg-lwhite dark:border-lcyan dark:text-black
                  "
                  defaultValue={description}
                  required
                />
              </div>

              {/* Meeting Location */}
              <div className="form-control">
                <label className="label">
                  <span className="font-bold max-sm:text-xs label-text mb-1 dark:text-lpink">
                    Meeting Location
                  </span>
                </label>
                <input
                  type="text"
                  name="meetingLocation"
                  placeholder="e.g. Central Park, Discord..."
                  className="
                    input input-bordered w-full placeholder:text-xs
                    bg-purple-800/50 text-base-content
                    dark:bg-lwhite dark:border-lcyan dark:text-black
                    focus:outline-none focus:ring-0 focus:border-cpink
                  "
                  defaultValue={meetingLocation}
                  required
                />
              </div>

              {/* Max Members */}
              <div className="form-control">
                <label className="label">
                  <span className="font-bold max-sm:text-xs label-text mb-1 dark:text-lpink">
                    Max Members
                  </span>
                </label>
                <input
                  type="number"
                  name="maxMembers"
                  min={1}
                  placeholder="e.g. 10"
                  className="
                    input input-bordered w-full placeholder:text-xs
                    bg-purple-800/50 text-base-content
                    dark:bg-lwhite dark:border-lcyan dark:text-black
                    focus:outline-none focus:ring-0 focus:border-cpink
                  "
                  defaultValue={maxMembers}
                  required
                />
              </div>

              {/* Start Date */}
              <div className="form-control">
                <label className="label">
                  <span className="font-bold max-sm:text-xs label-text mb-1 dark:text-lpink">
                    Start Date
                  </span>
                </label>
                <input
                  type="date"
                  min={formattedDate}
                  name="startDate"
                  className="
                    input input-bordered text-xs w-full placeholder:text-xs
                    bg-purple-800/50 text-base-content
                    dark:bg-lwhite dark:border-lcyan dark:text-black
                    focus:outline-none focus:ring-0 focus:border-cpink
                  "
                  defaultValue={startDate}
                  required
                />
              </div>

              {/* Image URL */}
              <div className="form-control">
                <label className="label">
                  <span className="font-bold max-sm:text-xs label-text mb-1 dark:text-lpink">
                    Image URL
                  </span>
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  placeholder="https://example.com/image.jpg"
                  className="
                    input input-bordered w-full text-xs placeholder:text-xs
                    bg-purple-800/50 text-base-content
                    dark:bg-lwhite dark:border-lcyan dark:text-black
                    focus:outline-none focus:ring-0 focus:border-cpink
                  "
                  defaultValue={imageUrl}
                />
              </div>

              {/* User Name (readonly) */}
              <div className="form-control">
                <label className="label">
                  <span className="font-bold max-sm:text-xs label-text mb-1 dark:text-lpink">
                    User Name
                  </span>
                </label>
                <input
                  type="text"
                  name="userName"
                  readOnly
                  value={displayName}
                  className="
                    input input-bordered text-xs w-full placeholder:text-xs
                    bg-purple-800/50 text-gray-500 font-bold
                    dark:bg-lwhite dark:text-black opacity-70
                    focus:outline-none focus:ring-0 focus:border-cpink
                  "
                />
              </div>

              {/* User Email (readonly) */}
              <div className="form-control">
                <label className="label">
                  <span className="font-bold max-sm:text-xs label-text mb-1 dark:text-lpink">
                    User Email
                  </span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  readOnly
                  value={email}
                  className="
                    input input-bordered text-xs w-full placeholder:text-xs
                    bg-purple-800/50 text-gray-500 font-bold
                    dark:bg-lwhite dark:text-black opacity-70
                    focus:outline-none focus:ring-0 focus:border-cpink
                  "
                />
              </div>

              {/* Create Button */}
              <div className="form-control flex justify-center mt-4">
                <GradientShadowButton  className="px-5 py-1 rounded-md">
                 Save
                </GradientShadowButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupUpdate;
