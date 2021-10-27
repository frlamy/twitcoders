import React from 'react'
import MessageForm from './MessageForm'
import useForm from './../hooks/useForm';
import validateMessage from './../utils/validateMessage';

const INITIAL_STATE = {
    message: ''
}

const CreateMessage = () => {
    const handleCreateMessage = () => {
        const { message } = values
        const newMessage = {
            message,
            postedBy: {
                id: '1234',
                name: 'Franck'
            },
            likes: [],
            createdAt: Date.now(),
            picture: 'https://picsum.photos/200/200.webp'
        }
        console.log(newMessage)
    }

    const {
        handleSubmit,
        handleKeyDown,
        handleChange,
        values,
        errors
    } = useForm(INITIAL_STATE, validateMessage, handleCreateMessage)

    return <MessageForm
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
        values={values}
        errors={errors} />
}

export default CreateMessage