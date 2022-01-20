import React from "react";
class ClassEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={message:"hello"}
        this.classHandler3=this.classHandler3.bind(this);
        this.classHandler4=this.classHandler4.bind(this);
    }
     classHandler(){
        console.log("this is how events handle in class compoennets")//---->this will work bcz there is no concept of this in this event handler
    }
    classHandler2(){
      this.setState({message:"hello guys"});//--->this will give error of undefined setstate 
       console.log(this);//--->undefined
    }
    classHandler3(){
        this.setState({message:"hello guys"});
        console.log(this.state.message);//--->hello
    }
    classHandler4(message){
        this.setState({message:message});
    }
    render()
    {
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.classHandler}>Class Button1</button>
                <button onClick={this.classHandler2}>Class Button2</button>
                <button onClick={this.classHandler3}>Class Button3</button>
                <button onClick={this.classHandler4("welcome guys")}>Class Button4</button>
            </div>
        );
    }
}
export default ClassEvent;
//in react class componnts event handler should be bind ,otherwise this keyword will possess undefined value inside the event handler.
//we can also bind eventhandler in render tym and we can also bind in the constructor .but binding in constructor is 
// better than at rendering time because then binding this will happen at a single time otherwise binding will hanppen on every event.
//so there are four approach of binding this:
// 1.binding at rendering Time
// 2.binding in constructor
// 3.declare event handler function as a arrow function 
// 4.using callback at rendering tym
