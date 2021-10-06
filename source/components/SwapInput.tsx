import { Col, Dropdown, Input, InputNumber, Menu, Row, Typography } from 'antd';
import {
  DownOutlined
} from '@ant-design/icons';

const DropdownMenu = (
  <Menu className="swap_content__token_menu">
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">Token 1</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">Token 2</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">Token 3</a>
    </Menu.Item>
  </Menu>
);

const SwapInput = (props: { type: string; }) => {
  const { type } = props; // TODO: Make type an enum that only allows "Primary" or "Secondary"
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

export default SwapInput;
