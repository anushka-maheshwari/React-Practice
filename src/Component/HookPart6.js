import React,{useState,useMemo} from 'react';
function HookPart6()
{
    const[counter1,setCounter1]=useState(0);
    const[counter2,setCounter2]=useState(0);
    function clickHandler1()
    {
        setCounter1(counter1+1)
    }
    function clickHandler2()
    {
        setCounter2(counter2+1)
    }
    const isEven=useMemo(()=>{
        let i=0;
        while (i<=200000000)i++
        return(counter1%2===0)
    },[counter1])
  
    return(
        <React.Fragment>
        <button onClick={clickHandler1}>counter1:{counter1}</button>
        <span>{isEven?"Even":"Odd"}</span>
        <button onClick={clickHandler2}>counter2:{counter2}</button>
        </React.Fragment>
        
    )
}
export default HookPart6;

// This hook allows developers to cache the value of a variable along with a dependency list.