import React from 'react';
import FRInput from './FRInput';
class FRInputParent extends React.Component{
    constructor(props)
    {
        super(props)
        this.handleEvent=this.handleEvent.bind(this);
        this.inputValue=React.createRef();

    }
    handleEvent()
    {
        console.log(this.inputValue.current.value);
    }
    render()
    {
        return(
            <div>
                <FRInput ref={this.inputValue}/>
                <button onClick={this.handleEvent}>Click Me</button>
            </div>
        )
    }

}
export default FRInputParent;