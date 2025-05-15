import React, { useEffect, useRef, useState } from 'react';

function PreviousVlaue() {
  const [count, setCount] = useState(0);
  console.log(count);
  
  const prevCount = useRef();
//   console.log("count",prevCount);
  

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
        <h2>COUNT</h2>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
export default PreviousVlaue;