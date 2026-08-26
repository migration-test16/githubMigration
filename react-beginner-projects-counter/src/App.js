import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);
  const countClassName = count > 0 ? 'plus' : count < 0 ? 'minus' : '';

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1 className={countClassName}>{count}</h1>
        <button className="minus" onClick={() => setCount((current) => current - 1)}>
          - Минус
        </button>
        <button className="reset" onClick={() => setCount(0)} disabled={count === 0}>
          Сбросить
        </button>
        <button className="plus" onClick={() => setCount((current) => current + 1)}>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
