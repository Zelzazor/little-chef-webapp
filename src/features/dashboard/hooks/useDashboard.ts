import { useQuery, useQueryClient } from 'react-query';
import { useAxios } from '../../utility/hooks/useAxios';
import { GetDashboardMetricsResponse } from '../types/get-dashboard-metrics.response';

export const useDashboard = () => {
  const { axios } = useAxios();
  const queryClient = useQueryClient();

  const useGetDashboardMetrics = ({
    startDate,
    endDate,
    time,
  }: {
    startDate: Date;
    endDate: Date;
    time: number;
  }) =>
    useQuery(['dashboard-metrics', time], async () => {
      // Lógica para obtener el count de submissions añadidos
      const response = await axios.post<GetDashboardMetricsResponse>(
        '/dashboard',
        {
          dateRange: {
            startDate,
            endDate,
          },
        },
      );
      return response.data;
    });

  return {
    useGetDashboardMetrics,
  };
};
