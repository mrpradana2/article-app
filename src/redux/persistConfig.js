import storage from "redux-persist/lib/storage";

export const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token"],
};

export const dataPersistConfig = {
  key: "data",
  storage,
  whitelist: ["articles"],
};
