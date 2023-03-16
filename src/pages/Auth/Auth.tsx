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
      <div className="screen-center">
        <LoginButton />
      </div>
    </>
  );
};
