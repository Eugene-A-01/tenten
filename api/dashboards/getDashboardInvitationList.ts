import axios from 'axios';

/**
 * 대시보드 초대 불러오기
 */
export const getDashboardInvitationList = async (dashboardId: number, size: number, page: number) => {
  const response = await axios.get(`/api/dashboards/${dashboardId}/invitations?page=${page}&size=${size}`);
  console.log(response);
  return response.data;
};