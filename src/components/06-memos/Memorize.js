import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { useCounter } from "../../hooks/useCounter";
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <>
            <h1> Memorize </h1>
            <hr/>

            <h2>Counter: <Small value={ counter }/></h2>

            <button 
                className='btn btn-outline-info'
                onClick={()=> increment()}
            > 
                +1
            </button>


            <button 
                className='btn btn-outline-info m-4'
                onClick={ () => {
                    setShow(!show)
                }}
            >
                Show / Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
