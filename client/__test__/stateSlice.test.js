import reducer, { updateType, updateTemp, updateZipcode, updateCity, updateUrl, updateAll, updateUser, updatePlaylist } from '../redux/stateSlice'

test('it should return the intiial state', () => {
  expect(reducer(undefined, {type: undefined})).toEqual({
  userName: 'Regina',
  type: 'Rainy',
  temp: 69,
  zipcode: 10001,
  city: 'New York City',
  url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  bg: 'https://images.hdqwalls.com/wallpapers/sunny-fields.jpg',
  playlist: '4ANPW38qMEYQ3Z1mVLrtmm',
  })
})