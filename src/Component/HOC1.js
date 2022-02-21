import React from 'react';
import UpdatedComponent from './HOC3';
class HOC1 extends React.Component{
  
    render()
    {
        const {count,clickHandler}=this.props;
        return(
            <button onClick={clickHandler}>Click {count} Times</button>
        )
    }

}
export default UpdatedComponent(HOC1);