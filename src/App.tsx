import { Auth0Provider } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

const queryClient = new QueryClient();

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
