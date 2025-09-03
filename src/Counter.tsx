import {useEffect, useReducer} from 'react';

const reducer = (state: number, action: string) => {
  switch (action) {
    case 'increase': return state + 1
    case 'decrease': return state - 1
    default: throw new Error('Unrecognised action');
  }
}
export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);


  useEffect(() => {
    const ss = setInterval(() => {
      dispatch('increase');
    }, 1000)
    return () => clearInterval(ss);
  }, []);
  return (
    <div>
      <h1>Count is: {count}</h1>
    </div>
  );
}