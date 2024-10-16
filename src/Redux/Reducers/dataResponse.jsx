// import { create } from "@mui/material/styles/createTransitions";
import { createAction, createReducer } from "@reduxjs/toolkit";

const Userdata = createAction("Userdata");

const initialState = {
  userdata: {},
};

export const responseReducer = createReducer(initialState, (builder) => {
  builder.addCase(Userdata, (state, action) => {
    state.userdata = action.payload;
  });
});
