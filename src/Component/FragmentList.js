import React from 'react';
function FragmentList()
{
    const items=[{
        id:0,
        title:"react"
    },
    {
        id:1,
        title:"java"
    },
    {
        id:2,
        title:"python"
    }
];
return(
    items.map(item=>(<React.Fragment key={item.id}>{item.title}</React.Fragment>))
);
}
export default FragmentList;