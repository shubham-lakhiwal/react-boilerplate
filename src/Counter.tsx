import {useEffect, useState} from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const ss = setInterval(() => {
      setCount(cnt => cnt + 1);
    }, 1000)
    return () => clearInterval(ss);
  }, []);
  return (
    <div>
      <h1>Count is: {count}</h1>
    </div>
  );
}