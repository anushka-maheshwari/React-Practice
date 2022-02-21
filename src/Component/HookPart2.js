// //useEffect:
// // the effect hooks let us perform side effects in functional component
// // it is a closer replacement for componentDidMount ,componentDidUpdate and componentWillUnmount.


// //here we are creating a counter and defining componentdidmount and componentdidupdate without using hooks 
// // in a class compoenent

// import React from 'react';
// class HookPart2 extends React.Component{
//     constructor(props)
//     {
//         super(props)
//         this.state={
//             count:0
//         }
//     }
//     componentDidMount()
//     {
//         console.log("componentDidMount");
//     }
//     componentDidUpdate()
//     {
//         console.log("componentDidUpdate");
       
//     }
//     render()
//     {
//         return(<div>
//             <button onClick={()=>this.setState({count:this.state.count+1})}>Click {this.state.count} Times</button></div>)
//     }

// }
// export default HookPart2;


// //here we are using useEffect for doing the same work as we do in class component
// //by using useEffect basically we are telling react that to call the argument(a callback function ) of useEffect function every times a 
// // component renders.
// //similar to useState ,useEffect also defines inside the component.

// import React,{useState,useEffect} from 'react';
// function HookPart2()
// {
//     const[count,setCount]=useState(0);
//     const[name,setName]=useState('');
//     function handleEvent()
//     {
//         setCount(count=>count+1);
//     }
//     useEffect(()=>{
//         console.log("useEffect calling")
//         return ()=>{
//             console.log("component will unmount");
//         }
//     },[count]);
//     //in an array we can pass a prop or state that we want to watch and want to execute effect only when prop or state value changes
//     //this is also known as conditionally run effects.
//     //in case if we want to run the effects only once(for componentDidMount )(wants to mimic componentDidUpdate) then we can pass an empty array only
//     //in case if you want to execute something during componentWillUnmout then in useeffect we have to pass that in return statement 
//     return(
//         <div>
//             <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
//             <button onClick={handleEvent}>Click{count}Times</button>
//         </div>
//     )

// }
// export default HookPart2;



// //fetching data using useEffect and axios library.
// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// function HookPart33 ()
// {
//     const[posts,setPosts]=useState([]);
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res=>{setPosts(res.data)})
//         .catch(err=>{console.log(err)})
//     },[])
//     return(
//         <div>
//             <ul>
//                {posts.map(post=>(<li key={post.id}>{post.title}</li>))} 
//             </ul>
//         </div>
//     )
// }
// export default HookPart33;
