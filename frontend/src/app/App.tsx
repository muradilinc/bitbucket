import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProtectedRoute } from '../shared/protected';
import { useAppSelector } from './store/hooks';
import { selectUser } from '../features/Auth/AuthSlice';
import { Header } from '../shared/Header';
import { RepositoriesPage } from '../pages/RepositoriesPage';
import { UsersPage } from '../pages/UsersPage';
import { ToastContainer } from 'react-toastify';
import StandingPage from '../processes/StandingPage';

const App = () => {
  const user = useAppSelector(selectUser);
  const {pathname} = useLocation();

  return (
    <>
      <ToastContainer/>
      {pathname !== '/login' && <Header/>}
      <Routes>
        <Route path="/" element={
          <ProtectedRoute isAllowed={!!user}>
            <HomePage/>
          </ProtectedRoute>
        }/>
        <Route path="/repos" element={
          <ProtectedRoute isAllowed={!!user}>
            <RepositoriesPage/>
          </ProtectedRoute>
        }/>
        <Route path="/repos/:login" element={
          <ProtectedRoute isAllowed={!!user}>
            <RepositoriesPage/>
          </ProtectedRoute>
        }/>
        <Route path="/users" element={
          <ProtectedRoute isAllowed={!!user}>
            <UsersPage/>
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/standing" element={<StandingPage/>}/>
      </Routes>
    </>
  );
};

export default App;
