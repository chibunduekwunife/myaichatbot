import React from 'react'
import styles from '../styles/ChatInput.module.css'
import { useState } from 'react'

//Purpose: Handles user input (e.g., typing a message and sending it).
//Provide a text input field for the user.
//Include a "Send" button to trigger message sending.
//Notify the parent component when a message is sent.

const ChatInput = ({ onSendMessage }) => {

    const [input, setInput] = useState("")

    const handleSend = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput("");
        }
    }


    return (
        <div className={styles.chatInput}>
            <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ask me anything!..."
            />
            <button onClick={handleSend}>Send Message</button>
        </div>
    )
}

export default ChatInput