import { useEffect } from 'react';
import { useAppDispatch } from '../app/store/hooks';
import { getAccessToken } from '../features/Auth/AuthThunk';
import { useNavigate } from 'react-router-dom';

const StandingPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    if (code) {
      dispatch(getAccessToken(code));
    }
  }, [dispatch]);

  return navigate('/');
};

export default StandingPage;