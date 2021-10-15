import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const {counter, increment, reset} = useCounter(1)
    counter === 31 && reset()

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
  
    const {author, quote} = !!data && data[0]
    // La data en un primer momento viene null, entonces ===> !! data (!!null) nos retorna FALSE, por lo tanto no va a continuar. 
    //En ese caso author y quotes tendrán el valor de undefined
   
    return (
        <>
            <h1>Breaking Bad Quotes {counter}</h1>
            <hr/>

            {
                loading 
            ?
                (
                 <div className='alert alert-info text-center'>
                    Loading...
                </div>
                )
            :
                (
                <blockquote className='blockquote text-end'>
                    <p> {quote} </p>
                    <footer className='blockquote-footer'> {author} </footer>
                </blockquote>
                )
            }
           <button 
            className='btn btn-outline-info'
            onClick={() => increment()}
            >
             Next quote
            </button>

        </>
    )
}
