import { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Progress, Typography } from 'antd';

import { Props, State } from '../interfaces/master';

type LoaderProps = Props;
type LoaderState = { percentLoaded?: number };

class Loader extends Component<LoaderProps, LoaderState> {
  constructor(props: Props) {
    super(props);
    // TODO: Clean up state bindings. We can use props for most use cases.
    const { percentLoaded } = props;
    this.state = { percentLoaded };
  }

  render() {
    const { percentLoaded } = this.state;
    const { Paragraph } = Typography;
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

const mapStateToProps = (state: State): Props => {
  const { loadingReducers = {} } = state;
  return { percentLoaded: loadingReducers.percentLoaded };
};

export default connect<any, any, any>(mapStateToProps)(Loader);
