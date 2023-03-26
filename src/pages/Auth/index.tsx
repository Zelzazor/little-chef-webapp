import { Button } from 'antd';
import { useAuthContext } from '../../features/auth/context/AuthContext';

const LoginButton = () => {
  const { login } = useAuthContext();

  return (
    <Button type="primary" size="middle" onClick={login}>
      Log In
    </Button>
  );
};

export const Auth = () => {
  return (
    <>
      <div className="screen-center flex-col">
        <img className="w-16 mb-4" src="/logo.png" alt="Little Chef" />
        <h1>Little Chef (Back Office)</h1>
        <LoginButton />
      </div>
    </>
  );
};
