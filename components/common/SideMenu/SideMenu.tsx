import styled from 'styled-components';
import AddDashBoard from './AddDashBoard';
import DashBoard from './DashBoard';
import LogoLink from './LogoLink';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import { Z_INDEX } from '@/styles/ZIndexStyles';
import { WHITE } from '@/styles/ColorStyles';

function SideMenu({ dashboards }) {
  return (
    <Wrapper>
      <LogoLink />
      <AddDashBoard />
      <DashboardList>
        {dashboards.map((dashboard) => (
          <DashBoard
            key={dashboard.id}
            color={dashboard.color}
            title={dashboard.title}
            createdByMe={dashboard.createdByMe}
          />
        ))}
      </DashboardList>
    </Wrapper>
  );
}

export default SideMenu;

const Wrapper = styled.div`
  width: 300px;
  height: 1550px;
  padding: 20px 24px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 0 0 0;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;

  position: fixed;
  left: 0;
  z-index: ${Z_INDEX.SideMenu_Wrapper};

  background-color: ${WHITE};

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 160px;
    height: 1666px;
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 67px;
    height: 1859px;
  }
`;

const DashboardList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${DEVICE_SIZE.tablet}) {
    margin-top: 18px;
  }
  @media (max-width: ${DEVICE_SIZE.tablet}) {
    margin-top: 22px;
  }
`;