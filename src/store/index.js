import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = [];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    replacePost(state, action) {
      return action.payload;
    },
    editPost(state, action) {
      return [
        action.payload,
        ...state.filter((d) => d.id !== action.payload.id),
      ];
    },
    addPost(state, action) {
      return [...state, action.payload];
    },
    deletePost(state, action) {
      return state.filter((d) => d.id !== action.payload.id);
    },
  },
});

export const fetchPostData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://scene-c942c-default-rtdb.firebaseio.com/posts.json"
      );
      if (!response.ok) {
        throw new Error("could not fetch data");
      }

      const data = await response.json();
      return data;
    };
    try {
      const postData = await fetchData();
      dispatch(postActions.replacePost(postData));
    } catch (error) {
      console.log(error);
    }
  };
};
const store = configureStore({
  reducer: postSlice.reducer,
});

export const postActions = postSlice.actions;

export default store;
