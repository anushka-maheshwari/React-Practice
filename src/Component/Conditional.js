// import React from "react";
// class Conditional extends React.Component{
//     constructor(props)
//     {
//         super(props)
//         this.state={isLogged:false}
//         this.handleEvent=this.handleEvent.bind(this);
//     }
//     handleEvent(){
//         this.setState({isLogged:true})
//     }
    // render(){
        //this first approach is by using if else we can do conditional rendering
    //     if(this.state.isLogged==true)
    //     {
    //         return(<div>hello Anushka</div>)
    //     }
    //     else{
    //         return(<div>
    //              <button onClick={this.handleEvent}>LogIn</button>
    //             <div>Hello anushka please log in</div>
    //             </div>)
    //     }



        //this second approach is by using element variable and then doing conditional rendering
    // let message;
    // if(this.state.isLogged)
    // {
    //     message=<div>hello Anushka</div>;
    // }
    // else{
    //     message=<div>
    //             <button onClick={this.handleEvent}>LogIn</button>
    //              <div>Hello anushka please log in</div>
    //             </div>
    // }
    // return(<div>{message}</div>);



     //this third approach is using inline ternary operator
    //  return(
    //      this.state.isLogged?<div>hello Anushka</div>:<div>
    //                   <button onClick={this.handleEvent}>LogIn</button>
    //                   <div>Hello anushka please log in</div>
    //                  </div>
    //  )


    //fourth approach is using inline if-else with && operator 
    //this approach is used when we want to perform somethingh only when the condition is true otherwise nothing will get render
    //this approach is also known as short-circuit approach
    // return(this.state.isLogged && <div>hello Anushka</div>)

//     }


// }
// export default Conditional;
//so in the first and the second approach we cant use if else aur element variable directly inside jsx.but in the third approach we can 
// do conditional rendering directly inside jsx.which makes the code look cleaner and better to understand by someone else.
//in case if we want to prevent component rendering we have to pass null.