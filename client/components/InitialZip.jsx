import React from "react";
import { updateEntered, updateAll } from "../redux/stateSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

export default function InitialZip() {

  const dispatch = useDispatch();

  const entered = useSelector((state) => state.updater.entered)

  // on button click --> set location to the value of whatever is in input field

  const [location, setLocation] = useState('');

  //axios call to fetch weather data from OpenWeather API, taking in a zipcode as a parameter
  //the response is saved in state, which renders the weather data for the current location in the /Main/Window component
  const initialFetchWeatherData = async (input) => {
    const body = JSON.stringify(input)
    console.log("This is the body!", body)
    await axios.post('/weather', {
      'zip': input
    })
      .then((response) => {
        // console.log("The Data:",response.data);
        dispatch(updateAll(response.data));
        console.log("Sending", response.data);
      })
      .then(() => dispatch(updateEntered({value: true})))
      .then(() => console.log(entered));
  }

  return (
    <div className="launchZipContainer">
      <input type="text" placeholder="ZIPCODE" onChange={(e) => setLocation(e.target.value)} />
      <button type="submit" onClick={() => initialFetchWeatherData(location)}>Location</button>
    </div>
  );

}