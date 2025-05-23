import React, { useEffect, useRef, useState } from 'react';
import PreviousVlaue from './Prev-useRef/prev-value';
import Hook from './Player/Player';


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
      onChange={(e) => setText(e.target.value)} />
      <p>Times: {myRef.current}</p>

      <PreviousVlaue/>
      <Hook/>
    </div>
  );
}
export default Counter