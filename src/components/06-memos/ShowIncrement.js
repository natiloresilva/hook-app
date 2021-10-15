import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log('jeje');
    return (
        <button
            className='btn btn-outline-info'
            onClick={ () => {
                increment( 5 )
            }}
        > Incrementar </button>
    )
})
