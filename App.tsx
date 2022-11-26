import * as React from 'react';
import './style.css';

export default function App() {
  const [text, setText] = React.useState('nothing');

  const Counter = () => {
    React.useEffect(() => {
      console.log('mount');
      return () => {
        console.log('unmount');
      };
    }, []);

    const [count, setCount] = React.useState(0);
    return (
      <div id="child">
        <h2>Child</h2>
        <dl>
          <dt>count:</dt>
          <dd>{count}</dd>
        </dl>
        <button onClick={() => setCount(count + 1)}> count++ </button>
      </div>
    );
  };

  return (
    <div id="parent">
      <h1>Parent</h1>
      <dl>
        <dt>text:</dt>
        <dd>{text}</dd>
      </dl>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Counter />
    </div>
  );
}
