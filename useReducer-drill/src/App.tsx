import { useReducer } from 'react';

type State = {
  count: number;
  count2: number;
};

type ActionTypes =
  | {
      type: 'setCount';
      payload: number;
    }
  | {
      type: 'setCount2';
      payload: number;
    };

const reducer = (state: State, action: ActionTypes) => {
  switch (action.type) {
    case 'setCount':
      return { ...state, count: action.payload };
    case 'setCount2':
      return { ...state, count2: action.payload };
  }
};

const initialState: State = {
  count: 0,
  count2: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchIncrementCountByOne = () =>
    dispatch({ type: 'setCount', payload: state.count + 1 });
  const dispatchDecrementCountByOne = () =>
    dispatch({ type: 'setCount', payload: state.count - 1 });

  const dispatchIncrementCount2ByOne = () =>
    dispatch({ type: 'setCount2', payload: state.count2 + 1 });
  const dispatchDecrementCount2ByOne = () =>
    dispatch({ type: 'setCount2', payload: state.count2 - 1 });

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid white',
        }}
      >
        <h1>Count: {state.count}</h1>
        <div style={{ display: 'flex' }}>
          <button onClick={dispatchIncrementCountByOne}>Increment</button>
          <button onClick={dispatchDecrementCountByOne}>Decrement</button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid white',
        }}
      >
        <h1>Count2: {state.count2}</h1>
        <div style={{ display: 'flex' }}>
          <button onClick={dispatchIncrementCount2ByOne}>Increment</button>
          <button onClick={dispatchDecrementCount2ByOne}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
