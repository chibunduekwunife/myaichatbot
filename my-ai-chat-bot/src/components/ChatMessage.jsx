import React from 'react'
import style from '../styles/ChatMessage.module.css'

//Purpose: Represents an individual message in the chat.
//Display a single message with styling to differentiate between user and bot messages.

const ChatMessage = ({ message = { text: '', sender: ''}}) => {

    return (
        <div className={`${style.chatMessage} ${message.sender}`}>
            <p>{ message.text }</p>
        </div>
    )
}

export default ChatMessage