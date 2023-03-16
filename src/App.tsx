import 'antd/dist/reset.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './features/auth/context/AuthContext';
import { UserProvider } from './features/user/context/UserContext';
import './index.css';
import { Router } from './Router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </UserProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
