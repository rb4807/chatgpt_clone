import React from 'react';

function MessageInput({ value, onChange, onSend }) {
    return (
        <div className="flex items-center justify-center mt-3">
            <div className="mx-auto w-full bg-[#40414f] flex flex-row rounded-lg shadow-lg p-3 md:p-2 md:mx-[15%]">
                <input type="text" placeholder="Send a message" className="w-full bg-[#40414f] text-white outline-none placeholder-gray-500" value={value} onChange={onChange}/>
                <button className=" text-white rounded-full md:ml-2 md:p-1" onClick={onSend}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm inline-block md:ml-6" viewBox="0 0 16 16" fill="none" width="16" height="16">
                        <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="#c5c5d2"/>
                    </svg>
                </button>
            </div>        
        </div>
    );
}

export default MessageInput;