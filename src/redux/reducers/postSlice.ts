import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PostDetail } from "@/constant/api";

interface postsSliceState {
  posts: PostDetail[];
  searchResult: PostDetail[];
}

const initialState: postsSliceState = {
  posts: [],
  searchResult: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<PostDetail[]>) {
      state.posts = action.payload;
    },
    setSearchResult(state, action: PayloadAction<PostDetail[]>) {
      state.searchResult = action.payload;
    },
  },
});

export const { setPosts, setSearchResult } = postsSlice.actions;

export default postsSlice.reducer;
