import { LogoutButton } from '../../features/auth/components/LogoutButton';

export const Page403 = () => {
  return (
    <>
      <div className="screen-center flex-col">
        <h2>Hey! you're not allowed to go here</h2>
        <LogoutButton />
      </div>
    </>
  );
};
