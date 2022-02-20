import { FETCH_USERS, SET_USERS } from "./constants";

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
});
