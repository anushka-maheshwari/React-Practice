import React from 'react';
class ClassRefs extends React.Component{
    constructor()
    {
        super()
        this.inputRef=React.createRef();
        this.cbRef=null;
        this.setCbRef=(element)=>{
            this.cbRef=element;
        }
    }
    componentDidMount()
    {
        if(this.cbRef)
        {
            console.log(this.cbRef)//---><input>
            this.cbRef.focus();
        }
        console.log(this.inputRef)//--->{current:input}
        this.inputRef.current.focus();
    }
    render()
    {
        return(
            <div>
            <input ref={this.inputRef}></input>
            <input ref={this.setCbRef}></input>
            </div>
           
        )
    }
}
export default ClassRefs;

//we can provide reference to a element so that we can use it anytime anywhere 

//we have two possible approaches for creating refs : 
// one has three steps
// 1.create a ref in constructor using react.createRef
// 2.assign the ref to the element3.by using that refrence we can perform different actions to that element

// second one has four steps(callback ref)
// 1.create a variable in constructor with null assign getValue
// 2.set that variable with one element in constructor
// 3.assign the setref to the element
// 4.then perform actions directly using that ref


// what are react refs?
// Refs is the shorthand used for references in React. 
// It provides a way to access React DOM nodes or React elements and how to interact with it. It is used when we want to change the value of a child component, without making the use of props.

// When to Use Refs:
// When we need DOM measurements such as managing focus, text selection, or media playback.
// It is used in triggering imperative animations.
// When integrating with third-party DOM libraries.
// It can also use as in callbacks.

// In React, Refs can be created by using React.createRef(). It can be assigned to React elements via the ref attribute. It is commonly assigned to an instance property when a component is created, and then can be referenced throughout the component.
// In React, when a ref is passed to an element inside render method, a reference to the node can be accessed via the current attribute of the ref.

// Refs current Properties:
// When the ref attribute is used in HTML element, the ref created with React.createRef() receives the underlying DOM element as its current property.
// If the ref attribute is used on a custom class component, then ref object receives the mounted instance of the component as its current property.
// The ref attribute cannot be used on function components because they don't have instances.

// Callback refs:
// In react, there is another way to use refs that is called "callback refs" and it gives more control when the refs are set and unset. Instead of creating refs by createRef() method, React allows a way to create refs by passing a callback function to the ref attribute of a component. 
// The callback function is used to store a reference to the DOM node in an instance property and can be accessed elsewhere. 
// React will call the "ref" callback to store the reference to the input DOM element when the component mounts, and when the component unmounts, call it with null. Refs are always up-to-date before the componentDidMount or componentDidUpdate fires. The callback refs pass between components is the same as you can work with object refs, which is created with React.createRef().

// Forwarding Ref from one component to another component:
// Ref forwarding is a technique that is used for passing a ref through a component to one of its child components. It can be performed by making use of the React.forwardRef() method. This technique is particularly useful with higher-order components and specially used in reusable component libraries. 

// Add Ref to Class components:
// we are adding a ref to store the reference to a class component.

// React with useRef():
// The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 

