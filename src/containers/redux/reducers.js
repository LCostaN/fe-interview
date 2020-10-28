import {
  FETCH_POSTS_FAILED,
  FETCH_POSTS_SUCCESS,
  FETCH_PROPERTIES_FAILED,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_USERS_FAILED,
  FETCH_USERS_SUCCESS,
  POSTS_READY,
  POSTS_WAITING,
  PROPERTIES_READY,
  PROPERTIES_WAITING,
  USERS_READY,
  USERS_WAITING,
} from "./constants";

const initialState = {
  posts: [],
  users: [],
  properties: [],
  errorMsg: "",
  isWaiting: { posts: false, users: false, properties: false },
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.posts };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.users };
    case FETCH_PROPERTIES_SUCCESS:
      return { ...state, properties: action.properties };
    case FETCH_POSTS_FAILED:
    case FETCH_USERS_FAILED:
    case FETCH_PROPERTIES_FAILED:
      return { ...state, errorMsg: action.message };
    case USERS_WAITING:
      return {
        ...state,
        errorMsg: "",
        isWaiting: {
          ...state.isWaiting,
          users: true,
        },
      };
    case POSTS_WAITING:
      return {
        ...state,
        errorMsg: "",
        isWaiting: {
          ...state.isWaiting,
          posts: true,
        },
      };
    case PROPERTIES_WAITING:
      return {
        ...state,
        errorMsg: "",
        isWaiting: {
          ...state.isWaiting,
          properties: true,
        },
      };
    case USERS_READY:
      return {
        ...state,
        isWaiting: {
          ...state.isWaiting,
          users: false,
        },
      };
    case POSTS_READY:
      return {
        ...state,
        isWaiting: {
          ...state.isWaiting,
          posts: false,
        },
      };
    case PROPERTIES_READY:
      return {
        ...state,
        isWaiting: {
          ...state.isWaiting,
          properties: false,
        },
      };
    default:
      return state;
  }
}
