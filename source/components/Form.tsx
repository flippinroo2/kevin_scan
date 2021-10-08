import React, { Component, Dispatch, Ref } from 'react';
import { connect } from 'react-redux';

import { tableActions, loadingActions } from '../state/actions';
import {
  Button,
  Col,
  Divider,
  Dropdown,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Menu,
  Row,
  Tooltip,
  ConfigProvider,
} from 'antd';
import {
  CaretDownOutlined,
  BankTwoTone,
  CompassTwoTone,
  HeartTwoTone,
  RocketTwoTone,
  SettingTwoTone,
  ThunderboltTwoTone,
} from '@ant-design/icons';

const { addColumns, addRow, addRows, clearTable, setColumns } = tableActions;
const { setLoaded, setLoading, setPercentLoaded } = loadingActions;

enum Blockchains {
  Polkadot = 'wss://rpc.polkadot.io',
}

import { Props, State } from '../interfaces/master';

interface DispatchToProps {
  addColumns: Dispatch<any>
  addRow: Dispatch<any>
  addRows: Dispatch<any>
  clearTable: Dispatch<void>
  setColumns: Dispatch<any>
  setLoaded: Dispatch<void>
  setLoading: Dispatch<void>
  setPercentLoaded: Dispatch<number>
};
type FormProps = Props & DispatchToProps;
type FormState = {
  api?: {
    derive?: {
      chain?: {}
    },
    query?: {
      system?: {
        events?: {
          at: (hash: number[]) => {}
        }
      },
      timestamp?: {
        now: () => { words: string }
      }
    },
    rpc?: {
      chain?: {
        getBlock: (hash: number[]) => {},
        // parseInt(blockData.block.header.number.toString());
        getBlockHash: (blockNumber: number) => number[]
        getHeader: (hash: number[]) => { author?: string },
      }
    },
    type?: string
  },
  block?: {},
  blockchain?: string,
  endBlock?: number,
  endpoint?: string,
  genesisBlock?: number,
  lastBlock?: number,
  lastFinalizedBlock?: number,
  loading?: boolean,
  percentLoaded?: number,
  startBlock?: number,
  subscribe?: boolean,
};

class DataInput extends Component<FormProps, FormState> {
  inputForm: any;
  // inputForm: FormInstance<any>;
  // inputForm: Ref<FormInstance<any>>;
  // inputForm: Ref<FormInstance<any>> = React.createRef();
  // inputForm = React.createRef<FormInstance>();

  // inputForm = React.forwardRef<FormInstance>();

  constructor(props: FormProps) {
    super(props);
    this.inputForm = React.createRef(); // TODO: Figure out why this is not binding and returning null.
    // TODO: Clean up state bindings. We can use props for most use cases.
    const {
      api,
      block,
      blockchain,
      endpoint,
      loading,
      percentLoaded,
    } = props;
    this.state = {
      api,
      blockchain,
      endBlock: block?.endBlock,
      endpoint,
      genesisBlock: block?.genesisBlock,
      lastBlock: block?.lastBlock,
      lastFinalizedBlock: block?.lastFinalizedBlock,
      loading,
      percentLoaded,
      startBlock: block?.startBlock,
    };
    this.clickListener = this.clickListener.bind(this);
    this.formRefFunction = this.formRefFunction.bind(this);
    this.subscribeToBlocks = this.subscribeToBlocks.bind(this);
    this.unsubscribeToBlocks = this.unsubscribeToBlocks.bind(this);
  }

  componentDidMount() { }

  formRefFunction = (form: any) => {
    if (form) {
      this.inputForm.current = form;
    }
  }

  async dropdownListener(event: any) {
    // TODO: Get this working for multi-chain analysis.
  }

  async clickListener(event: any) {
    await this.props.setLoading();
    const clear = await this.props.clearTable();
    if (this.props.api?.type) {
      const test = await this.buildTableObjects(this.props.api);
    } else {
      alert("Blockchain API hasn't loaded yet."); // Return errors properly here.
    }
  }

  async buildTableObjects(api: any) {
    let columns = [];

    const form = this.inputForm.current;

    const startBlock = parseInt(form?.getFieldValue('startBlock')) || 1;
    const endBlock = parseInt(form?.getFieldValue('endBlock')) || 2;
    const blockDifference = endBlock - startBlock;

    // const percentTicker = 100 / blockDifference;

    for (let i = 0; i <= blockDifference; i++) {
      const blockData: any = await this.getBlockData(api, startBlock + i);
      const { events, hash } = blockData;

      events.forEach((event: any, key: number) => {
        const { blockNumber, events } = event;
        this.props.addRow({
          blockNumber,
          events,
          key: blockNumber,
        });
        // this.props.addRows(events);
      });

      const keys: any = [];
      Object.keys(events[0]).forEach((key) => {
        switch (key) {
          case 'arguments':
          case 'key':
            return;
          default:
            keys.push({
              title: `${key.toLocaleUpperCase()}`, // TODO: Make the column title Proper Case. https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
              dataIndex: `${key}`,
              key: `${key}`,
            });
        }
      });
      columns = keys;

      // TODO: Find a way to show the percent loaded in the table spinner. (Logic is already coded below)
      // const percentLoaded = Math.round((i * percentTicker + Number.EPSILON) * 100) / 100;
      // this.props.setPercentLoaded(percentLoaded);
    }
    this.props.setColumns(columns);
    this.props.setLoaded();
  }

  async getBlockData(api: any, blockNumber: number) {
    if (api?.type) {
      const hash = await api?.rpc?.chain?.getBlockHash(blockNumber)!;
      const block = await api?.rpc?.chain?.getBlock(hash);
      const rawEventData = await api?.query?.system?.events?.at(hash);
      const formattedEventData = await this.parseEventData(api, rawEventData);
      const time = await this.getTimeFromHash(api, hash);
      return {
        block,
        hash,
        events: formattedEventData,
        time,
      };
    }
  }

  async parseEventData(api: any, events: any) {
    const eventData = [];
    const hash = events.createdAtHash;
    const blockHeader = await api?.rpc?.chain?.getHeader(hash);
    const rawBlock = await api?.rpc?.chain?.getBlock(hash);
    const block = rawBlock.block;
    const blockExtrinsics = block.extrinsics;
    const blockNumber = parseInt(block.header.number.toString());
    const hashFromNumberExample = await api?.rpc?.chain?.getBlockHash(blockNumber);
    const blockTime = await this.getTimeFromHash(api, hash);
    const eventObject: { blockNumber?: {}, events: {}[] } = {
      blockNumber,
      events: [],
    };
    for (const item of events) {
      const { data, index, meta, method, section } = item.get('event');
      const { phase } = item;
      const [readable] = data.toHuman();
      const metadata = data.meta;
      const { args, docs, isEmpty, name, registry, Type } = meta;
      const [eventId] = phase.asApplyExtrinsic.words;
      const author = await blockHeader?.author;
      eventObject.events.push({
        // author,
        // timestamp: blockTime.toISOString(),
        eventId: `${blockNumber}-${eventId}`,
        event: `${section}.${method}`,
        extraData: [readable.class, readable.paysFee, readable.weight],
        key: `${blockNumber}-${eventId}`,
      });
    }
    eventData.push(eventObject);
    return eventData;
  }

  async getTimeFromHash(api: any, hash: any) {
    // TODO: Get timestamps working properly. (I believe it has to do with the data returned from api.query.timestamp being the current time, not the block / event time.)
    let temp;
    const { lastBlock, lastFinalizedBlock } = this.state;
    if (api?.type) {
      const deriveChain = api.derive?.chain;
      const rpcChain = api.rpc?.chain;

      const block = await rpcChain?.getBlock(hash);

      const timestamp = api.query?.timestamp;
      const blockchainTimestamp: any = await timestamp?.now()!;

      const [parsedBlockchainTimestamp]: any = blockchainTimestamp.words;
      const blockchainTime = new Date(parsedBlockchainTimestamp);

      const currentTime: any = new Date();

      // Trying 3 different calculations and none of them are correct.
      const diff1 = currentTime - parsedBlockchainTimestamp;
      const diff2 = parsedBlockchainTimestamp - currentTime;
      const diff3 =
        currentTime -
        blockchainTimestamp.words[0] * blockchainTimestamp.words[1];

      const time1 = new Date(diff1);
      const time2 = new Date(diff2);
      const time3 = new Date(diff3);

      return time1;
    }
  }

  async subscribeToBlocks() {
    // const { api } = this.state;
    // const block = await api?.rpc?.chain?.getBlock();
    // const header = block.block.header;
    // api?.derive?.chain?.subscribeNewHeads((header: any) => {
    //   const { subscribe } = this.state;
    //   if (subscribe) {
    //     console.log(
    //       `Block Number#${header.number}\tBlock Author: ${header.author}`,
    //     );
    //   }
    // });
  }

  unsubscribeToBlocks() {
    this.setState({ subscribe: false });
  }

  menu = (
    <Menu
      onClick={(event) => {
        // const { domEvent, key, keyPath } = event;
        // const { target } = domEvent;
        // const { innerText } = target.domEvent;
      }}>
      {/* TODO: Make the items below 1 component with a loop or something? */}
      <Menu.Item
        key="1"
        onClick={(item) => {
          this.setState({
            blockchain: 'Avalanche',
            endpoint: 'ws://NEED_URL:9650/ext/bc/C/ws',
          });
        }}
        icon={<RocketTwoTone />}>
        Avalanche
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={(item) => {
          this.setState({
            blockchain: 'Binance Smart Chain',
            endpoint: 'wss://bsc-ws-node.nariox.org:443',
          });
        }}
        icon={<BankTwoTone />}>
        Binance Smart Chain
      </Menu.Item>
      <Menu.Item
        key="3"
        onClick={(item) => {
          this.setState({
            blockchain: 'Ethereum',
            endpoint: 'wss://mainnet.infura.io/ws',
          });
        }}
        icon={<CompassTwoTone />}>
        Ethereum
      </Menu.Item>
      <Menu.Item
        key="4"
        onClick={(item) => {
          this.setState({
            blockchain: 'Polygon',
            endpoint: 'wss://socket.polygon.io/stocks',
          });
        }}
        icon={<SettingTwoTone />}>
        Polygon
      </Menu.Item>
      <Menu.Item
        key="5"
        onClick={(item) => {
          this.setState({
            blockchain: "Polkadot",
            endpoint: Blockchains.Polkadot,
          });
        }}
        icon={<HeartTwoTone />}>
        Polkadot
      </Menu.Item>
      <Menu.Item
        key="6"
        onClick={(item) => {
          this.setState({
            blockchain: 'Solana',
            endpoint: 'wss://api.devnet.solana.com/',
          });
        }}
        icon={<ThunderboltTwoTone />}>
        Solana
      </Menu.Item>
    </Menu>
  );

  render() {
    const { endBlock = 2, endpoint, lastBlock, startBlock = 1 } =
      this.state; // TODO: Add a state for Subscribe that'll be used to stream new data from blockchain.
    const { loading } = this.props;

    const blockchainSelection = "Polkadot";

    const formInitialValues = {
      endpoint,
      startBlock,
      endBlock: endBlock ? endBlock : lastBlock,
    };

    const formProps = {
      name: 'blockchainData',
      // form: this.inputForm,
      // ref: this.inputForm,
      initialValues: formInitialValues,
      colon: false,
      scrollToFirstError: true,
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const rowProps = {
      wrap: true,
    };

    const columnProps = { xs: 24, sm: 12 };

    return (
      <Form className="blockchain_form" ref={this.formRefFunction} {...formProps}>
        <Divider orientation="left">Blockchain Info</Divider>
        {/* <ConfigProvider {...dividerProps}>
          <Divider>Blockchain Info</Divider>
        </ConfigProvider> */}
        <Row className="blockchain_info" align="middle" justify="center" {...rowProps}>
          <Col className="blockchain_info__blockchain" {...columnProps} xs={7} sm={6} md={5}>
            <Dropdown overlay={this.menu}>
              <Button>
                {blockchainSelection} <CaretDownOutlined />
              </Button>
            </Dropdown>
          </Col>
          <Col className="blockchain_info__endpoint" {...columnProps} xs={17} sm={18} md={19}>
            <Form.Item
              label="Endpoint"
              name="endpoint"
              tooltip={'Blockchain Endpoint URL'}
              rules={[
                {
                  required: true,
                  message:
                    'Please input the endpoint you would lke to request blockchain data from.',
                },
              ]}
              required={true}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Divider orientation="left">Blocks</Divider>
        <Row className="block_info" align="middle" justify="center" {...rowProps}>
          <Col className="block_info__startBlock" {...columnProps} xs={11} sm={24}>
            <Form.Item
              label="Start Block"
              name="startBlock"
              tooltip={'Beginning block range'}
              hasFeedback={true}
              labelAlign="left"
              preserve={true}
              rules={[
                {
                  required: true,
                  message: `Start Block is a required field.`,
                },
                {
                  type: 'number',
                  min: 1,
                  max: Number.MAX_SAFE_INTEGER,
                  message:
                    'Value must be greater than 0 and less than 9,007,199,254,740,991. (Maximum integer value)',
                },
                ({
                  getFieldsValue,
                }) => ({
                  validator(rule, value) {
                    const { startBlock, endBlock } = getFieldsValue();
                    if (startBlock < endBlock) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('Start Block must be less than End Block.'),
                    );
                  },
                }),
              ]}
              trigger="onChange"
              required={true}>
              <InputNumber
                min={1}
                max={Number.MAX_SAFE_INTEGER}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          <Col
            className="block_info__endBlockß"
            {...columnProps}
            xs={{ offset: 2, span: 11 }}
            sm={{ offset: 0, span: 24 }}>
            <Form.Item
              label="End Block"
              labelAlign="left"
              name="endBlock"
              tooltip={'Ending block range'}
              hasFeedback={true}
              preserve={true}
              validateFirst={true}
              rules={[
                {
                  type: 'number',
                  min: 1,
                  max: Number.MAX_SAFE_INTEGER,
                  message:
                    'Value must be greater than 0 and less than 9,007,199,254,740,991. (Maximum integer value)',
                },
                {
                  required: true,
                  message: `End Block is a required field.`,
                },
                ({
                  getFieldsValue,
                }) => ({
                  validator(rule, value) {
                    const { startBlock, endBlock } = getFieldsValue();
                    if (endBlock > startBlock) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('End Block must be greater than Start Block.'),
                    );
                  },
                }),
              ]}
              trigger="onChange"
              required={true}>
              <InputNumber
                min={2}
                max={Number.MAX_SAFE_INTEGER}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Divider orientation="left">Actions</Divider>
        <Row align="middle" {...rowProps}>
          <Col {...columnProps} xs={{ offset: 5, span: 14 }} sm={{ offset: 0, span: 10 }} md={8}>
            <Button
              className="scan_button"
              type="primary"
              htmlType="submit"
              onClick={this.clickListener}
              block={true}
              disabled={loading}>
              Scan
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = (state: State): Props => {
  const { apiReducers = {}, loadingReducers = {} } = state;
  return {
    api: apiReducers.api,
    blockchain: apiReducers.blockchain,
    endpoint: apiReducers.endpoint,
    loading: loadingReducers.loading,
    percentLoaded: loadingReducers.percentLoaded,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<(data: string | number) => void>): DispatchToProps => {
  return {
    addColumns: (data: any) => {
      dispatch(addColumns(data));
    },
    addRow: (data: any) => {
      dispatch(addRow(data));
    },
    addRows: (data: any) => {
      dispatch(addRows(data));
    },
    clearTable: () => {
      dispatch(clearTable());
    },
    setColumns: (data: any) => {
      dispatch(setColumns(data));
    },
    setLoaded: () => {
      dispatch(setLoaded());
    },
    setLoading: () => {
      dispatch(setLoading());
    },
    setPercentLoaded: (data: any) => {
      dispatch(setPercentLoaded(data));
    },
  };
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(DataInput);
