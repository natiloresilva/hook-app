import React, { useState } from 'react'
import './effects.css'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    })

    const { name, email } = formState



    // useEffect(() => {
    //    console.log('Se dispara sólo una vez')
    // }, [])



    // useEffect(() => {
    //    console.log('Se dispara cuando hay cambios en el formulario')
    // }, [formState])



    // useEffect(() => {
    //    console.log('se dispara cuando hay cambios en el email')
    // }, [email])



    const handleInputChange = ({target}) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input 
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={ handleInputChange }
                />
            </div>

            <div className='form-group'>
                <input 
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@email.com'
                    autoComplete='off'
                    value={email}
                    onChange={ handleInputChange }
                />
            </div>

            {(name === 'nati') && <Message />}
        </>
    )
}
