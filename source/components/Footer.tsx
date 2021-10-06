import { Layout, Typography } from 'antd';

const Footer = (props: { className: string; }) => {
  const { className } = props;
  const { Footer } = Layout;
  const { Text } = Typography;
  const year = new Date().getFullYear();
  return (
    <Footer className={className}>
      <Text>Decentralized Application ©{year} Created by Kevin Loy</Text>
    </Footer>
  );
};

Footer.defaultProps = {
  className: 'site_footer',
};

export default Footer;
