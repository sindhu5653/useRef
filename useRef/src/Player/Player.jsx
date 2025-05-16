import React from "react";
import { useRef, useState } from "react";

function Hook() {
    const inputRef = useRef()

    const [name, setName] = useState("")
    console.log(name);
    

    function handleChange() {
        setName(inputRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleChange}>Click</button>
            <p>Name:{name}</p>
        </div>
    )
}

export default Hook;