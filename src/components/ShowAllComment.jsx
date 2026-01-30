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
}) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!groupId) return;

    setLoading(true);

    fetch(`http://localhost:3000/groups/${groupId}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(Array.isArray(data) ? data : []);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.error("Fetch error:", err);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, [groupId, refreshComment]);

  if (loading) {
    return <FullScreenLoader></FullScreenLoader>;
  }

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
        ></CommentCard>
      ))}
    </div>
  );
};

export default ShowAllComment;
