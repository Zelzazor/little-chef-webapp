import Axios from 'axios';
import { useMemo } from 'react';
import { useAuthContext } from '../../auth/context/AuthContext';
import { AXIOS_CONFIG } from '../config/axios-config';

export const useAxios = () => {
  const { accessToken } = useAuthContext();

  const axios = useMemo(() => {
    return Axios.create({
      ...AXIOS_CONFIG,
      headers: {
        ...AXIOS_CONFIG.headers,
        Authorization: `Bearer ${accessToken ?? ''}`,
      },
    });
  }, [accessToken]);

  return { axios };
};
