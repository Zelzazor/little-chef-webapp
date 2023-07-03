import { ScaleImage } from '../../../features/guide/ScaleImage';

export const SubmissionsGuide = () => {
  return (
    <div className="mx-6 overflow-scroll">
      <h1 className="text-3xl font-bold">Submissions</h1>
      <p className="text-lg">
        In the submissions page, you can view all the submissions users posted
        on the platform. You can also delete submissions and view the votes
        posted on each submission.
      </p>
      <ScaleImage src="/assets/guide/submissions/1.png" alt="Submission Page" />
      <p className="text-lg">
        To delete a submission, click the trash icon. You will be prompted
        whether you want to delete the submission. Click "Delete" to delete the
        submission.
      </p>
      <ScaleImage
        src="/assets/guide/submissions/2.png"
        alt="Delete Submission"
      />
    </div>
  );
};
