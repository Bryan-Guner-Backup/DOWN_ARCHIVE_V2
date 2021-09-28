import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["edamam"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});
export const persistor = persistStore(store);
