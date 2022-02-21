import React from 'react';
const FunctionRef=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input ref={ref}></input>
        </div>
    )
})
export default FunctionRef;

//Ref forwarding is a technique for automatically passing a ref through a component to one of its children. 