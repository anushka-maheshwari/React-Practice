import React from "react";

function FunctionFragments()
{
    return(
       <React.Fragment>
            <h1>hello</h1>
            <p>how are you</p>
       </React.Fragment>
          
    )
}
export default FunctionFragments;

//Fragments let you group a list of children without adding extra nodes to the DOM.
// Fragments declared with the explicit <React.Fragment> syntax may have keys.
// key is the only attribute that can be passed to Fragment
// You can use <></> the same way you’d use any other element except that it doesn’t support keys or attributes.


// what are react fragment?
// In React, whenever you want to render something on the screen, you need to use a render method inside the component. 
// The render method will only render a single root node inside it at a time. However, if you want to return multiple elements, the render method will require a 'div' tag and put the entire content or elements inside it. This extra node to the DOM sometimes results in the wrong formatting of your HTML output and also not loved by the many developers.
// To solve this problem, React introduced Fragments from the 16.2 and above version. Fragments allow you to group a list of children without adding extra nodes to the DOM.

// Advantages of react fragment?
// The main reason to use Fragments tag is:
// It makes the execution of code faster as compared to the div tag.
// It takes less memory.
// There is also another shorthand exists for declaring fragments for the above method. It looks like empty tag in which we can use of '<>' and '' instead of the 'React.Fragment'.
// The shorthand syntax does not accept key attributes. You need a key for mapping a collection to an array of fragments such as to create a description list. If you need to provide keys, you have to declare the fragments with the explicit <React.Fragment> syntax.

