
import { API_ENDPOINT } from "../../config/constants";
import {
  CommentAvailableAction,
  CommentsDispatch,
} from "./types";

export const addComment = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string,
  comment: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ description: comment }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create comment");
    }

    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    dispatch({ type: CommentAvailableAction.CREATE_COMMENT_SUCCESS });
    getComments(dispatch, projectID, taskID);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "Unable to create comment",
    });
  }
};

export const getComments = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentAvailableAction.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const data = await response.json();
    console.log("comments" ,data);
    dispatch({
      type: CommentAvailableAction.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });

  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentAvailableAction.FETCH_COMMENTS_FAILURE,
      payload: "Unable to load comments",
    });
  }
};