import { ScaleImage } from '../../../features/guide/ScaleImage';

export const UsersGuide = () => {
  return (
    <div className="mx-6 overflow-scroll">
      <h1 className="text-3xl font-bold">Users</h1>
      <p className="text-lg">
        On the users page, you can view all users on the platform. You can also
        add a warning to a user, or ban a user.
      </p>
      <ScaleImage src="/assets/guide/users/1.png" alt="Users Screen" />
      <p className="text-lg">
        To add a warning to a user, click the "Warn" button. You will be
        prompted to enter a description for the warning. Click "Submit" to add
        the warning to the user.
      </p>
      <ScaleImage src="/assets/guide/users/2.png" alt="Warn User" />
      <p className="text-lg">
        You can view the warnings for a user by clicking the "View Warnings"
        button.
      </p>
      <ScaleImage src="/assets/guide/users/3.png" alt="View Warnings" />
      <p className="text-lg">
        To ban a user, click the "Ban" button. The status of the user will
        change to "Banned". To unban a user, click the "Unban" button.
      </p>
      <ScaleImage src="/assets/guide/users/4.png" alt="Ban User" />
    </div>
  );
};
