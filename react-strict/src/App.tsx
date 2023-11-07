import { useState, useEffect } from "react";
import "./App.css";

const BadTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime((time) => time + 0.1);
    }, 100);
  }, []);

  return (
    <div>
      <h2>
        Bad Timer: <br /> {time.toFixed(2)}
      </h2>
    </div>
  );
};

const GoodTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>
        Good Timer: <br /> {time.toFixed(2)}
      </h2>
    </div>
  );
};

function App() {
  return (
    <div>
      <BadTimer />
      <GoodTimer />
    </div>
  );
}

export default App;
