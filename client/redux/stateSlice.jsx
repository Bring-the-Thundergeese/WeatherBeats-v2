import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  type: '',
  temp: 0,
  zipcode: 10001,
  city: '',
  url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  bg: 'green',
  playlist: '',
  token: '',
  access: false,
  entered: false,
};

const stateSlice = createSlice({
  name: 'updater',
  initialState,
  reducers: {
    updateAll: (state, action) => {
      state.type = action.payload.type;
      state.temp = action.payload.temp;
      state.zipcode = action.payload.zip;
      state.city = action.payload.city;
      state.url = action.payload.url;
      state.bg = action.payload.bg;
    },
    updatePlaylist: (state, action) => {
      state.playlist = action.payload;
    },
    updateUser: (state, action) => {
      state.username = action.payload;
    },
    updateToken: (state, action) => {
      console.log("Changing your token's value");
      state.token = action.payload;
    },
    updateAccess: (state, action) => {
      state.access = action.payload
    },
    updateEntered: (state, action) => {
      state.entered = action.payload.value;
    },
  }
});

export const { updateAll, updateUser, updatePlaylist, updateToken, updateAccess, updateEntered } =
  stateSlice.actions;
export default stateSlice.reducer;
