import { useUserContext } from '../../features/user/context/UserContext';
import { LogoutButton } from '../../features/utility/components/LogoutButton';

export const Home = () => {
  const { user } = useUserContext();

  return (
    <>
      <div className="screen-center flex-col">
        <img src={user?.picture} alt={user?.name || ''} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <LogoutButton />
      </div>
    </>
  );
};
