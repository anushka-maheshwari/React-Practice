import React from "react";
import ClassRefs from "./ClassRefs";
import FunctionRef from "./FunctionRef";
class ClassRefs2 extends React.Component{
    constructor()
    {
        super()
        this.classRef=React.createRef();
        this.funRef=React.createRef();
        this.clickHandler=this.clickHandler.bind(this);
    }
    componentDidMount()
    {
        console.log(this.classRef);
        //--->{current: ClassRefs}
        //cbRef: input
        // context: {}
        // inputRef: {current: input}
        // props: {}
        // refs: {}
        // setCbRef: element => { this.cbRef = element; }
        // state: null
        // updater: {isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ}
        // _reactInternalInstance: {_processChildContext: ƒ}
        // _reactInternals: FiberNode {tag: 1, key: null, stateNode: ClassRefs, elementType: ƒ, type: ƒ, …}
        // isMounted: (...)
        // replaceState: (...)
        // [[Prototype]]: Component
        // [[Prototype]]: Object
    }
    clickHandler()
    {
        this.funRef.current.focus();
    }
render()
{
    return(
        <div>
        <ClassRefs ref={this.classRef}/>
        <FunctionRef ref={this.funRef}/>
        <button onClick={this.clickHandler}>focus</button>
        </div>
       
    )
}
}
export default ClassRefs2;

//this is how we can provide refrence to a complete component