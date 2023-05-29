import { LoadingOutlined } from '@ant-design/icons';
import { Route, Routes } from 'react-router-dom';
import { useAuthContext } from './features/auth/context/AuthContext';
import { AppLayout } from './features/layout/Layout';
import { useUserContext } from './features/user/context/UserContext';
import { Page403 } from './pages/403';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { Submissions } from './pages/Submissions';

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
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/users"
          element={<div className="screen-center">Users</div>}
        />
        <Route path="/submissions" element={<Submissions />} />
        <Route
          path="/recipes"
          element={<div className="screen-center">Recipes</div>}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<div>Settings</div>} />
        <Route path="*" element={<p className="screen-center">404</p>} />
      </Route>
    </Routes>
  );
};
