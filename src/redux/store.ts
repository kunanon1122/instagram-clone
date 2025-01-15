import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import counterReducer from "@/redux/reducers/counterSlice";
import postsReducer from "@/redux/reducers/postSlice";
import menuReducer from "@/redux/reducers/menuSlice";

import { catApi } from "@/services/catApi";
import { dogApi } from "@/services/dogApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    menu: menuReducer,
    [catApi.reducerPath]: catApi.reducer,
    [dogApi.reducerPath]: dogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([catApi.middleware, dogApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
