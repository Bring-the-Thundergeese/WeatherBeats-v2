import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateToken, updateAccess } from "../redux/stateSlice";
import Login from "./Login";
import Player from "./Player"

export default function Footer() {
    const dispatch = useDispatch();

    const access = useSelector((state) => state.updater.access);

    //ALL TOKEN FUNCTIONALITY
    const [token, setToken] = useState('');

    // useEffect(() => {
    
    // }, []);

    useEffect(() => {
        
        async function getToken() {
            const response = await fetch('/auth/token');
            const json = await response.json();
            // saves token to state
            setToken(json.access_token);
        }
        getToken();
        
        
        const fetchToken = async () => {
            try {
                const response = await fetch('/auth/token', {
                    method: 'get',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                const { accessToken } = data;
                setToken(accessToken.trim());
                dispatch(updateToken(token));
                dispatch(updateAccess(true));
                // dispatch(updateAccess(true))
            } catch (error) {
                console.error('Token fetch error: ', error);
            }
        };
        console.log('Current token ', token);

        // fetch userdata
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user');
                const data = await response.json();
                console.log('This is the User Data that we need!', data.display_name);
                const name = data.display_name;
                dispatch(updateUser(name));
            } catch (error) {
                console.error('User data fetch error: ', error);
            }
        };
        fetchToken();
        fetchUserData();

    }, []);

    return (
        <div>
            {(access === false) ? <Login /> : <Player token={token} />}
        </div>

    )



}