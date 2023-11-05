import React from 'react';

function Message({ text, isUser }) {
  const messageClass = isUser
    ? 'bg-[rgb(52,53,65)] w-full text-white font-bold'
    : 'bg-[rgb(49,49,59)] text-white';

    return (
        <div className={`p-3 rounded ${messageClass}`}>
            {text}
        </div>
    );
}

export default Message;
