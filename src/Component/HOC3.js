import React from 'react';
//const UpdatedComponent=(WrappedComponent,argument)=>
// it can take arument as an parameter also 
const UpdatedComponent=(WrappedComponent)=>{
    class HOC3 extends React.Component{
        constructor()
        {
            super()
            this.state={
                count:0
            }
            this.clickHandler=this.clickHandler.bind(this);
        }
        clickHandler()
        {
            this.setState({count:this.state.count+1})
        }
        render()
        {
            return(
                <WrappedComponent count={this.state.count} clickHandler={this.clickHandler} {...this.props}/>
            )
        }
    
    }
    return HOC3;
}
export default UpdatedComponent;


//A higher-order component (HOC) is an advanced technique in React for reusing component logic. 
// Concretely, a higher-order component is a function that takes a component and returns a new component.
// const EnhancedComponent = higherOrderComponent(WrappedComponent);