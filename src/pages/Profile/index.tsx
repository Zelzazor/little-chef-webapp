import { useUserContext } from '../../features/user/context/UserContext';

export const Profile = () => {
  const { user } = useUserContext();

  return (
    <>
      <div className="flex items-center justify-center h-full flex-col">
        <img src={user?.picture} alt={user?.name || ''} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    </>
  );
};
