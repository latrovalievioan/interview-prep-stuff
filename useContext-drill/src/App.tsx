import { Dispatch, SetStateAction, createContext, useState } from 'react';
import './App.css';
import { Controls } from './Controls';
import { Display } from './Display';

export type Store = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

const defaultStore: Store = {
  text: '',
  setText: () => null,
};

export const Context = createContext(defaultStore);

function App() {
  const [text, setText] = useState<string>('');

  const storeValue = {
    text,
    setText,
  };

  return (
    <Context.Provider value={storeValue}>
      <Controls />
      <Display />
    </Context.Provider>
  );
}

export default App;
