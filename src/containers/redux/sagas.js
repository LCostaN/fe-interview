import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPosts,
  fetchProperties,
  fetchUsers,
} from "../../services/http_client";
import {
  FETCH_POSTS_FAILED,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_PROPERTIES_FAILED,
  FETCH_PROPERTIES_REQUEST,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_USERS_FAILED,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  POSTS_READY,
  POSTS_WAITING,
  PROPERTIES_READY,
  PROPERTIES_WAITING,
  USERS_READY,
  USERS_WAITING,
} from "./constants";

function* handleRequestPosts(action) {
  yield put({ type: POSTS_WAITING });
  try {
    const payload = yield call(fetchPosts);

    if (payload) {
      yield put({
        type: FETCH_POSTS_SUCCESS,
        posts: payload,
      });
    } else {
      yield put({
        type: FETCH_POSTS_FAILED,
        message: FETCH_POSTS_FAILED,
      });
    }
  } catch (e) {
    yield put({
      type: FETCH_POSTS_FAILED,
      message: FETCH_POSTS_FAILED,
    });
  }
  yield put({ type: POSTS_READY });
}

function* handleRequestUsers(action) {
  yield put({ type: USERS_WAITING });
  try {
    const payload = yield call(fetchUsers);
    if (payload) {
      yield put({
        type: FETCH_USERS_SUCCESS,
        users: payload,
      });
    } else {
      yield put({
        type: FETCH_USERS_FAILED,
        message: FETCH_USERS_FAILED,
      });
    }
  } catch (e) {
    yield put({
      type: FETCH_USERS_FAILED,
      message: FETCH_USERS_FAILED,
    });
  }
  yield put({ type: USERS_READY });
}

function* handleRequestProperties(action) {
  yield put({ type: PROPERTIES_WAITING });
  try {
    const payload = yield call(fetchProperties);
    if (payload) {
      yield put({
        type: FETCH_PROPERTIES_SUCCESS,
        properties: payload,
      });
    } else {
      yield put({
        type: FETCH_PROPERTIES_FAILED,
        message: FETCH_PROPERTIES_FAILED,
      });
    }
  } catch (e) {
    yield put({
      type: FETCH_PROPERTIES_FAILED,
      message: FETCH_PROPERTIES_FAILED,
    });
  }
  yield put({ type: PROPERTIES_READY });
}

export default all([
  takeLatest(FETCH_POSTS_REQUEST, handleRequestPosts),
  takeLatest(FETCH_USERS_REQUEST, handleRequestUsers),
  takeLatest(FETCH_PROPERTIES_REQUEST, handleRequestProperties),
]);
