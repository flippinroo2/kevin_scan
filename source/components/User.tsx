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

interface DispatchToProps { getUser: any, setUser: Dispatch<any>; };
type FullProps = Props & DispatchToProps;
const User = (props: any) => {
  const state: any = useSelector((state) => { return state; });
  const { moralis, user }: any = state.web3Reducers;
  // link() and unlink() are for merging addresses from different chains to one user.
  const { attributes, authenticated, getEmail, getSessionToken, getUsername, isCurrent, login, signUp, verifyPassword, id } = user;
  // const { ACL, Cloud, CLP, Config, CoreManager, dumpLocalDatastore, initalize, Link, LiveQuery, LocalDatastore, Moralis, Plugins, Query, Relation, Role, Schema, Session, setAsyncStorage, Storage, UI, Units, Web3, Web3API, addNetwork, authenticate, cleanup, enable, ensureWeb3IsInstalled, getAllERC20, getChainId, getNFTs, getSigningData, getTransactioins, getWeb3Provider, initPlugins, transfer, unlink } = moralis;
  const MoralisUser = moralis.User;

  // authenticate();
  // authenticated();
  // const provider = getWeb3Provider();
  // await UI.openPrompt(NEED_TO_PROVIDE_PROMPT);
  // Web3API
  // Units()
  // Session.current;
  // CoreManager

  const getObjectProperties = (obj: any) => {
    var userFunctionNames: any;
    if (id) {
      var keys: any = Object.keys(obj);
      var keysPrototype: any = Object.getPrototypeOf(obj);
      var keysPrototypeProperties: any = Object.getOwnPropertyNames(keysPrototype); // BINGO
      if (keys.length) {
        userFunctionNames = keysPrototypeProperties.reduce((results: any, item: any, index: any, state: any): any => {
          if (item.startsWith("_")) {
            return results;
          }
          results.push(item);
          return results;
        }, []);
      }
    }
    return userFunctionNames;
  }

  const objectProperties = getObjectProperties(user);
  console.log(objectProperties);

  // returnFunctionResult = (
  //   functionData,
  //   functionSignature,
  //   functionArguments,
  //   functionResult,
  // ) => {
  //   functionData.forEach((item) => {
  //     const [functionName] = item;
  //     const [functionCompare] = functionSignature.split('(');
  //     if (functionName == functionCompare) {
  //       this.setState({
  //         functionSignature,
  //         functionTitle: functionName,
  //         functionArguments,
  //         functionResult,
  //       });
  //     }
  //   });
  // };

  //   if (address == '0x48e8cf26b9d25Ca4b103d34047dEe8bAE689eDC7') {
  //     const Token = contract;
  //     const functions = contract.methods;

  //     this.setState({ functions });

  //     const admin = await Token.methods.getAdmin().call();
  //     this.setState({ admin: admin });

  //     const balance = await Token.methods.balanceOf(address).call();
  //     this.setState({ balance: parseInt(balance) });

  //     const name = await Token.methods._name().call();
  //     this.setState({ name: name });

  //     const symbol = await Token.methods._symbol().call();
  //     this.setState({ symbol: symbol });

  //     const totalSupply = await Token.methods.totalSupply().call();
  //     this.setState({ totalSupply: parseInt(totalSupply) });
  //   }
  // }

  // selectFunction(event) {
  //   const { target, nativeEvent, type } = event;
  //   // console.log(event);
  //   // const { path } = nativeEvent;
  //   // console.log(nativeEvent);
  //   const {
  //     attributes,
  //     children,
  //     classList,
  //     className,
  //     innerHTML,
  //     innerText,
  //     parentElement,
  //     style,
  //     value,
  //     view,
  //   } = target;
  //   this.setState({ buttonText: innerText });
  // }


  // async interactWithContract(event) {
  //   // console.log(this.state);
  //   let { functions, functionData } = this.state;
  //   // console.log(functions);
  //   const { path, target } = event;
  //   const { innerText } = target;
  //   // functionData.filter((item) => {
  //   //   // Have to loop through "functionData" to check for the proper function.
  //   //   let [functionName, functionArguments] = item;
  //   //   if (functionName == innerText.split('(')[0]) {
  //   //     return true;
  //   //   }
  //   // });
  //   const [inputGroup] = path.filter((item) => {
  //     const { classList } = item;
  //     if (classList && classList.contains('input-group')) {
  //       return true;
  //     }
  //   });
  //   let { value } = inputGroup.firstChild;
  //   if (innerText == 'N/A') {
  //     return null;
  //   }
  //   let functionResult;
  //   let test;
  //   if (!value) {
  //     test = await functions[innerText]();
  //     functionResult = await functions[innerText]().call();
  //   } else {
  //     test = await functions[innerText](value);
  //     functionResult = await functions[innerText](value).call();
  //   }
  //   // console.log(functionResult);
  //   // console.log(test); // 0xeB5c8FB7d97bF7084ABdD77CCaF7dB5BeAAB08fA
  //   this.props.returnValueFunction(
  //     functionData,
  //     innerText,
  //     value,
  //     functionResult,
  //   );
  // }

  useEffect(() => {
    // const { stateItems } = state;
    console.log("User - useEffect()");
  });

  const userActionHandler = async (menuItem: any) => {
    const { item, key, domEvent } = menuItem;
    const { target } = domEvent;
    const { props } = item;
    const { children } = props;
    const { innerText } = target;
    console.log(`${innerText}()`);
    try {
      const functionResult = await user[innerText](); // TODO: Handle functions with arguments.
      // const functionResult = await user[innerText]().call(); // Not working for some reason.
      console.log(functionResult);
    } catch (err) {
      console.log(err);
    }
  }

  const DropdownMenu = (
    <Menu className="user_actions__menu" onClick={userActionHandler}>
      {objectProperties ? objectProperties?.map((item: any, key: number): any => {
        return (
          <Menu.Item key={key}>{item}</Menu.Item>
        );
      })
        :
        <Menu.Item>Functions Not Loaded</Menu.Item>}
    </Menu>
  );

  return (
    <Dropdown.Button className="user_login__button" overlay={DropdownMenu} icon={<SettingTwoTone />} onClick={(test: any) => {
      console.log(test);
      moralis.User.logOut(); // TODO: Re-render after this function.
    }}>
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
