import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Progress, Typography } from 'antd';

const { Paragraph } = Typography;

class Loader extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  static getDerivedStateFromProps(props: any) {
    const { percentLoaded } = props;
    return { percentLoaded };
  }

  render() {
    const { percentLoaded } = this.state;
    return (
      <Layout>
        <Paragraph className="loading_text">Loading...</Paragraph>
        <Progress
          percent={percentLoaded}
          status={true ? 'active' : 'normal'}
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state: any): any => {
  const { percentLoaded } = state;
  return { percentLoaded };
};

export default connect<any, any, any>(mapStateToProps)(Loader);
