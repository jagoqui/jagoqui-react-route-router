import { createSlice } from "@reduxjs/toolkit";
import { Roles, UserInfo } from "../../models";
import {
  clearLocalStorageUser,
  getDbUserState,
  setAndPersistsDbUserState,
  USER_LOCAL_STORAGE_KEY,
} from "../../utilities";

export const EmptyUserState: UserInfo = {
  id: 0,
  email: "",
  name: "",
  rol: Roles.USER,
};

export const userSlice = createSlice({
  name: "user",
  initialState:
    getDbUserState<UserInfo>(USER_LOCAL_STORAGE_KEY) ?? EmptyUserState,
  reducers: {
    getUser: (state) => state,
    createUser: (_, { payload }) => {
      setAndPersistsDbUserState<UserInfo>(USER_LOCAL_STORAGE_KEY, payload);
      return payload;
    },
    updateUser: (state, { payload }) => {
      const updatedUser = { ...state, ...payload };
      setAndPersistsDbUserState(USER_LOCAL_STORAGE_KEY, updatedUser);
      return updatedUser;
    },
    resetUser: () => {
      clearLocalStorageUser(USER_LOCAL_STORAGE_KEY);
      return EmptyUserState;
    },
  },
});

export const { getUser, createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
