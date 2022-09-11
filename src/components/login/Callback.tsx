import axios from "axios";
import { useEffect } from "react";

const Callback = () => {
  const url = new URL(window.location.href);
  
  const OAUTH_ID = import.meta.env.VITE_OAUTH_ID || '';
  const OAUTH_SELECT = import.meta.env.VITE_OAUTH_SELECT || '';

  const authorizationCode = url.searchParams.get('code');

  useEffect(() => {
    axios.post('https://github.com/login/oauth/access_token', {
    client_id: OAUTH_ID,
    client_secret: OAUTH_SELECT,
    code: authorizationCode, 
  },
  {
    headers: {
      'Access-Control-Allow-Origin': '*',
      accept: 'application/json',
    }
  }).then((response) => {
    console.log(response.data)
  });
  }, []);

  return (null);
};

export default Callback;
