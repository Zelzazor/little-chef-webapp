interface DashboardItemProps {
  title: string;
  textContent: string | number;
  className?: string;
}

export const DashboardItem = ({
  textContent,
  title,
  className,
}: DashboardItemProps) => {
  return (
    <div
      className={`${
        className ? className : ''
      } text-white font-bold py-4 px-8 rounded-lg`}
      style={{ height: 300 }}
    >
      <div className="flex justify-center">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
      </div>
      <div className="flex h-5/6 items-center justify-center">
        <p className="text-8xl mb-8">{textContent}</p>
      </div>
    </div>
  );
};
