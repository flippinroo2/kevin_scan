import { Layout, Typography } from 'antd';

const { Title } = Typography;

const AppHeader = (props: { className: string; }) => {
  const { className } = props;
  const { Header } = Layout;
  return (
    <Header className={className}>
      <Title code>Kevin Scan</Title>
    </Header>
  );
};

AppHeader.defaultProps = {
  className: 'site_header',
};

export default AppHeader;
