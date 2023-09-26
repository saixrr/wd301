
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useCommentsDispatch,
} from "../../context/comment/context";
import { addComment,  } from "../../context/comment/actions";
import { CommentsPayload } from "../../context/comment/types";
import CommentList from "./CommentsList";

export default function NewComment() {
  // let [isOpen, setIsOpen] = useState(true);

  let { projectID, taskID } = useParams();
  console.log("taskID", taskID);
//   let navigate = useNavigate();
  const commentDispatch = useCommentsDispatch();
  // Use react-hook-form to create form submission handler and state.
  const {
    register,
    handleSubmit,
  } = useForm<CommentsPayload>({});
  //   const commentState = useCommentsState();

  const onSubmit: SubmitHandler<CommentsPayload> = async (data) => {
    console.log("Comment=", data);
    const { description } = data;
    try {
      // Invoke the actual API and create a task.
      addComment(commentDispatch, projectID ?? "", taskID ?? "", description);
    } catch (error) {
      console.error("Operation failed:", error);
    }
  };
  return (
    <>
      <div className="mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            required
            placeholder="Enter comment"
            autoFocus
            id="commentBox"
            // Register the description field
            {...register("description", { required: true })}
            className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
          <button
            type="submit"
            // Set an id for the submit button
            id="addCommentBtn"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Add Comment
          </button>
        </form>
        <CommentList />
      </div>
    </>
  );
}