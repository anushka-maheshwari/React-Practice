import useCounter from "./HookPart55a";
function HookPart55b()
{
const [count,increment,decrement,reset]=useCounter();
return(
    <div>
        {count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
)
}
export default HookPart55b;