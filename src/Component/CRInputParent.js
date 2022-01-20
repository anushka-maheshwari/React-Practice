import React from 'react';
import CRInput from './CRInput';
class CRInputParent extends React.Component{
    constructor(props)
    {
        super(props)
        this.clickHandler=this.clickHandler.bind(this);
        this.parentValue=React.createRef();
    }
    clickHandler()
    {
        this.parentValue.current.focusInput();
    }
    render()
    {
        return(
            <div>
                <CRInput ref={this.parentValue}/>
                <button onClick={this.clickHandler}>Click ME</button>
            </div>
        )
    }

}
export default CRInputParent;