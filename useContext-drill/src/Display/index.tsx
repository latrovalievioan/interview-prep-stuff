import { useContext } from 'react';
import { Context } from '../App';

export const Display = () => {
  const { text } = useContext(Context);

  return (
    <div style={{ height: '200px' }}>
      <h1>{text}</h1>
    </div>
  );
};
