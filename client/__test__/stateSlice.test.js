import reducer, { updateType, updateTemp, updateZipcode, updateCity, updateUrl, updateAll, updateUser, updatePlaylist, updateToken, updateAccess } from '../redux/stateSlice'

test('it should return the intiial state', () => {
  expect(reducer(undefined, {type: undefined})).toEqual({
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
  })
});

// updateAll 
test('updateAll should update everything in state', () => {
  const previousState = {
    type: '',
    temp: 0,
    zipcode: 10001,
    city: '',
    url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    bg: 'https://images.hdqwalls.com/wallpapers/sunny-fields.jpg',
  }
  const action = {
    payload: {
      type: 'Clouds',
      temp: 71,
      zip: 11238,
      city: 'Brooklyn',
      url: 'https://images.unsplash.com/photo-iswearthisisarealphoto1000and1percentsure',
      bg: 'https://images.hdqwalls.com/wallpapers/even-sunnier-fields.jpg',
    }
  }
  expect(reducer(previousState, updateAll(action.payload))).toEqual({
    type: 'Clouds',
    temp: 71,
    zipcode: 11238,
    city: 'Brooklyn',
    url: 'https://images.unsplash.com/photo-iswearthisisarealphoto1000and1percentsure',
    bg: 'https://images.hdqwalls.com/wallpapers/even-sunnier-fields.jpg',
  })
})

// updatePlaylist -> update playlist
test('updatePlaylist should update playlist', () => {
  const previousState = {playlist: '4ANPW38qMEYQ3Z1mVLrtmm'}
  expect(reducer(previousState, updatePlaylist('newsadgirlsong'))).toEqual({playlist: 'newsadgirlsong'})
})

// updateUser -> update user
test('updateUser should update user', () => {
  const previousState = {username: ''}
  expect(reducer(previousState, updateUser('Vic'))).toEqual({username: 'Vic'})
})

// updateType -> updates type
test('updateType should update type', () => {
  const previousState = {type: 'Clouds'}
  expect(reducer(previousState, updateType('Rainbows'))).toEqual({type: 'Rainbows'})
})

// updateTemp -> updates temp
test('updateTemp should update temp', () => {
  const previousState = {temp: 0}
  expect(reducer(previousState, updateTemp(66))).toEqual({temp: 66})
})

// updateZipcode -> updates zipcode
test('updateZipcode should update zip', () => {
  const previousState = {zipcode: 10001}
  expect(reducer(previousState, updateZipcode(11238))).toEqual({zipcode: 11238})
})

// updateCity -> updates city
test('updateCity should update city', () => {
  const previousState = {city: 'Brooklyn'}
  expect(reducer(previousState, updateCity('Vancouver'))).toEqual({city: 'Vancouver'})
})

// updateUrl -> updates url
test('updateUrl should update url', () => {
  const previousState = {url: 'https://images.unsplash.com/photo-iswearthisisarealphoto1000and1percentsure'}
  expect(reducer(previousState, updateUrl('https://media.tenor.com/8YtBJxaqbFYAAAAM/success-successful.gif'))).toEqual({url: 'https://media.tenor.com/8YtBJxaqbFYAAAAM/success-successful.gif'})
})

// updateAccess -> updates access
test('updateAccess should update access', () => {
  const previousState = {access: false}
  expect(reducer(previousState, updateAccess(true))).toEqual({access: true})
})

// updateToken -> updates token
test('updateToken should update token', () => {
  const previousState = {token: ''}
  expect(reducer(previousState, updateToken('1234'))).toEqual({token: '1234'})
})

