import React, { useState } from 'react'
import Item from './Item';
import r from './assets/r.jpeg'
import ChatApp from './ChatApp';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
    setIsOpen(!isOpen);
 };

    return (
        <>

        {/* Mobile some nav */}
            <div className="bg-[#202123] flex flex-row md:hidden">
                <button onClick={toggleNavbar}>
                    {isOpen ? 
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-2 ml-2 icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg> : 
                    <svg width="24" height="24" className="icon-md ml-2 mt-2" stroke="#ffffff" viewBox="0 0 24 24" fill="#fffff" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z" fill="currentColor"/>
                    </svg>}
                </button>
                <h1 className='text-white mt-2 ml-[35%]'>New Chat</h1>
                <svg className='ml-[32%] mt-3 inline-block icon-sm shrink-0' stroke="#ffffff" fill="#fffff" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
            </div>
        
        {/* hamburger view */}

            <div className="bg-[#202123] flex flex-row text-white justify-center p-2 md:hidden">
                <div className={`lg:flex ${isOpen ? '' : 'hidden'}`}>
                    <div className="flex flex-row gap-2 p-2">
                        <div>
                            <h3 className="border border-grey rounded-md py-2 px-12">
                                <svg className='items-center inline-block icon-sm shrink-0' stroke="#ffffff" fill="#fffff" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="12" y1="5" x2="12" y2="19"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg> 
                                New Chat
                            </h3>
                        </div>
                        <div className="border border-grey rounded-md py-2 px-4">
                            <svg stroke="#ffffff" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/>
                            </svg>
                        </div>
                    </div> 
                    <h1 className='text-gray md:p-2 md:ml-2 md:text-xs'>Today</h1>
                    <Item/>
                    <h1 className='text-gray md:p-2 md:ml-2 md:text-xs'>Yesterday</h1>
                    <Item/>
                    <hr className="border border-grey md:mt-[20%]" />
                    <ul className='hover:bg-grays md:p-4 md:mt-2 md:hover:rounded-lg md:hover:p-4'>
                        <li className='p-1'>   
                            <a href=''><svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon-sm shrink-0 ml-4 mr-2" width="18" height="18" stroke="#ffffff" fill="#fffff" viewBox="0 0 16 16">
                                <path d="m5.854 5.735.692-2.074a.479.479 0 0 1 .908 0l.692 2.074a3.35 3.35 0 0 0 2.119 2.12l2.074.69a.479.479 0 0 1 0 .91l-2.074.69a3.35 3.35 0 0 0-2.12 2.12l-.691 2.074a.479.479 0 0 1-.908 0l-.692-2.074a3.35 3.35 0 0 0-2.119-2.12l-2.074-.69a.479.479 0 0 1 0-.91l2.074-.69a3.35 3.35 0 0 0 2.12-2.12ZM11.46 2.464l.326-.977a.225.225 0 0 1 .428 0l.325.977c.157.47.527.84.997.997l.977.325a.225.225 0 0 1 0 .428l-.977.325c-.47.157-.84.527-.997.997l-.325.977a.225.225 0 0 1-.428 0l-.325-.977a1.577 1.577 0 0 0-.998-.997l-.976-.325a.225.225 0 0 1 0-.428l.976-.325c.471-.157.84-.527.998-.997Z" fill="currentColor"/>
                            </svg></a> Upgrade plan
                        </li> 
                    </ul>
                    <div className='flex flex-row items-center md:gap-2'>             
                        <img src={r} className='w-8 ml-4 mt-2'/>
                        <h1 className='ml-4'>Rajesh</h1>
                        <svg stroke="#8e8ea0" className="icon-sm gizmo:hidden mt-[1.5%] ml-[40%]" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="1"/>
                            <circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
                        </svg>
                    </div> 
                </div> 
            </div>

        {/* Sidebar */}

            <div className="md:flex md:h-screen">
                <div className="bg-[#202123] hidden md:block md:flex md:flex-col text-white md:w-1/5">
                    <div className="flex flex-row md:gap-2 md:p-2">
                        <div>
                            <h3 className="border border-grey rounded-md md:py-2 md:px-12">
                                <svg className='items-center inline-block icon-sm shrink-0' stroke="#ffffff" fill="#fffff" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="12" y1="5" x2="12" y2="19"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg> 
                                New Chat
                            </h3>
                        </div>
                        <div className="border border-grey rounded-md md:py-2 px-4">
                            <svg stroke="#ffffff" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/>
                            </svg>
                        </div>
                    </div> 
                    <h1 className='text-gray md:p-2 md:ml-2 md:text-xs'>Today</h1>
                    <Item/>
                    <h1 className='text-gray md:p-2 md:ml-2 md:text-xs'>Yesterday</h1>
                    <Item/>
                    <hr className="border border-grey md:mt-[20%]" />
                    <ul className='hover:bg-grays md:p-4 md:mt-2 md:hover:rounded-lg md:hover:p-4'>
                        <li>   
                            <a href=''><svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon-sm shrink-0 md:mr-4" width="18" height="18" stroke="#ffffff" fill="#fffff" viewBox="0 0 16 16">
                                <path d="m5.854 5.735.692-2.074a.479.479 0 0 1 .908 0l.692 2.074a3.35 3.35 0 0 0 2.119 2.12l2.074.69a.479.479 0 0 1 0 .91l-2.074.69a3.35 3.35 0 0 0-2.12 2.12l-.691 2.074a.479.479 0 0 1-.908 0l-.692-2.074a3.35 3.35 0 0 0-2.119-2.12l-2.074-.69a.479.479 0 0 1 0-.91l2.074-.69a3.35 3.35 0 0 0 2.12-2.12ZM11.46 2.464l.326-.977a.225.225 0 0 1 .428 0l.325.977c.157.47.527.84.997.997l.977.325a.225.225 0 0 1 0 .428l-.977.325c-.47.157-.84.527-.997.997l-.325.977a.225.225 0 0 1-.428 0l-.325-.977a1.577 1.577 0 0 0-.998-.997l-.976-.325a.225.225 0 0 1 0-.428l.976-.325c.471-.157.84-.527.998-.997Z" fill="currentColor"/>
                            </svg></a> Upgrade plan
                        </li> 
                    </ul>  
                    <div className='flex flex-row items-center md:gap-2'>             
                        <img src={r} className='md:w-8 md:ml-4 md:mt-2'/>
                        <h1 className=''>Rajesh</h1>
                        <svg stroke="#8e8ea0" className="icon-sm gizmo:hidden md:mt-[1.5%] md:ml-[40%]" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="1"/>
                            <circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
                        </svg>
                    </div>
                </div>

                {/* Main content */}

                <div className="md:w-4/5 w-full p-4 bg-[rgb(52,53,65)] text-black">
                    <div className="bg-[#202123] rounded-md w-[100%] py-[1.5%] px-[1%] md:w-[28%] md:mt-[1%] md:ml-[35%] md:py-[0.4%] md:px-[0.5%]">
                        <div className="flex flex-row">
                            <h3 className='bg-[#40414f] border border-para rounded-md text-white px-[15%] py-[1.5%] md:px-8 md:py-[2.5%]'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block icon-sm transition-colors text-brand-green" viewBox="0 0 16 16" fill="#19c37d" width="16" height="16">
                                    <path d="M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z" fill="#19c37d"/>
                                </svg> GPT-3.5
                            </h3>
                            <h3 className='bg-[#202123] rounded-md text-para mt-[2%] ml-[13%] md:mt-[3.2%] md:ml-[10%]'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block md:mr-2 icon-sm transition-colors group-hover/button:text-brand-purple" viewBox="0 0 16 16" fill="none" width="16" height="16">
                                    <path d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z" fill="#8e8ea0"/>
                                </svg> GPT-4 
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block md:ml-4 icon-sm transition-colors sm:ml-0 group-hover/options:text-gray-500 !text-gray-500 ml-2 group-hover/button:text-brand-purple" viewBox="0 0 24 24" fill="#8e8ea0" width="16" height="16" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd"/>
                                </svg>
                            </h3>
                        </div>                
                    </div>
                    <h1 className='text-head text-center font-bold text-4xl p-[10%] mt-[42%] md:mt-0 md:text-4xl md:p-[9%]'>ChatGPT</h1>
                    <div className="relative mt-[60%] md:mt-[10%] md:ml-[15%]">
                        <div className="w-full md:w-[40%]">
                            <div className="flex border border-para rounded-lg md:flex-row">
                                <div className="md:col-span-1">
                                    <h1 className='text-title font-bold mt-2 ml-2 md:mt-0 md:ml-0 md:p-1 md:text-sm'>Make up a story</h1>
                                    <p className='text-para mt-2 ml-2 md:mt-0 md:ml-0 md:p-1 md:text-sm'>about Sharky, a tooth-brushing shark superhero</p>
                                </div>
                                <div>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm ml-[-90%] mt-9 md:ml-5 md:mt-5" viewBox="0 0 16 16" fill="none" width="16" height="16">
                                            <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="#c5c5d2"/>
                                        </svg>
                                    </a>                                    
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-2 md:mt-0 md:w-[40%] md:absolute md:top-0 md:left-[41%]">
                            <div className="flex border border-para rounded-lg md:flex-row">
                                <div className="md:col-span-1">
                                    <h1 className='text-title font-bold mt-2 ml-2 md:mt-0 md:ml-0 md:p-1 md:text-sm'>Make a content strategy</h1>
                                    <p className='text-para mt-2 ml-2 md:mt-0 md:ml-0 md:p-1 md:text-sm'>for a newsletter weekend events</p>
                                </div>
                                <div>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm ml-[-80%] mt-9 md:ml-28 md:mt-5" viewBox="0 0 16 16" fill="none" width="16" height="16">
                                            <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="#c5c5d2"/>
                                        </svg>
                                    </a>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative hidden md:block md:mt-[1%] md:ml-[15%]">
                        <div className="w-full md:w-[40%]">
                            <div className="flex border border-para rounded-lg md:flex-row ">
                                <div className="md:col-span-1">
                                    <h1 className='text-title font-bold md:p-1 md:text-sm'>Compare design principles</h1>
                                    <p className='text-para md:text-sm md:p-1'> for mobile apps and desktop software</p>
                                </div>
                                <div>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm md:ml-20 md:mt-5" viewBox="0 0 16 16" fill="none" width="16" height="16">
                                            <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="#c5c5d2"/>
                                        </svg>
                                    </a>                                    
                                </div>
                            </div>
                        </div>
                        <div className="w-full hidden md:block md:w-[40%] md:absolute md:top-0 md:left-[41%]">
                            <div className="flex border border-para rounded-lg md:flex-row">
                                <div className="md:col-span-1">
                                    <h1 className='text-title font-bold md:p-1 md:text-sm'>Give me ideas</h1>
                                    <p className='text-para md:p-1 md:text-sm'>about how to plan my New Years resolutions</p>
                                </div>
                                <div>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm md:ml-10 md:mt-5" viewBox="0 0 16 16" fill="none" width="16" height="16">
                                            <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="#c5c5d2"/>
                                        </svg>
                                    </a>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <ChatApp />

            
                    <div className='relative'>
                        <h1 className='text-title text-center mt-2 md:mt-0 md:text-xs md:p-1'>ChatGPT can make mistakes. Consider checking important information.</h1>
                        <h1 className='text-title text-center md:text-xs md:p-1'>Cloned By <a className='underline underline-offset-1 font-bold' href='https://rajeshb.tech/'>RAJESH</a></h1>
                        <a href='' className='bg-[#40414f] hidden md:block rounded-full md:p-2 md:absolute md:top-0 md:left-[96%]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-question-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>  
    );
    
}
export default App