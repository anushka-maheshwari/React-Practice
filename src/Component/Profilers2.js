import React from 'react';
class Profilers2 extends React.Component{
    constructor()
    {
        super()
        this.state={
            count:0
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler()
    {
        this.setState({count:this.state.count+1})
    }
    render()
    {
        return(
            <React.Fragment>
               <button onClick={this.clickHandler}>Click {this.state.count} Times</button>
            </React.Fragment>
        )
    }

}
export default Profilers2;