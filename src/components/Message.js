import React from 'react'
import {
    FiHeart,
    FiX,
    FiMessageCircle,
    FiUpload,
    FiRefreshCw
} from 'react-icons/fi'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import IconContainer from './IconContainer';

const Message = () => {
    return (
        <div className='message-container'>
            <div>
                <img
                    src='https://picsum.photos/200/200.webp'
                    alt='Profil Picture'
                    className='profil-picture' />
            </div>
            <div className="message">
                <header>
                    <h3>Franck · </h3>
                    <span>{formatDistanceToNow(1635242148202, { locale: fr })} </span>
                </header>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quidem saepe pariatur distinctio error ex.</p>
                <footer>
                    <IconContainer color='blue'>
                        <FiMessageCircle />
                    </IconContainer>
                    <IconContainer color="red" count="5">
                        <FiHeart />
                    </IconContainer>
                    <IconContainer color="green">
                        <FiUpload />
                    </IconContainer>
                    <IconContainer color="blue">
                        <FiRefreshCw />
                    </IconContainer>
                    <IconContainer color="red">
                        <FiX />
                    </IconContainer>
                </footer>
            </div>
        </div>
    )
}

export default Message