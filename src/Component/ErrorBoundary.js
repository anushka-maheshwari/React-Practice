import React from 'react';
class ErrorBoundary extends React.Component{
    constructor()
    {
        super()
        this.state={hasError:false}
    }
    static getDerivedStateFromError(error)
    {
        return{
            hasError:true
        }    
    }
        render()
        {
            if(this.state.hasError)
            {
                return(<h1>something went wrong</h1>)
            }
            return this.props.children;
        }
}
export default ErrorBoundary;

// what is error boundaries?
// Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, 
// log those errors, and display a fallback UI instead of the component tree that crashed. 
// Error boundaries catch errors during rendering,in lifecycle methods, and in constructors of the whole tree below them.

// A class component becomes an error boundary if it defines either (or both) of the lifecycle methods 
// static getDerivedStateFromError() or componentDidCatch(). Use static getDerivedStateFromError() to render a 
// fallback UI after an error has been thrown. Use componentDidCatch() to log error information.

// Error boundaries work like a JavaScript catch {} block, but for components. Only class components can be error boundaries.

// React 16 prints all errors that occurred during rendering to the console in development, even if the application accidentally 
// swallows them. In addition to the error message and the JavaScript stack, it also provides component stack traces.
