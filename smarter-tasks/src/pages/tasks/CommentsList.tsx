// import  { useEffect } from "react";
// import { getComments } from "../../context/comment/actions"; // Corrected import path
import {
  // useCommentsDispatch,
  useCommentsState,
} from "../../context/comment/context"; // Corrected import path
import { useMembersState } from "../../context/members/context";


const CommentList =() => {
  // const commentDispatch = useCommentsDispatch();
  const commentState = useCommentsState();
  const memberState = useMembersState(); // 

  const { comments, isLoading, isError, errorMessage } = commentState;
  console.log(comments)

  // useEffect(() => {
  //   // Fetch comments for the specific task when the component mounts
  //   getComments(commentDispatch, projectId, taskId);
  // }, [commentDispatch, projectId, taskId]);

  const getusername = (userId:number) => {
    const username = memberState?.members?.find((member) => member.id === userId);
    return username?.name || "Unknown User";
  };

  if (comments.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const formatDate = (isoDate:any) => {
    const dateObj = new Date(isoDate);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <h1 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
        Comments:
      </h1>
      {comments.map((comment) => (
        <div key={comment.createdAt} className="comment flex justify-between">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
            {getusername(comment.owner)}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
            {formatDate(comment.createdAt)}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
            {comment.description}
          </h5>
        </div>
      ))}
    </>
  );
};

export default CommentList;
