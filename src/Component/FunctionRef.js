import { useRef } from "react";

function FunctionRef()
{
    const inputVal=useRef(null);
    function clickHandler()
    {
        console.log(inputVal.current.focus())
    }

    return(
        <div>
            <input ref={inputVal}></input>
            <button onClick={clickHandler}>Click ME</button>
        </div>
    )
}
export default FunctionRef;