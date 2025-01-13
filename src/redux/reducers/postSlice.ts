import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PostDetail } from "@/constant/api";

interface postsSliceState {
  posts: PostDetail[];
}

const initialState: postsSliceState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<PostDetail[]>) {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
