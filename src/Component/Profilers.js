import React,{Profiler} from 'react';
import Profilers2 from './Profilers2';
class Profilers extends React.Component{
    callBackFunction=(id,phase,actualDuration,baseDuration,startTime,commitTime,interactions)=>
    {
        console.log("id is: "+id,"phase is: "+phase,"actualduration is : "+actualDuration,"baseduration is: "+baseDuration,
        "starttime is: "+startTime,"committime is :"+commitTime,"intercations is: "+interactions);
    }
    render()
    {
        return(
            <React.Fragment>
            <h1>profilers</h1>
            <Profiler id="checking-profiler" onRender={this.callBackFunction}>
            <Profilers2/>
            </Profiler>
            </React.Fragment>
            
        )
    }

}
export default Profilers;

//what are profilers?
// The Profiler measures how often a React application renders and what the “cost” of rendering is. 
// Its purpose is to help identify parts of an application that are slow and may benefit from optimizations 
// such as memoization.
// A Profiler can be added anywhere in a React tree to measure the cost of rendering that part of the tree.
// It requires two props: an id (string) and an onRender callback (function) which React calls any time a component 
// within the tree “commits” an update.

// The Profiler requires an onRender function as a prop. React calls this function any time a component 
// within the profiled tree “commits” an update. It receives parameters describing what was rendered and how long it took.
// arguments are:id,phase,actualDuration,baseDuration,startTime,commitTime,interactions