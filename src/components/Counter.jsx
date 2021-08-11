// 関数でstateを管理する（useState）
import React, { useState } from 'react';

const Counter = () => {
  // 第１引（変数名）第２引数（関数名）　初期値
  const [count, setCount] = useState(0);
  const onCountUp = () => {
    setCount(count + 1);
  };
  const onCountDown = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button className="ui primary button" onClick={onCountUp}>Increment</button>
      <button className="ui red button" onClick={onCountDown}>Decrement</button>
    </div>
  );
};

export default Counter;

