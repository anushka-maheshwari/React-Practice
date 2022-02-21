import React from 'react';
import UpdatedComponent from './HOC3';
class HOC2 extends React.Component{
    render()
    {
        const {count,clickHandler}=this.props;
        return(
            <h1 onMouseOver={clickHandler}>Hover {count} Times</h1>
        )
    }

}
export default UpdatedComponent(HOC2);