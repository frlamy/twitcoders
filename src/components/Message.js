import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../firebase'

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

const Message = ({ message }) => {

    const { user, firebase } = useContext(FirebaseContext)
    const [isLike, setIsLike] = useState(false)

    useEffect(() => {
        if (user) {
            const isLike = message.likes.some(like => like.likeBy.id === user.uid)
            setIsLike(isLike)
        }
    }, [user, message.likes])

    const handleLike = () => {
        setIsLike(prevIsLike => !prevIsLike)
        const likeRef = firebase.db.collection('messages').doc(message.id)
        if (!isLike) {
            const like = {
                likeBy: {
                    id: user.uid,
                    name: user.displayName
                }
            }
            const updateLikes = [...message.likes, like]
            likeRef.update({ likes: updateLikes })
        } else {
            const updateLikes = message.likes.filter(like => like.likeBy.id === user.id)
            likeRef.update({ likes: updateLikes })
        }
    }

    const handleDeleteMessage = () => {
        const messageRef = firebase.db.collection('messages').doc(message.id)
        messageRef.delete()
    }

    const isOwner = user && user.uid === message.postedBy.id

    return (
        <div className='message-container'>
            <div>
                <img
                    src={message.picture}
                    alt='Profil'
                    className='profil-picture' />
            </div>
            <div className="message">
                <header>
                    <h3>{message.postedBy.name} · </h3>
                    <span>{formatDistanceToNow(message.createdAt, { locale: fr })} </span>
                </header>
                <p>{message.message}</p>
                {user && <footer>
                    <IconContainer color='blue'>
                        <FiMessageCircle />
                    </IconContainer>
                    <IconContainer color="blue">
                        <FiRefreshCw />
                    </IconContainer>
                    <IconContainer
                        onClick={handleLike}
                        color="red"
                        count={message.likes.length}
                        isLike={isLike}>
                        <FiHeart />
                    </IconContainer>
                    <IconContainer color="green">
                        <FiUpload />
                    </IconContainer>
                    {isOwner && (<IconContainer color="red" onClick={handleDeleteMessage}>
                        <FiX />
                    </IconContainer>)}
                </footer>}
            </div>
        </div>
    )
}

export default Message