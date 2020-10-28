import {
  FETCH_POSTS_REQUEST,
  FETCH_PROPERTIES_REQUEST,
  FETCH_USERS_REQUEST,
} from "./constants";

export const getPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const getUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const getPropertiesRequest = () => ({
  type: FETCH_PROPERTIES_REQUEST,
});
