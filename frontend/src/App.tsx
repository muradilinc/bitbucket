import { useEffect, useState } from 'react';
import axios from 'axios';

const clientId = 'Ov23li7YXDx5nIj0rXwa';

const App = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');

    if (code) {
      getAccessToken(code);
    }
  }, []);

  const getAccessToken = async (code: string) => {
    try {
      const result = axios.get(`http://localhost:8000/auth/github?code=${code}`,);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const redirectToGithub = () => {
    const redirectUri = 'http://localhost:5173';
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
  };

  if (user) {
    return (
      <div className="text-center">
        <h1>Привет, {user.name || user.login}!</h1>
        <img
          src={user.avatar_url}
          alt="Аватар"
          width="100"
          style={{borderRadius: '50%'}}
        />
        <p>{user.bio}</p>
      </div>
    );
  }

  return <button onClick={redirectToGithub}>Войти через GitHub</button>;
};

export default App;
