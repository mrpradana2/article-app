import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { authPersistConfig } from "./persistConfig";
import { dataPersistConfig } from "./persistConfig";

import authReducer from "./slices/authSlice";
import uiReducer from "./slices/uiSlice";
import dataReducer from "./slices/dataSlice";

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  ui: uiReducer,
  data: persistReducer(dataPersistConfig, dataReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
