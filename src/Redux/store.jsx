import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { responseReducer } from "./Reducers/dataResponse";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import { buttonclickReducer } from "./Reducers/buttonclicks";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  datareponse: responseReducer,
  buttonclicks: buttonclickReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk],
});

export const persistor = persistStore(Store);

export const resetStore = async () => {
  await persistor.purge(); // Clears the persisted state
};
