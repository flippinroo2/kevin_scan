import { Dispatch, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Props } from '../interfaces/master';
import { swapActions, loadingActions } from '../state/actions';
import { Col, Dropdown, Input, InputNumber, Menu, Row, Typography } from 'antd';
import {
  DownOutlined
} from '@ant-design/icons';

const { setLoaded } = loadingActions;
const { setFromToken, setToToken, getTokens } = swapActions;

interface DispatchToProps { getTokens: any, setFromToken: Dispatch<any>; setToToken: Dispatch<any>; setLoaded: any; };
type SwapInputProps = Props & { type: string; } & DispatchToProps;
const SwapInput = (props: SwapInputProps) => {
  const state: any = useSelector((state) => { return state; });
  const tokens = state.swapReducers.tokens;
  const { type } = props; // TODO: Make type an enum that only allows "Primary" or "Secondary"

  useEffect(() => {
    const { swapReducers } = state;
    props.setLoaded();
    // color = props.getSiteColor();
  });

  const tokenSelected = (test: any) => {
    console.log(test);
  }

  const DropdownMenu = (
    <Menu className="swap_content__token_menu" onSelect={tokenSelected}>
      {tokens ? tokens.map((item: any, index: number) => {
        const { name, symbol, image } = item;
        return (
          <Menu.Item key={index}>
            <img src={image} />
            <a target="_blank" rel="noopener noreferrer" href="#">{symbol}</a>
          </Menu.Item>
        );
      }) :
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="#">No Tokens Loaded</a>
        </Menu.Item>
      }
    </Menu>
  );

  return (
    <Col className={`swap_content__input--${type}`}>
      <Row>
        <Typography.Paragraph>{type == 'primary' ? 'From' : 'To'}</Typography.Paragraph>
      </Row>
      {/* <Input /> */}
      <Row justify="space-between">
        <Col xs={6}>
          <InputNumber bordered={false} defaultValue={0} min={0} step={0.1} stringMode />
        </Col>
        <Col xs={8}>
          <Dropdown overlay={DropdownMenu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Select a token <DownOutlined /></a>
          </Dropdown>
        </Col>
      </Row>
    </Col>
  );
};

SwapInput.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<(data: string | number) => void>): DispatchToProps => {
  return {
    getTokens: () => {
      dispatch(getTokens())
    },
    setFromToken: (data) => {
      dispatch(setFromToken(data))
    },
    setToToken: (data) => {
      dispatch(setToToken(data))
    },
    setLoaded: () => {
      dispatch(setLoaded())
    },
  };
};

export default connect<any, any, any>(null, mapDispatchToProps)(SwapInput);
