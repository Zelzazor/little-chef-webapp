import { LinkList } from '../../features/guide/LinkList';

export const Guide = () => {
  return (
    <div className="mx-6">
      <h1 className="text-3xl font-bold">User Guide</h1>
      <p className="text-lg">
        Welcome to the user guide! Here you can find information on how to use
        the application.
      </p>
      <p className="text-lg">Please select a topic from the list below.</p>
      <LinkList />
    </div>
  );
};
