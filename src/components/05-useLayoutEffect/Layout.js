import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {

    const {counter, increment, reset} = useCounter(1)
    counter === 31 && reset()

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
  
    const { quote } = !!data && data[0]
   
    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
       
       setBoxSize(pTag.current.getBoundingClientRect())

    }, [quote])

    return (
        <>
            <h1>Layout Effect</h1>
            <hr/>

                <blockquote className='blockquote text-end'>
                    <p ref={ pTag }> {quote} </p>
                </blockquote>

                <pre> {JSON.stringify(boxSize, null, 3)} </pre>

           <button 
            className='btn btn-outline-info'
            onClick={() => increment()}
            >
             Next quote
            </button>

        </>
    )
}