import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query/types/core';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
