import { Input, Skeleton, Statistic, Card, Row, Col, Table } from 'antd';

const contractData = {
    address: '',
    admin: '',
    balance: 0,
    contract: {},
    functions: {},
    loading: true,
    name: '',
    symbol: '',
    totalSupply: 0,
    functionArguments: 'N/A',
    functionTitle: 'N/A',
    functionResult: 'N/A',
};

// returnFunctionResult = (
//     functionData,
//     functionSignature,
//     functionArguments,
//     functionResult,
// ) => {
//     functionData.forEach((item) => {
//         const [functionName] = item;
//         const [functionCompare] = functionSignature.split('(');
//         if (functionName == functionCompare) {
//             this.setState({
//                 functionSignature,
//                 functionTitle: functionName,
//                 functionArguments,
//                 functionResult,
//             });
//         }
//     });
// };

// async getContractData() {
//     const { address, contract } = this.state;

//     const ERC20EXAMPLE = contract;
//     const functions = contract.methods;

//     this.setState({ functions });

//     const balance = await ERC20EXAMPLE.methods.balanceOf(address).call();
//     this.setState({ balance: parseInt(balance) });

//     const name = await ERC20EXAMPLE.methods.name().call();
//     this.setState({ name: name });

//     const symbol = await ERC20EXAMPLE.methods.symbol().call();
//     this.setState({ symbol: symbol });

//     const totalSupply = await ERC20EXAMPLE.methods.totalSupply().call();
//     this.setState({ totalSupply: parseInt(totalSupply) });
// }

// functionData = Object.keys(functions).reduce(
//     (results, item, index, state) => {
//       if (item.startsWith('0x') || item.endsWith('()')) {
//         return results;
//       }
//       const [name, args] = item.split('(');
//       if (args) {
//         [functionArguments] = args.split(')');
//         results.push([name, functionArguments]);
//         return results;
//       }
//       return results;
//     },
//     [],
//   );

const Contract = () => {
    const { Search } = Input;
    return (
        <>
            <Search placeholder="input search text" enterButton="Search" size="large" loading />
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </>
    );
};

Contract.defaultProps = {};

export default Contract;
