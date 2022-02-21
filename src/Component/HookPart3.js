import React,{useState,useEffect, useRef} from 'react';
function HookPart3()
{
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return(
        <input ref={inputRef}></input>
    )
}
export default HookPart3;