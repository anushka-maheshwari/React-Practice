function FunctionEvent()
{
   function handleEvent(){
      console.log("button is clicked");
   }
   function handleEvent1(){
      console.log("button is already  clicked");
   }
   function handleEvent2(e)
   {
       e.preventDefault();//Here, e is a synthetic event.
       console.log("form is submited");
   }
   return(
      <div>
         <button onClick={handleEvent}>Click</button>
         <button onClick={handleEvent1()}>Click Me</button>
         <button onClick="handleEvent1()">Click Me Once </button>
         <form onSubmit={handleEvent2}>
             <lable>NAME</lable>
             <input type="text"></input>
             <button type="submit">submit</button>
         </form>
      </div>
   );
}
export default FunctionEvent;
// 1.In React events are named as camelCase instead of lowercase.
//in the first case  we are passing a function as a event handler.
//in the second case we are passing a function as a function call.
//in third case we will got an error Uncaught Error: Expected `onClick` listener to be a function, instead got a value of `string` type.
// With JSX, a function is passed as the event handler instead of a string. 
//In react, we cannot return false to prevent the default behavior. We must call preventDefault event explicitly to prevent the default behavior. 