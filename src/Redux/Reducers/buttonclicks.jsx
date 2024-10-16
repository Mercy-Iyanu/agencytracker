import { createAction, createReducer } from "@reduxjs/toolkit";

const CurrentTab = createAction("CurrentTab");
const initialState = {
  currenttab: 1,
};

export const buttonclickReducer = createReducer(initialState, (builder) => {
  builder.addCase(CurrentTab, (state, action) => {
    state.currenttab = action.payload;
  });
});
