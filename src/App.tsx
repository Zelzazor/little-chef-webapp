import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { AuthProvider } from './features/auth/context/AuthContext';
import { UserProvider } from './features/user/context/UserContext';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserProvider>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#ca3433',
              },
            }}
          >
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ConfigProvider>
        </UserProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
