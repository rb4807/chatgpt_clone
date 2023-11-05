import React, { useState, useEffect } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';

function ChatApp() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const defaultResponse = "Hello I'm just Cloned ChatGPT, Developed by Rajesh. Thank You";

    useEffect(() => {
        if (isTyping) {
        const typingTimeout = setTimeout(() => {
            setMessages((prevMessages) => [
            ...prevMessages,
            { text: defaultResponse, isUser: false },
            ]);
            setIsTyping(false);
        }, 1000);

        return () => clearTimeout(typingTimeout);
        }
    }, [isTyping, defaultResponse]);

    const sendMessage = () => {
        if (inputMessage.trim() === '') return;
        setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, isUser: true },
        ]);
        setInputMessage('');
        setIsTyping(true);
    };

    return (
        <div className="flex flex-col justify-end bg-[rgb(52,53,65)] w-full p-4">
            <div className="p-4 rounded-lg mt-4">
                <MessageInput value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} onSend={sendMessage} />
            </div>
            <div className="p-4">
                <div className="bg-[rgb(49,49,59)] rounded-lg p-4 shadow-lg space-y-4">
                    {messages.map((message, index) => (
                    <Message key={index} text={message.text} isUser={message.isUser} />
                    ))}
                </div>
            </div>
        </div>
      
    );
}

export default ChatApp;
