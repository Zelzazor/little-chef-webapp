import { ScaleImage } from '../../../features/guide/ScaleImage';

export const DashboardGuide = () => {
  return (
    <div className="mx-6 overflow-scroll">
      <h1 className="text-3xl font-bold">Dasbboard</h1>
      <p className="text-lg">
        The dashboard is the main page of the application. It is only accessible
        to admins.
      </p>
      <ScaleImage src="/assets/guide/dashboard/1.png" alt="Dashboard Screen" />
      <p className="text-lg">The dashboard contains the following pods:</p>
      <ul className="list-disc list-inside">
        <li className="text-lg">
          <strong>Submissions Added</strong>: Recently added submissions.
        </li>
        <li className="text-lg">
          <strong>Submissions Deleted</strong>: Recently deleted submissions.
          recipes.
        </li>
        <li className="text-lg">
          <strong>Recent Users Added</strong>: Recently created users on the
          platform.
        </li>
      </ul>
      <p className="text-lg">
        The dashboard also contains a series of parameters that can be used to
        alter the date range of the pods.
      </p>
      <ScaleImage
        src="/assets/guide/dashboard/2.png"
        alt="Date Range parameters"
      />
    </div>
  );
};
