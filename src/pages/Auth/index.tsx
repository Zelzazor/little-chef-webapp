import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
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
        <Link
          to="/guide/getting-started"
          className="fixed z-90 bottom-10 right-8 bg-red-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-red-700 hover:text-white hover:drop-shadow-2xl text-"
        >
          <QuestionCircleOutlined />
        </Link>
      </div>
    </>
  );
};
