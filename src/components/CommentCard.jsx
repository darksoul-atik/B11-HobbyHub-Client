import React, { useContext, useState } from "react";
import { Pencil, Trash2, Reply } from "lucide-react";
import GradientShadowButton from "../utils/GradientShadowButton";
import { Button } from "@material-tailwind/react";
import { AuthContext } from "../contexts/AuthContext";

const CommentCard = ({
  comment,
  isHost,
  handleDeleteComment,
  handleEditComment,
  handleReplyComment,
}) => {
  const { showToast } = useContext(AuthContext);
  const { comment: text, commenterName, commenterPhoto, commentTime ,editedAt } = comment;
  const avatarFallback = "https://i.postimg.cc/mgvBzLt5/user.png";
 console.log(editedAt);
 
  // Comment Edit Helper Functions
  const [openEditInput, setOpenEditInput] = useState(false);
  const [commentText, setCommentText] = useState(comment.comment);

  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl p-3 sm:p-4 shadow-sm">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <img
          src={commenterPhoto || avatarFallback}
          onError={(e) => {
            e.currentTarget.src = avatarFallback;
          }}
          alt={commenterName || "User"}
          className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full object-cover border border-white/20 flex-shrink-0"
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3">
            <p className="text-xs sm:text-sm font-semibold text-white/90 truncate">
              {commenterName || "Anonymous"}
            </p>

            <span className="text-[10px] sm:text-[11px] text-white/60">
              {commentTime || ""}
            </span>
          </div>

          {/* Comment text */}
          <p className="mt-2 text-[11px] sm:text-xs leading-relaxed text-white/80 break-words">
            {text}
          </p>

          {/* Actions */}
          <div className="mt-3 inline-flex overflow-hidden rounded-md border border-white/10 bg-transparent text-[10px] sm:text-[11px] text-white/70">
            {/* Edit */}
            <button
              onClick={() => setOpenEditInput(true)}
              type="button"
              className="flex items-center gap-1 px-3 py-1.5 bg-transparent transition cursor-pointer hover:bg-amber-400/10 hover:text-amber-400"
            >
              <Pencil size={13} />
              Edit
            </button>

            <span className="w-px bg-white/10" />

            {/* Delete */}
            <button
              onClick={() => {
                handleDeleteComment(comment._id);
              }}
              type="button"
              className="flex items-center gap-1 px-3 py-1.5 bg-transparent transition cursor-pointer hover:bg-red-500/10 hover:text-red-400"
            >
              <Trash2 size={13} />
              Delete
            </button>

            {/* Reply — only host */}
            {isHost && (
              <>
                <span className="w-px bg-white/10" />
                <button
                  onClick={() => {
                    handleReplyComment(comment._id, comment);
                  }}
                  type="button"
                  className="flex items-center gap-1 px-3 py-1.5 bg-transparent transition cursor-pointer hover:bg-white/10 hover:text-white"
                >
                  <Reply size={13} />
                  Reply
                </button>
              </>
            )}
          </div>

          {/* Edit Comment Section */}
          <div className="">
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                ${
                  openEditInput
                    ? "opacity-100 translate-y-0 max-h-40 sm:max-h-32 md:max-h-28 lg:max-h-24"
                    : "opacity-0 -translate-y-2  max-h-0"
                }`}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const trimmed = commentText.trim();
                  if (!trimmed) {
                    showToast(
                      "Comment can not be empty, please write something!","error"
                    );
                   return;
                  }
                handleEditComment(comment._id, trimmed);
                  setOpenEditInput(false);
                }}
                className="
                  flex mt-1
                  w-full sm:w-[80%] md:w-[70%] lg:w-[60%]
                  border rounded-md overflow-hidden
                "
              >
                <input
                  className="
                    w-full bg-orange-100 text-black roboto-regular focus:outline-none
                    text-[11px] sm:text-xs md:text-xs
                    px-2 sm:px-3 py-1.5 sm:py-2
                   
                  "
                  type="text"
                  name="comment"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  autoFocus
                />

                <button
                  type="submit"
                  className="
    rounded-none whitespace-nowrap
    text-[11px] sm:text-xs md:text-xs
    px-2 sm:px-3 py-1.5 sm:py-2
    font-semibold
    bg-white/15 text-white
    hover:bg-white/25
    active:scale-[0.98]
     cursor-pointer
    transition-all duration-200
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
  "
                >
                  Edit Comment
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCommentText(comment.comment);
                    setOpenEditInput(false);
                  }}
                  className="
    rounded-none whitespace-nowrap
    text-[11px] sm:text-xs md:text-xs
    px-2 sm:px-3 py-1.5 sm:py-2
    font-semibold
     cursor-pointer
    bg-transparent text-white/70
    border-l border-white/10
    hover:bg-white/10 hover:text-white
    active:scale-[0.98]
    transition-all duration-200
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
  "
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
