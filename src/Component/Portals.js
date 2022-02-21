import React from 'react';
import ReactDOM from 'react-dom';
function Portals(){
    return ReactDOM.createPortal(
        <h1>Portals</h1>,
        document.getElementById('portal-root')
    )
    // return(
    //     <h1>Portals</h1>
    // )
}
export default Portals;

// Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of 
// the parent component.
// The first argument (child) is any renderable React child, such as an element, string, or fragment. The second
// argument (container) is a DOM element.
