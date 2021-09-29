import { Layout, Typography } from 'antd';

const { Text } = Typography;

const AppFooter = (props: { className: string; }) => {
  const { className } = props;
  const { Footer } = Layout;
  const year = new Date().getFullYear();
  return (
    <Footer className={className}>
      <Text>Decentralized Application ©{year} Created by Kevin Loy</Text>
    </Footer>
  );
};

AppFooter.defaultProps = {
  className: 'site_footer',
};

export default AppFooter;
