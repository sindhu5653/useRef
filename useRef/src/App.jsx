import React, { useEffect, useRef, useState } from 'react';
import PreviousVlaue from './Prev-useRef/prev-value';

function Counter() {
  const [text, setText] = useState('');
  console.log(text);
  
  const myRef = useRef(0);
  console.log("connect",myRef);
  

  useEffect(() => {
    myRef.current += 1;
  });

  return (
    <div>
      <h2>TEXT</h2>
      <input type="text" value={text} 
      onChange={(e) => setText(parseInt(e.target.value))} />
      <p>Times: {myRef.current}</p>

      <PreviousVlaue/>
    </div>
  );
}
export default Counter