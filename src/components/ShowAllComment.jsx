import React, { useEffect, useState } from "react";
import FullScreenLoader from "../utils/FullScreenLoader";
import CommentCard from "./CommentCard";

const ShowAllComment = ({
  groupId,
  refreshComment,
  isHost,
  handleDeleteComment,
  handleEditComment,
  handleReplyComment,
  handleEditReply,      
  handleDeleteReply,   
  editStatus
}) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!groupId) return;

    fetch(`http://localhost:3000/groups/${groupId}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, [groupId, refreshComment]);

  if (!comments.length) {
    return <p className="text-xs opacity-60">No comments yet.</p>;
  }

  return (
    <div className="mt-3 flex flex-col gap-2">
      {comments.map((comment) => (
        <CommentCard
          isHost={isHost}
          key={comment._id}
          comment={comment}
          handleDeleteComment={handleDeleteComment}
          handleEditComment={handleEditComment}
          handleReplyComment={handleReplyComment}
          handleEditReply={handleEditReply}       
          handleDeleteReply={handleDeleteReply}   
          editStatus={editStatus}
        />
      ))}
    </div>
  );
};

export default ShowAllComment;
