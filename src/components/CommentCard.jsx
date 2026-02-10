import React, { useContext, useState } from "react";
import { Pencil, Trash2, Reply } from "lucide-react";
import { AuthContext } from "../contexts/AuthContext";

const CommentCard = ({
  comment,
  isHost,
  handleDeleteComment,
  handleEditComment,
  handleReplyComment,
  handleEditReply,
  handleDeleteReply,
}) => {
  const { showToast, user } = useContext(AuthContext);

  const {
    comment: text,
    commenterName,
    commenterPhoto,
    commentTime,
    editedAt,
    replies = [],
  } = comment;

  const avatarFallback = "https://i.postimg.cc/mgvBzLt5/user.png";

  // Comment edit
  const [openEditInput, setOpenEditInput] = useState(false);
  const [commentText, setCommentText] = useState(text);

  // Reply create
  const [openReplyInput, setOpenReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  // Reply edit
  const [editingReplyIndex, setEditingReplyIndex] = useState(null);
  const [replyEditText, setReplyEditText] = useState("");

  // Permissions
  const isCommentOwner = commenterName === user?.displayName;
  const canEditComment = isCommentOwner;
  const canDeleteComment = isHost || isCommentOwner;

  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl p-3 sm:p-4 shadow-sm">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <img
          src={commenterPhoto || avatarFallback}
          onError={(e) => (e.currentTarget.src = avatarFallback)}
          alt={commenterName || "User"}
          className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full object-cover border border-white/20 flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs sm:text-sm font-semibold text-white/90 truncate">
              {commenterName || "Anonymous"}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] text-white/60">
                {commentTime}
              </span>
              {editedAt && (
                <span className="text-[10px] sm:text-[11px] text-white/50 italic">
                  edited
                </span>
              )}
            </div>
          </div>

          {/* Comment text */}
          <p className="mt-2 text-[11px] sm:text-xs leading-relaxed text-white/80 break-words">
            {text}
          </p>

          {/* Actions */}
          <div className="mt-3 inline-flex overflow-hidden rounded-md border border-white/10 text-[10px] sm:text-[11px] text-white/70">
            {canEditComment && (
              <button
                onClick={() => {
                  setOpenEditInput(true);
                  setOpenReplyInput(false);
                  setEditingReplyIndex(null);
                }}
                type="button"
                className="flex items-center gap-1 px-3 py-1.5 cursor-pointer hover:bg-amber-400/10 hover:text-amber-400 transition"
              >
                <Pencil size={13} />
                Edit
              </button>
            )}

            {canDeleteComment && (
              <>
                {canEditComment && <span className="w-px bg-white/10" />}
                <button
                  onClick={() => handleDeleteComment(comment._id)}
                  type="button"
                  className="flex items-center gap-1 px-3 py-1.5 cursor-pointer hover:bg-red-500/10 hover:text-red-400 transition"
                >
                  <Trash2 size={13} />
                  Delete
                </button>
              </>
            )}

            {isHost && (
              <>
                <span className="w-px bg-white/10" />
                <button
                  onClick={() => {
                    setOpenReplyInput(true);
                    setOpenEditInput(false);
                    setEditingReplyIndex(null);
                  }}
                  type="button"
                  className="flex items-center gap-1 px-3 py-1.5 cursor-pointer hover:bg-white/10 hover:text-white transition"
                >
                  <Reply size={13} />
                  Reply
                </button>
              </>
            )}
          </div>

          {/* Edit comment input */}
          {openEditInput && (
            <div className="mt-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const trimmed = commentText.trim();
                  if (!trimmed) {
                    showToast("Comment can not be empty!", "error");
                    return;
                  }
                  handleEditComment(comment._id, trimmed);
                  setOpenEditInput(false);
                }}
                className="flex w-full sm:w-[80%] border rounded-md overflow-hidden"
              >
                <input
                  className="w-full bg-orange-100 text-black text-[11px] sm:text-xs px-2 sm:px-3 py-1.5 sm:py-2 focus:outline-none"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  autoFocus
                />

                <button className="px-2 sm:px-3 bg-white/15 text-white">
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCommentText(text);
                    setOpenEditInput(false);
                  }}
                  className="px-2 sm:px-3 bg-transparent text-white/70 border-l border-white/10"
                >
                  Cancel
                </button>
              </form>
            </div>
          )}

          {/* Replies display */}
          {replies.length > 0 && (
            <div className="mt-3 ml-6 space-y-2">
              {replies.map((reply, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg border border-white/10 bg-white/5"
                >
                  {editingReplyIndex !== index ? (
                    <>
                      <p className="text-[11px] sm:text-xs text-white/80">
                        <span className="font-semibold text-white/90">
                          Host replied:
                        </span>{" "}
                        <span className="text-cpink font-medium">
                          @{commenterName}
                        </span>{" "}
                        {reply.text}
                      </p>

                      {reply.repliedAt && (
                        <span className="block mt-1 text-[10px] text-white/50">
                          {reply.repliedAt}
                        </span>
                      )}

                      {isHost && (
                        <div className="mt-2 inline-flex overflow-hidden rounded-md border border-white/10 text-[10px] sm:text-[11px] text-white/70">
                          <button
                            onClick={() => {
                              setEditingReplyIndex(index);
                              setReplyEditText(reply.text);
                              setOpenReplyInput(false);
                              setOpenEditInput(false);
                            }}
                            className="flex items-center gap-1 px-3 py-1.5 cursor-pointer hover:bg-amber-400/10 hover:text-amber-400 transition"
                          >
                            <Pencil size={13} />
                            Edit
                          </button>

                          <span className="w-px bg-white/10" />

                          <button
                            onClick={() =>
                              handleDeleteReply(comment._id, index)
                            }
                            className="flex items-center gap-1 px-3 py-1.5 cursor-pointer hover:bg-red-500/10 hover:text-red-400 transition"
                          >
                            <Trash2 size={13} />
                            Delete
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const trimmed = replyEditText.trim();
                        if (!trimmed) {
                          showToast("Reply can not be empty!", "error");
                          return;
                        }
                        handleEditReply(comment._id, index, trimmed);
                        setEditingReplyIndex(null);
                        setReplyEditText("");
                      }}
                      className="flex w-full sm:w-[80%] border rounded-md overflow-hidden"
                    >
                      <input
                        className="w-full bg-orange-100 text-black text-[11px] sm:text-xs px-2 sm:px-3 py-1.5 sm:py-2 focus:outline-none"
                        value={replyEditText}
                        onChange={(e) => setReplyEditText(e.target.value)}
                        autoFocus
                      />

                      <button className="px-2 sm:px-3 bg-white/15 text-white">
                        Save
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setEditingReplyIndex(null);
                          setReplyEditText("");
                        }}
                        className="px-2 sm:px-3 bg-transparent text-white/70 border-l border-white/10"
                      >
                        Cancel
                      </button>
                    </form>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Reply input */}
          {isHost && openReplyInput && (
            <div className="mt-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const trimmed = replyText.trim();
                  if (!trimmed) {
                    showToast("Reply can not be empty!", "error");
                    return;
                  }
                  handleReplyComment(comment._id, trimmed);
                  setReplyText("");
                  setOpenReplyInput(false);
                }}
                className="flex w-full sm:w-[80%] border rounded-md overflow-hidden"
              >
                <input
                  className="w-full bg-orange-100 text-black text-[11px] sm:text-xs px-2 sm:px-3 py-1.5 sm:py-2 focus:outline-none"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder={`Replying to @${commenterName}`}
                  autoFocus
                />

                <button className="px-2 sm:px-3 bg-white/15 text-white">
                  Reply
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setReplyText("");
                    setOpenReplyInput(false);
                  }}
                  className="px-2 sm:px-3 bg-transparent text-white/70 border-l border-white/10"
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;