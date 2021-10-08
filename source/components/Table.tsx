import { Component, Dispatch } from 'react';
import { connect } from 'react-redux';

import { Table } from 'antd';
import { AppstoreFilled, PlusSquareFilled } from '@ant-design/icons';

import { loadingActions } from '../state/actions';

const { setLoaded, setLoading, setPercentLoaded } = loadingActions;

import { Props, State } from '../interfaces/master';

interface DispatchToProps { setLoaded: Dispatch<void>, setLoading: Dispatch<void>; setPercentLoaded: Dispatch<number> };
type TableProps = Props & DispatchToProps;
type TableState = { api?: {}, columns?: object[], loading?: boolean, percentLoaded?: number, rows?: object[] };

class DataDisplay extends Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    // TODO: Clean up state bindings. We can use props for most use cases.
    const {
      api,
      columns,
      loading,
      percentLoaded,
      rows,
    } = props;
    this.state = {
      api,
      columns,
      loading,
      percentLoaded,
      rows,
    }
    this.populateTable = this.populateTable.bind(this);
    this.populateEventFilter = this.populateEventFilter.bind(this);
  }

  componentDidMount() {
    this.props.setLoaded();
  }

  populateEventFilter = (items: object[]) => {
    items.map((item: any) => {
      // TODO: Make this dynamic instead of hard coding the filter to use "system.ExtrinsicSuccess"
      if (item.key == 'event') {
        item.filters = [
          {
            text: `system.ExtrinsicSuccess`,
            value: 'system.ExtrinsicSuccess',
          },
        ];
        item.onFilter = (value: string, record: { event: any }) => {
          const filterCondition = record.event == value;
          return filterCondition;
        };
      }
      return item;
    });
    return items;
  };

  populateTable() {
    const { loading, rows } = this.props;
    // [
    //   { blockNumber: '', children: [], key: 0 }
    // ]
    // TODO: Dynamic column creation
    const mainColumns = [
      {
        title: 'BLOCK NUMBER',
        dataIndex: 'blockNumber',
        key: 'blockNumber',
        sorter: (a: any, b: any) => {
          return a.blockNumber - b.blockNumber;
        },
        // sortDirections: ['ascend', 'descend'],
      },
    ];

    const secondaryColumns = this.populateEventFilter([
      {
        title: 'EVENT ID',
        dataIndex: 'eventId',
        key: 'eventId',
      },
      {
        title: 'EVENT',
        dataIndex: 'event',
        key: 'event',
      },
      {
        title: 'EXTRA DATA',
        dataIndex: 'extraData',
        key: 'extraData',
        render: (text: any, record: any, index: any) => {
          const data = record.extraData.map((item: any) => {
            return <li>{item}</li>;
          });
          return <ul>{data}</ul>;
        },
      },
    ]);

    return (
      <Table
        className="blockchain_table"
        columns={mainColumns}
        dataSource={rows}
        expandable={{
          expandedRowRender: (record: any, key: number) => {
            return (
              <Table
                key={key}
                columns={secondaryColumns}
                dataSource={record.events}
                pagination={false}
              />
            );
          },
          expandIcon: ({ expanded, onExpand, record }) => {
            if (expanded) {
              return <AppstoreFilled onClick={(e) => onExpand(record, e)} />;
            }
            return <PlusSquareFilled onClick={(e) => onExpand(record, e)} />;
          },
          expandRowByClick: true,
          rowExpandable: (record: any) => {
            return record.events ? true : false;
          },
        }}
        loading={{ spinning: loading }}
      // pagination={
      //   true // TODO: Incorporate pagination based on the number of items returned.
      // }
      />
    );
  }

  render() {
    const Table = this.populateTable();
    return Table;
  }
}

const mapStateToProps = (state: State): Props => {
  const { apiReducers = {}, loadingReducers = {}, tableReducers = {} } = state;
  return {
    api: apiReducers.api,
    columns: tableReducers.columns,
    loading: loadingReducers.loading,
    percentLoaded: loadingReducers.percentLoaded,
    rows: tableReducers.rows,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<(data: string | number) => void>): DispatchToProps => {
  return {
    setLoaded: () => {
      dispatch(setLoaded());
    },
    setLoading: () => {
      dispatch(setLoading());
    },
    setPercentLoaded: (data: number) => {
      dispatch(setPercentLoaded(data));
    },
  };
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(DataDisplay);
