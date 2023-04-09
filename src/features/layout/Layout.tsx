import {
  CameraOutlined,
  FileTextOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Dropdown, Layout, Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LogoutButton } from '../auth/components/LogoutButton';
import { useUserContext } from '../user/context/UserContext';

const { Header, Sider, Content } = Layout;

export const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: `Profile (${user?.email})`,
      onClick: () => navigate('/profile'),
    },
    {
      key: '2',
      label: 'Settings',
    },
    {
      key: '3',
      danger: true,
      label: <LogoutButton />,
    },
  ];

  const path = location.pathname;
  const selectedKeysMap: Record<string, string[]> = {
    '/': ['1'],
    '/users': ['2'],
    '/submissions': ['3'],
    '/recipes': ['4'],
  };

  return (
    <Layout className="min-h-screen">
      <Sider
        breakpoint="md"
        className="sticky"
        collapsedWidth={0}
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeysMap[path]}
          items={[
            {
              key: '1',
              icon: <PieChartOutlined />,
              label: 'Dashboard',
              onClick: () => navigate('/'),
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Users',
              onClick: () => navigate('/users'),
            },
            {
              key: '3',
              icon: <CameraOutlined />,
              label: 'Submissions',
              onClick: () => navigate('/submissions'),
            },
            {
              key: '4',
              icon: <FileTextOutlined />,
              label: 'Recipes',
              onClick: () => navigate('/recipes'),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className="bg-white pl-5 pr-5 flex items-center justify-between sticky">
          {collapsed ? (
            <MenuUnfoldOutlined
              className="trigger"
              onClick={() => setCollapsed(!collapsed)}
            />
          ) : (
            <MenuFoldOutlined
              className="trigger"
              onClick={() => setCollapsed(!collapsed)}
            />
          )}
          <Dropdown menu={{ items }}>
            <div className="cursor-pointer">
              <img
                className="rounded-full h-10 w-10"
                src={user?.picture}
                alt={user?.name || ''}
              />
            </div>
          </Dropdown>
        </Header>
        <Content className="p-3 overflow-y-auto">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
