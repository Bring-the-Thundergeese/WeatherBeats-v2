import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAll } from '../redux/stateSlice';
import axios from 'axios';



export default function Zipcode() {
  const dispatch = useDispatch();

  // on button click --> set location to the value of whatever is in input field
  
  const [location, setLocation] = useState(10001);

  //axios call to fetch weather data from OpenWeather API, taking in a zipcode as a parameter
  //the response is saved in state, which renders the weather data for the current location in the component
  const fetchWeatherData = async (input) => {
    const body = JSON.stringify(input)
    console.log("This is the body!", body)
    let newData;
    await axios.post('/weather', {
      'zip': input
    })
      .then((response) => dispatch(updateAll(response.data)))
      .then((response) => console.log('This is our Zip Code Data', response.data))
  }

  // On render, call the fetchWeatherData function
  useEffect(() => {

    fetchWeatherData(location);

  }, []);

  const { temp, city, type } = useSelector((state) => state.updater);

  //renders the Zipcode input field and button
  //onChange tracks what is typed into the input field, saving what is typed as the useState location 
  //onClick of the button, the fetchWeatherData function is called, passing in the argument of location
  return (
    <div>
      <input className="" type="text" placeholder="ZIPCODE" onChange={(e) => setLocation(e.target.value)} />
      <button type="submit" className="" onClick={() => fetchWeatherData(location)}>Location</button>
      <footer className="">
        <p className="">{type}</p>
        <p className="">{city}</p>
        <p className="">{temp}</p>
      </footer>
    </div>
  );
}
