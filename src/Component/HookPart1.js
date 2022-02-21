// HOOKS:
// What are Hooks?
// Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features
//  without writing a class.
// Hooks are the functions which "hook into" React state and lifecycle features from function components. 
// It does not work inside classes.



// Why Hooks?
// Hooks solve a wide variety of  unconnected problems in React that we’ve encountered over many years.

// 1.Classes confuse both people and machines:-
// classes can be a large barrier to learning React because we have to understand how "this" works in JavaScript, 
// which is very different from how it works in most languages.
// You have to remember to bind the event handlers. 
// Classes do not minify very well and make hot reloading very unreliable.

// 2.It’s hard to reuse stateful logic between components:-
// React doesn’t offer a way for  reusable stateful component logic,render props and higher-order components that try to solve this.
// But these patterns require you to restructure your components when you use them, which can be cumbersome and make code harder to follow.

// 3.Complex class components become hard to understand:-
// In many cases it’s not possible to break these components into smaller ones because the stateful logic is all over the place. 



//This  basically shows how to create counter by using react states in class components
//where we doesnt use hooks


// import React from 'react';
// class HookPart1 extends React.Component{
//     constructor(props)
//     {
//         super(props)
//         this.state={
//             count:0
//         }
//         this.clickHandler=this.clickHandler.bind(this);
//     }
//     clickHandler()
//     {
//         this.setState({count:this.state.count+1})
//     }
//     render()
//     {
//         return(<button onClick={this.clickHandler}>Click {this.state.count} Times</button>)
//     }

// }
// export default HookPart1;

// //This  basically defines how to use "useState Hook" in functional component.
// //here we simply design a counter use "useState hooks"


// import React,{useState} from 'react';
// function HookPart1()
// {
//     const [count,setCount]=useState(0);
//     function handleEvent()
//     {
//         setCount(count=>count+1);
//     }
//     return(
//         <div>
//             <button onClick={handleEvent}>Click {count} Times</button>
//         </div>
//     )
// }
// export default HookPart1;

// //useState is a Hook.We call it inside a function component to add some local state to it. 
// // useState returns a pair: the current state value and a function that lets you update it.
// // handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.
// // The only argument to useState is the initial state. 
// //when dealing with objects and arrays we have to use spread operator and then call setter function.
// //new state value depends upon the previous state value.we can pass a function to the setter function.



// // This example shows how to use useState and spread operator with objects and arrays
// // The Spread operator lets us expand an iterable like an object, string, or array into its elements

// import React,{useState} from "react";
// function HookPart1()
// {   
//     const [name,setName]=useState({firstName:"",lastName:""})
//     const [item,setItem]=useState([]);
//     function handleEvent()
//     {
//         setItem([...item,{id:item.length,value:10}])
//     }
//     return(
//         <div>
//         <input type="text" value={name.firstName} onChange={(e)=> setName({...name,firstName:e.target.value})}></input>
//         <input type="text" value={name.lastName} onChange={(e)=> setName({...name,lastName:e.target.value})}></input>
//         <h1>This is your firstName:{name.firstName}</h1>
//         <h1>This is your lastName:{name.lastName}</h1>
//         <button onClick={handleEvent}>Add An Item</button>
//         <ul>
//         {item.map(item=>(<li key={item.id}>{item.value}</li>))}
//         </ul>
            
//         </div>
        
//     )
// }
// export default HookPart1;




// // What are the Rules of Hooks?
// // 1.Only call Hooks at the top level. 
// // 2.Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. 


