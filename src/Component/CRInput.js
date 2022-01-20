import React from 'react';
class CRInput extends React.Component{
    constructor(props)
    {
        super(props)
        this.inputVal=React.createRef()
    }
    focusInput(){
        console.log("hello");
    }
    render()
    {
        return(<div><input ref={this.inputVal}></input></div>);
    }
}
export default CRInput;