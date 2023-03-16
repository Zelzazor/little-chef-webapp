import { LoadingOutlined } from '@ant-design/icons';
import { Route, Routes } from 'react-router-dom';
import { useAuthContext } from './features/auth/context/AuthContext';
import { useUserContext } from './features/user/context/UserContext';
import { Page403 } from './pages/403/403';
import { Auth } from './pages/Auth/Auth';
import { Home } from './pages/Home/Home';

export const Router = () => {
  const { loggedIn, isLoading } = useAuthContext();
  const { user } = useUserContext();

  if (isLoading || (user && !user.Role)) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>
          <LoadingOutlined style={{ fontSize: '120px' }} />
        </div>
      </div>
    );
  }

  if (!loggedIn) {
    return <Auth />;
  }

  if (loggedIn && user?.Role && user.Role.name !== 'Admin') {
    return <Page403 />;
  }

  return (
    <Routes>
      {loggedIn && <Route path="/" element={<Home />} />}
      {loggedIn && <Route path="*" element={<p>404</p>} />}
    </Routes>
  );
};
