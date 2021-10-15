import React from 'react'

export const Small = React.memo(({value}) => {

    //Sólo se vuelve a renderizar si el value cambió
    
    return (
       <small>{value}</small>
    )
})
