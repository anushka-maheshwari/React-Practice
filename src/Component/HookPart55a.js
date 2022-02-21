//custom hooks is basically a javascript function whose names starts with "use".

import { useState } from "react";

// a custom hooks can also call other hooks if required 
function useCounter()
{
const [count,setCount]=useState(0);
function increment()
{
    setCount(count=>count+1)
}
function decrement()
{
    setCount(count=>count-1)
}
function reset()
{
    setCount(0);
}
return[count,increment,decrement,reset];
}
export default useCounter;