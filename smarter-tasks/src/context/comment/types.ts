export type User = {
  id: number;
  name: string;
  email: string
}

export type Comment = {
  id: number;
  description: string;
  createdAt: string;
  owner: number;
  taskID: number;
  user: User
};

export type CommentsState = {
    comments: CommentsPayload[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }

export type CommentsPayload = Comment;

export enum CommentAvailableAction {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",
  CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
}

export type CommentActions =
  | { type: CommentAvailableAction.FETCH_COMMENTS_REQUEST }
  | { type: CommentAvailableAction.FETCH_COMMENTS_SUCCESS; payload: CommentsPayload[] }
  | { type: CommentAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: CommentAvailableAction.CREATE_COMMENT_REQUEST } 
  | { type: CommentAvailableAction.CREATE_COMMENT_SUCCESS } 
  | { type: CommentAvailableAction.CREATE_COMMENT_FAILURE; payload: string } 
  
export type CommentsDispatch = React.Dispatch<CommentActions>;
