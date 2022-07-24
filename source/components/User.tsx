import { Dispatch, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Props } from '../interfaces/master';
import { web3Actions } from '../state/actions';
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import {
  SettingTwoTone,
  UserOutlined,
} from '@ant-design/icons';

const { authenticateMoralis, getUser, loginMoralis, logoutMoralis, setUser, signUpMoralis, } = web3Actions;

const userActionHandler = (menuItem: any) => {
  const { item, key, domEvent } = menuItem;
  const { target } = domEvent;
  const { props } = item;
  const { children } = props;
  console.log(target.innerText);
}

interface DispatchToProps { getUser: any, setUser: Dispatch<any>; };
type FullProps = Props & DispatchToProps;
const User = (props: any) => {
  const state: any = useSelector((state) => { return state; });
  const { moralis, user } = state.web3Reducers;
  const { ACL, Cloud, CLP, Config, CoreManager, dumpLocalDatastore, initalize, LiveQuery, LocalDatastore, Moralis, Object, Plugins, Query, Relation, Role, Schema, Session, setAsyncStorage, Storage, UI, Units, User, Web3, Web3API, addNetwork, authenticate, cleanup, enable, ensureWeb3IsInstalled, getAllERC20, getChainId, getNFTs, getSigningData, getTransactioins, getWeb3Provider, initPlugins, transfer } = moralis;
  const { attributes, authenticated, getEmail, getSessionToken, getUsername, verifyPassword, id } = user;

  useEffect(() => {
    // const { stateItems } = state;
    console.log("User - useEffect()");
  });

  const DropdownMenu = (
    <Menu className="user_actions__menu" onClick={userActionHandler}>
      <Menu.Item>TEST</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown.Button overlay={DropdownMenu} icon={<SettingTwoTone />}>
      {id ? id : "Logged In"}
    </Dropdown.Button>
  );
};

User.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<(data: string | number) => void>): DispatchToProps => {
  return {
    getUser: () => {
      dispatch(getUser());
    },
    setUser: (data) => {
      dispatch(setUser(data));
    }
  };
};

export default connect<any, any, any>(null, mapDispatchToProps)(User);
