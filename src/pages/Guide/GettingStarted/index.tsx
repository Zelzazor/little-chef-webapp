import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../features/auth/context/AuthContext';
import { ScaleImage } from '../../../features/guide/ScaleImage';

export const GettingStarted = () => {
  const { loggedIn, isLoading } = useAuthContext();
  return (
    <div
      className={`${
        !isLoading && !loggedIn ? 'mt-10 mx-10' : 'mx-6'
      } overflow-scroll`}
    >
      <h1 className="text-3xl font-bold">Getting Started</h1>
      <p className="text-lg">
        To get started, click the "Log In" button on the home page.
      </p>
      <ScaleImage
        src="/assets/guide/getting-started/1.png"
        alt="Log-in Button"
      />
      <p className="text-lg">
        You will be redirected to the Auth0 login page. Enter your credentials
        and click "Log In".
      </p>
      <ScaleImage src="/assets/guide/getting-started/2.png" alt="Log-in Form" />
      <p className="text-lg">
        If you are an admin, you will be redirected to the dashboard. If you are
        not an admin, you will be redirected to a 403 page.
      </p>
      <ScaleImage
        src={`/assets/guide/getting-started/${
          !isLoading && !loggedIn ? '4' : '3'
        }.png`}
        alt="Log-in Success"
      />
      {!isLoading && !loggedIn && (
        <Link to="/" className="text-lg mb-4">
          Click here to go back to the home page.
        </Link>
      )}
    </div>
  );
};
