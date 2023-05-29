import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { DashboardItem } from '../../features/dashboard/components/dashboard-item/DashboardItem';
import { useDashboard } from '../../features/dashboard/hooks/useDashboard';

export const Dashboard = () => {
  const { useGetDashboardMetrics } = useDashboard();
  const [time, setTime] = useState(24 * 60 * 60 * 1000);
  const endDate = new Date();
  const startDate = new Date(endDate.getTime() - time);
  const { data } = useGetDashboardMetrics({
    startDate,
    endDate,
    time,
  });

  useEffect(() => {
    console.log({
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    });
  }, [time]);

  const time_periods = {
    '24 hours': 24 * 60 * 60 * 1000,
    '7 days': 24 * 60 * 60 * 1000 * 7,
    '15 days': 24 * 60 * 60 * 1000 * 15,
    '30 days': 24 * 60 * 60 * 1000 * 30,
  };

  const timePeriodsKeys = Object.keys(time_periods);

  const changeTime = (period: keyof typeof time_periods) => {
    setTime(time_periods[period]);
  };

  return (
    <div className="flex justify-center flex-col gap-2">
      <div className="flex gap-2">
        {timePeriodsKeys.map((key) => (
          <Button
            key={key}
            size="large"
            type="primary"
            onClick={() => changeTime(key as keyof typeof time_periods)}
            className="flex-1"
          >
            {key}
          </Button>
        ))}
      </div>

      <div className="flex gap-2">
        <DashboardItem
          title="Submissions Added"
          textContent={data?.countSubmissions ?? ''}
          className="bg-blue-500 flex-1"
        />
        <DashboardItem
          title="Submissions Deleted"
          textContent={data?.countDeletedSubmissions ?? ''}
          className="bg-red-500 flex-1"
        />
      </div>
      <div className="flex w-2/4">
        <DashboardItem
          title="Recent Users Added"
          textContent={data?.countRecentUsers ?? ''}
          className="bg-green-500 flex-1 mr-1"
        />
      </div>
    </div>
  );
};
