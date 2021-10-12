import { Dispatch, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Props } from '../interfaces';
// import { Actions } from './actions';

// const { getFunction, setFunction } = Actions;

interface DispatchToProps { getFunction: any, setFunction: Dispatch<any>; };
type FullProps = Props & { additionalProps: {}; } & DispatchToProps;
const TEMPLATE = (props: FullProps) => {
  const state: any = useSelector((state) => { return state; });

  useEffect(() => {
    // const { stateItems } = state;
    console.log("useEffect()");
  });

  return (
    <div>
      <p>CONTENT</p>
    </div>
  );
};

TEMPLATE.defaultProps = {};

// const mapDispatchToProps = (dispatch: Dispatch<(data: string | number) => void>): DispatchToProps => {
//   return {
//     getFunction: () => {
//       dispatch(getFunction())
//     },
//     setFunction: (data) => {
//       dispatch(setFunction(data))
//     },
//   };
// };

// export default connect<any, any, any>(null, mapDispatchToProps)(TEMPLATE);

export default TEMPLATE
