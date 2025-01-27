import React from 'react'
import styles from '../styles/ChatMessage.module.css'

//Purpose: Represents an individual message in the chat.
//Display a single message with styling to differentiate between user and bot messages.

const ChatMessage = ({ message = { text: '', sender: ''}}) => {

    return (
        <div className={styles.chatContainer}>
            <div className={`${styles.chatMessage} ${message.sender === 'HeartAI: ' ? styles.botMessage : styles.senderMessage}`} >
                <p>
                    <strong>{ message.sender }</strong>
                    &nbsp;
                    { message.text }
                </p>
            </div>
        </div>
    )
}

export default ChatMessage