import React from "react";
class RefsDemo extends React.Component{
constructor(props)
{
    super(props)
    this.handleEvent=this.handleEvent.bind(this);
    this.handleRef=React.createRef();
    this.handleRef2=null;
    this.sethandleRef2=(element)=>{
        this.handleRef2=element
    }
}
handleEvent()
{
    alert(this.handleRef.current.value);
}
componentDidMount(){
    console.log(this.handleRef);
    if(this.handleRef2){
    console.log(this.handleRef2);
    }
}
render()
{
    return(
        <div>
            <input ref={this.handleRef}></input>
            <input ref={this.sethandleRef2}></input>
            <button onClick={this.handleEvent}>Click Me</button>
        </div>
    )
}
}
export default RefsDemo;

//so there are two ways of creating refrence ...
// first is creating reference by using react.createRef in the constructor and then assign refrence to the element 
//this will be create in constructor so that it can be reefrenced in the whole component
// and the second way is to create refrence with a callback so we have to do four thinghs 
// first create refrence property  with null  value then set the refrence with an element and then assign the setrefrence to a particular elemet 