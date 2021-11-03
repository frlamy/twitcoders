import React, { useState, useEffect } from 'react'

const useForm = (initialState, validate, next) => {

    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        if (isSubmitted) {
            const isErrors = Object.keys(errors).length !== 0
            console.log(isErrors)
            console.log(errors);
            if (isErrors) {
                setIsSubmitted(false)
            } else {
                next()
                setIsSubmitted(true)
                setValues(initialState)
            }
            setIsSubmitted(false)
        }
    }, [errors, next, isSubmitted, initialState])

    const handleChange = event => {
        event.persist()
        setValues(prevValues => ({
            ...prevValues,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault()
        const errors = validate(values)
        setErrors(errors)
        setIsSubmitted(true)
    }

    const handleKeyDown = event => {
        if (event.keyCode === 13 && event.ctrlKey) {
            event.preventDefault()
            const errors = validate(values)
            setErrors(errors)
            setIsSubmitted(true)
        }
    }

    return { handleSubmit, handleKeyDown, handleChange, values, errors }
}

export default useForm