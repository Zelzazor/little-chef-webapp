import { LoadingOutlined } from '@ant-design/icons';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useAuthContext } from './features/auth/context/AuthContext';
import { AppLayout } from './features/layout/Layout';
import { useUserContext } from './features/user/context/UserContext';
import { Page403 } from './pages/403';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { Guide } from './pages/Guide';
import { DashboardGuide } from './pages/Guide/Dashboard';
import { GettingStarted } from './pages/Guide/GettingStarted';
import { RecipesGuide } from './pages/Guide/Recipes';
import { SubmissionsGuide } from './pages/Guide/Submissions';
import { UsersGuide } from './pages/Guide/Users';
import { Profile } from './pages/Profile';
import { Recipes } from './pages/Recipes';
import { CreateRecipe } from './pages/Recipes/Create';
import { RecipeDetails } from './pages/Recipes/RecipeDetails';
import { Submissions } from './pages/Submissions';
import { Users } from './pages/Users';

export const Router = () => {
  const { loggedIn, isLoading } = useAuthContext();
  const { user } = useUserContext();
  const location = useLocation();

  if (isLoading || (user && !user.Role)) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>
          <LoadingOutlined style={{ fontSize: '120px' }} />
        </div>
      </div>
    );
  }

  if (!loggedIn && location.pathname !== '/guide/getting-started') {
    return <Auth />;
  } else if (!loggedIn && location.pathname === '/guide/getting-started') {
    return <GettingStarted />;
  }

  if (loggedIn && user?.Role && user.Role.name !== 'Admin') {
    return <Page403 />;
  }

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/recipes">
          <Route path="" element={<Recipes />} />
          <Route path="create" element={<CreateRecipe />} />
          <Route path=":id" element={<RecipeDetails />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/guide">
          <Route path="" element={<Guide />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="dashboard" element={<DashboardGuide />} />
          <Route path="users" element={<UsersGuide />} />
          <Route path="submissions" element={<SubmissionsGuide />} />
          <Route path="recipes" element={<RecipesGuide />} />
        </Route>
        <Route path="*" element={<p className="screen-center">404</p>} />
      </Route>
    </Routes>
  );
};
