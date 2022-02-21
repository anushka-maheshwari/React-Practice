//context provides a way to pass data trough the component tree

import HookPart44b from "./HookPart44b";

// without having to pass props down manually at every level 
//useContext hook basically simplifies the method of consuming the contexts.
function HookPart44a(){

    return(
        <div>
            <HookPart44b/>
        </div>
    )
}
export default HookPart44a;