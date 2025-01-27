import React from 'react'
import styles from '../styles/ChatWindow.module.css'
import ChatMessage from './ChatMessage'

//Purpose: Displays the conversation between the user and the bot.
//Render a list of messages (from chat history).
//Handle scrolling for new messages.

const ChatWindow = ({ messages = [] }) => {

    return (
        <div className={styles.chatWindow}>
            {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg} />
            ))}
        </div>
    )
}

export default ChatWindow