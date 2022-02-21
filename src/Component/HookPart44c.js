import { useContext } from 'react';
import {UserContext} from '../App';
function HookPart44c()
{
    const user=useContext(UserContext);
return(<div>
    {/* <UserContext.Consumer>
        {
            user=>{return <div>hello {user}</div>}
        }
    </UserContext.Consumer> */}
    Hello {user}

</div>)
}
export default HookPart44c;