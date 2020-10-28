import { httpGetRequest } from "../utils/http";
import { FETCH_POSTS, FETCH_PROPERTIES, FETCH_USERS } from "../utils/endpoints";

/**
 * fetch Posts
 */
export async function fetchPosts() {
  return await httpGetRequest(FETCH_POSTS);
}

/**
 * fetch users
 */
export async function fetchUsers() {
  return await httpGetRequest(FETCH_USERS);
}

/**
 * fetch Properties
 */
export async function fetchProperties() {
  return await httpGetRequest(FETCH_PROPERTIES);
}
