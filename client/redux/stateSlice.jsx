import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  type: '',
  temp: 0,
  zipcode: 10001,
  city: '',
  url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  bg: "https://images.hdqwalls.com/wallpapers/sunny-fields.jpg",
  playlist: '',
  token: '',
  access: false,
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
    updateType: (state, action) => {
      state.type = action.payload;
    },
    updateTemp: (state, action) => {
      state.temp = action.payload;
    },
    updateZipcode: (state, action) => {
      state.zipcode = action.payload;
    },
    updateCity: (state, action) => {
      state.city = action.payload;
    },
    updateUrl: (state, action) => {
      state.url = action.payload;
    }
  }
});

export const { updateType, updateTemp, updateZipcode, updateCity, updateUrl, updateAll, updateUser, updatePlaylist, updateToken, updateAccess } =
  stateSlice.actions;
export default stateSlice.reducer;
