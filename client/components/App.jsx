import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Main from './Main';
import Login from './Login';
// import WebPlayback from './WebPlayback';

export default function App() {
  const [token, setToken] = useState('');
  const type = useSelector((state) => state.updater.type)

  useEffect(() => {
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      // saves token to state
      setToken(json.access_token);
    }
    getToken();
  }, []);

  return (
    <section id="app" className={`hero is-fullheight ${type}`}>
      <Main />
    </section>
  );
}
