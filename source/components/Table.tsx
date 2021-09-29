import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from 'antd';
import { AppstoreFilled, PlusSquareFilled } from '@ant-design/icons';

import { loadingActions } from '../state/actions';

// import { isOfType, checkTypeGuard, instanceCheck, typeCheck, debug } from '../helpers/debug';

const { setLoaded, setLoading, setPercentLoaded } = loadingActions;

class DataDisplay extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.populateTable = this.populateTable.bind(this);
    this.populateEventFilter = this.populateEventFilter.bind(this);
  }

  static getDerivedStateFromProps(props: any) {
    const { api, loading, percentLoaded, columns, rows } = props;
    return {
      api,
      columns: columns.columns,
      loading,
      percentLoaded,
      rows: rows.rows,
    };
  }

  componentDidMount() {
    this.props.setPercentLoaded(100);
    this.props.setLoaded();
  }

  populateEventFilter = (items: object[]) => {
    items.map((item: any) => {
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
    const { loading, percentLoaded, rows } = this.state;
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
          childrenColumnName: 'children',
          expandedRowRender: (record, index) => {
            return (
              <Table
                key={index}
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
          rowExpandable: (record) => {
            if (record.events) {
              return true;
            }
            return false;
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

const mapStateToProps = (state: any) => {
  const { apiReducers, loadingReducers, tableReducers, polkadotReducers } = state;
  return {
    api: apiReducers.api,
    columns: tableReducers.columns,
    loading: loadingReducers.loading,
    loadingPercent: loadingReducers.loadingPercent,
    rows: tableReducers.rows,
  };
};

const mapDispatchToProps = (dispatch: any): any => {
  return {
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

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(DataDisplay);
