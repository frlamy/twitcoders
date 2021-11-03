import React from 'react'

const MessageForm = ({ handleSubmit, handleKeyDown, handleChange, values, errors, user }) => {

    return (
        <form onSubmit={handleSubmit} className='message-form-container'>
            <div className="message-form">
                <div>
                    <img
                        className="profil-picture"
                        src={user.photoURL}
                        alt="Profil" />
                </div>
                <textarea
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={values.message}
                    name="message"
                    placeholder="Hello World" />
            </div>
            {
                errors.message && <p className='error-text'>{errors.message}</p>
            }
            <footer>
                <p>{280 - values.message.length}</p>
                <button type="submit" disabled={values.message.length === 0 || values.message.length > 280}>Tweeter</button>
            </footer>
        </form>
    )
}

export default MessageForm