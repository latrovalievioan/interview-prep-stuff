const makeThrottled = (fn, delay) => {
  let lastCall = 0;
  return () => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn();
    }
  };
};

const makeDebounced = (fn, delay) => {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  };
};

let count = 0;
const counter = document.createElement('h1');

const renderCounter = () => (counter.innerText = `${count}`);

const incrementCount = () => {
  count++;
  renderCounter();
};

const throttledIncrement = makeThrottled(incrementCount, 1000);
const debouncedIncrement = makeDebounced(incrementCount, 1000);

renderCounter(count);

const throttleButton = document.createElement('button');
throttleButton.innerText = 'Inc Throttle';
throttleButton.addEventListener('click', () => throttledIncrement());

const debounceButton = document.createElement('button');
debounceButton.innerText = 'Inc Debounce';
debounceButton.addEventListener('click', () => debouncedIncrement());

const container = document.body;
container.appendChild(throttleButton);
container.appendChild(debounceButton);
container.appendChild(counter);
