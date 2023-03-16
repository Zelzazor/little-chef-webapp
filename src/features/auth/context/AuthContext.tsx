import { Auth0Provider, useAuth0, User } from '@auth0/auth0-react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { FCC } from '../../../config';

interface AuthContextProps {
  isLoading: boolean;
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
  user: User | undefined;
  accessToken: string | null;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

const AuthContextWrapper: FCC = ({ children }) => {
  const {
    loginWithRedirect,
    logout: l,
    user: auth0User,
    isLoading,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently({
        authorizationParams: {
          scope: 'openid profile email',
          audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        },
      }).then((token) => {
        setAccessToken(token);
      });
    } else {
      setAccessToken(null);
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  const login = useCallback(
    () =>
      loginWithRedirect({
        authorizationParams: {
          scope: 'openid profile email',
          audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        },
      }),
    [loginWithRedirect],
  );

  const logout = useCallback(
    () => l({ logoutParams: { returnTo: window.location.origin } }),
    [l],
  );

  const user = auth0User;

  const payload = useMemo(
    () => ({
      login,
      logout,
      user,
      isLoading,
      loggedIn: isAuthenticated,
      accessToken,
    }),
    [login, logout, user, isAuthenticated, isLoading, accessToken],
  );

  return (
    <AuthContext.Provider value={payload}>{children}</AuthContext.Provider>
  );
};

export const AuthProvider: FCC = ({ children }) => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AuthContextWrapper>{children}</AuthContextWrapper>
    </Auth0Provider>
  );
};

export const useAuthContext: () => AuthContextProps = () =>
  useContext(AuthContext);
