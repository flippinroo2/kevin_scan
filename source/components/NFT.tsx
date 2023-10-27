import { Input, Skeleton, Statistic, Card, Row, Col, Table } from 'antd';

const columns = [
    {
        key: 'number',
        title: 'NUMBER',
        dataIndex: 'number',
    },
];

const rows = [
    {
        key: 'number',
        number: '5649',
    },
];

const NFT = () => {
    const { Search } = Input;
    return (
        <>
            <Search placeholder="input search text" enterButton="Search" size="large" loading />
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>NFT Name</p>
                <Skeleton.Image style={{ width: 300 }} />
                <Table columns={columns} dataSource={rows} pagination={false} />
            </Card>
        </>
    );
};

NFT.defaultProps = {};

export default NFT;
