import React, { useContext } from 'react'
import { FirebaseContext } from '../firebase'
import { FaFacebookF } from 'react-icons/fa'

const Header = () => {
    const { user, firebase } = useContext(FirebaseContext)
    return (
        <div className='header'>
            <h1 className='header-title'>Chatbox</h1>
            {user ?
                (<button
                    onClick={() => firebase.logout()}
                    className="login-btn"
                    type="button">

                    <FaFacebookF />

                    Logout

                </button>
                ) : (<button
                    onClick={() => firebase.login('facebook')}
                    className="login-btn"
                    type="button">

                    <FaFacebookF />

                    Login

                </button>)
            }
        </div>

    )
}

export default Header