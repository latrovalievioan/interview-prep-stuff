import { useContext, useRef } from 'react';
import { Context } from '../App';

export const Controls = () => {
  const { setText } = useContext(Context);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyUp = () => {
    if (!inputRef.current) return;
    setText(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} onKeyUp={handleKeyUp} />
    </div>
  );
};
