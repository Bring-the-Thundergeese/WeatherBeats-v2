// // ATTEMPTING REDUX-TOOLKIT TESTING
// import React from 'react';
// import { useDispatch } from 'react-redux'
// import { 
  // updateType, updateTemp, updateZipcode, updateCity, 
  // updateUrl, updateAll, updateUser, updatePlaylist 
// } from '../redux/stateSlice';

// describe('ALL stateSlice reducers', () => {
//   let state;

//   beforeEach(() => {
//     state = {
//       userName: 'Regina',
//       type: 'Rainy',
//       temp: 69,
//       zipcode: 10001,
//       city: 'New York City',
//       url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
//       bg: 'https://images.hdqwalls.com/wallpapers/sunny-fields.jpg',
//       playlist: '4ANPW38qMEYQ3Z1mVLrtmm',
//     };
//   });
//   describe('updateUser reducer', () => {
//     const action = {
//       payload: 'Victoria',
//     };
//     it('updates the userName', () => {
//       console.log(updateUser);
//       // Try adding in dispatch for calling the updateUser
//       const { userName } = updateUser(state, action);
//       expect(userName).toEqual('Victoria');
//     });
//   });
// });

// This is setting up the customized renderWithProviders function
// Creates new Redux store and render a <Provider>

import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Importing in the entire state slice reducer
import stateSlice from '../redux/stateSlice'

export function renderWithProviders(ui, {
  preloadedState = {
    username: '',
    type: 'nothing',
    temp: 0,
    zipcode: 10001,
    city: '',
    url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    bg: "https://images.hdqwalls.com/wallpapers/sunny-fields.jpg",
    playlist: '',
    token: '',
    access: false,
  },
  // default param for no store passed in (with stateSliceReducer passed in)
  store = configureStore({reducer: { state: stateSliceReducer }, preloadedState}),
  ...renderOptions
} = {}
// this is where the actual function begins, above was just the params
) {
  // This is creating the Provider wrapper for the store to be accessible to children, mocking up react things going on
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  // Returns object with store (wrapper included) and all of React Toolkit Library's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
// ^We are directly importing same slice reducers the real app uses 