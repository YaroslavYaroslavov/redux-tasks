import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers(state, action) {
      state.users.push(...action.payload);
    },
  },
});

export default toolkitSlice.reducer;
export const { setUsers } = toolkitSlice.actions;
