
function List (){
    const names=[
        {
            id:0,
            name:"anushka",
            skill:"python"
        },
        {
            id:1,
            name:"arushi",
            skill:"angular"
        },
        {
            id:2,
            name:"ansh",
            skill:"html"
        },
        {
            id:3,
            name:"shalini",
            skill:"css"
        },
        {
            id:4,
            name:"arun",
            skill:"javascript"
        },
    ];
    const namelist=names.map(names=><div key={names.id}><h1 >{names.id}{names.name}{names.skill}</h1></div>);
    return(<div>{namelist}</div>);
}
export default List;
//if we do not put keys unique then we will get an warning msg on console of that key must be unique.
