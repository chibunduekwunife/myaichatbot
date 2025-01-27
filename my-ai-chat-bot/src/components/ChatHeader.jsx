import React from 'react'
import styles from '../styles/ChatHeader.module.css'

//Purpose: Displays the chatbot's name, avatar, or status (e.g., "Online").
//Display branding or bot identity.
//Optionally show connection status or additional buttons (e.g., settings, clear chat).

const ChatHeader = () => {

    return (
        <header className={styles.chatHeader}>
            <h1>Heart.AI | My Health Companion</h1>
            <p className={styles.status}>Status: Online</p>
        </header>
    )
}

export default ChatHeader