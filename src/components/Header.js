import React from 'react'
import { FaFacebookF } from 'react-icons/fa'

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header-title'>Chatbox</h1>
            <button className="login-btn" type="button">
                <FaFacebookF />
                Connexion</button>
        </div>

    )
}

export default Header