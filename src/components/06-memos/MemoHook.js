import React, { useMemo, useState } from 'react'
import { useCounter } from "../../hooks/useCounter"
import { procesoPesado } from '../../helpers/procesoPesado'
import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const {counter, increment} = useCounter(1000)
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <>
            <h1> MemoHook </h1>
            <hr/>

            <h2>Counter: <small>{ counter }</small></h2>

            <p>{memoProcesoPesado}</p>

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
