import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Menu } from 'antd';
import {
  AppstoreTwoTone,
  BuildTwoTone,
  CompassTwoTone,
  ControlTwoTone,
  IdcardTwoTone,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ThunderboltTwoTone,
} from '@ant-design/icons';

const handleClick = (event: any) => {
  console.log(event);
};

const toggleCollapsed = (event: any) => {
  console.log(event);
};

const Navigation = (props: { className: string; }) => {
  const { className } = props;
  // TODO: Add all the variables below to Redux store.
  const menuCollapsed = false;
  const color = '#0ab5db';
  return (
    <>
      {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button> */}
      <Menu className={className} mode='inline' theme='light' inlineCollapsed={menuCollapsed}>
        {/* <Menu className={className} onClick={handleClick} mode='vertical' theme='light'> */}
        <Menu.Item key="kevinScan" icon={<AppstoreTwoTone twoToneColor={color} />} title="Kevin Scan">
          <NavLink to={'/kevin_scan'}>Kevin Scan</NavLink>
        </Menu.Item>
        <Menu.Item key="loySwap" icon={<ThunderboltTwoTone twoToneColor={color} />} title="Loy Swap">
          <NavLink to={'/loy_swap'}>Loy Swap</NavLink>
        </Menu.Item>
        <Menu.Item key="nonFungibleKevin" icon={<IdcardTwoTone twoToneColor={color} />} title="Non Fungible Kevin">
          <NavLink to={'/non_fungible_kevin'}>Non Fungible Kevin</NavLink>
        </Menu.Item>
        <Menu.Item key="kevsContracts" icon={<ControlTwoTone twoToneColor={color} />} title="Kev's Contracts">
          <NavLink to={'/kevs_contracts'}>Kev's Contracts</NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
};

Navigation.defaultProps = {
  className: 'site_navigation',
};

export default Navigation;
