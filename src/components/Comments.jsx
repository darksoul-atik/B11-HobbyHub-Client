import React, { useContext } from "react";
import GradientShadowButton from "../utils/GradientShadowButton";
import { ToastContext } from "../contexts/ToastContext";
import { AuthContext } from "../contexts/AuthContext";

const Comments = ({ groupId, handleRefreshComments }) => {
  const { showToast } = useContext(ToastContext);
  const { user } = useContext(AuthContext);
  const altImage = "https://i.postimg.cc/mgvBzLt5/user.png";

  const commenterName = user?.displayName || "Anonymous";
  const commenterPhoto = user?.photoURL || altImage;

  const handleSendComment = (e) => {
    e.preventDefault();

    const comment = e.target.comment.value;
    const commentTime = new Date().toLocaleString();

    const commentData = {
      comment,
      commenterName,
      commenterPhoto,
      commentTime,
      groupId,
      
    };

    fetch(`http://localhost:3000/groups/${groupId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          showToast("Comment posted successfully");
          e.target.reset();
          handleRefreshComments(); 
        } else {
          showToast("Failed to post comment", "error");
        }
      })
      .catch(() => {
        showToast("Server error. Please try again later.", "error");
      });
  };



  return (
    <form
      onSubmit={handleSendComment}
      className="flex w-[60%] border rounded-md overflow-hidden"
    >
      <input
        className="lg:px-3 text-black text-xs roboto-regular lg:py-2 bg-yellow-50 w-full focus:outline-none"
        type="text"
        name="comment"
      />

      <GradientShadowButton
        type="submit"
        className="lg:px-3 text-xs lg:py-2 bg-cpink rounded-none"
      >
        Comment
      </GradientShadowButton>
    </form>
  );
};


export default Comments;
