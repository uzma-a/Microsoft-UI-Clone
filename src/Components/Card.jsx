import React from 'react';

const Card = () => {
    return (
        <div className='card_box relative flex flex-wrap items-center justify-center gap-8 mb-10 p-4 md:p-8 lg:p-20 mt-28'>
            <div className="card h-auto w-full md:w-96 rounded-sm shadow-xl bg-white bg-opacity-75">
                <img className='bg-cover w-full p-4 rounded-sm' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-Copilot-App-3screens?wid=297&hei=167&fit=crop" alt="Microsoft Copilot" />
                <div className="headings flex flex-col p-6">
                    <h1 className='text-lg md:text-2xl lg:text-3xl font-medium'>Unlock your potential with Microsoft Copilot</h1>
                    <p className='mt-2 mb-8 text-sm md:text-base'>Get things done faster and unleash your creativity with the power of AI anywhere you go.</p>
                    <button className='bg-blue-700 text-white p-3 md:p-4 rounded-sm mt-4 md:mt-16 font-medium'>Download the Copilot App</button>
                </div>
            </div>

            <div className="card h-auto w-full md:w-96 rounded-sm shadow-lg bg-white bg-opacity-75">
                <img className='bg-cover w-full p-4 rounded-sm' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=297&hei=167&fit=crop" alt="Microsoft 365" />
                <div className="headings flex flex-col p-6">
                    <h1 className='text-lg md:text-2xl lg:text-3xl font-medium'>Maximize the everyday with Microsoft 365</h1>
                    <p className='mt-2 text-sm md:text-base'>Get online protection, secure cloud storage, and innovative apps designed to fit your needs–all in one plan.</p>
                    <div className="btn flex flex-col p-1 mt-4">
                        <button className='bg-blue-700 text-white p-2 md:p-3 rounded-sm mt-1 font-medium w-fit'>For one person</button>
                        <div className="plans flex items-center gap-4 mt-4 text-blue-700 cursor-pointer">
                            <p className='font-semibold text-base md:text-lg'>For up to six people</p>
                            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card h-auto w-full md:w-96 rounded-sm shadow-lg bg-white bg-opacity-75">
                <img className='bg-cover w-full p-4 rounded-sm' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=297&hei=167&fit=crop" alt="Xbox Series X" />
                <div className="headings flex flex-col p-6">
                    <h1 className='text-lg md:text-2xl lg:text-3xl font-medium'>Xbox Series X</h1>
                    <p className='mt-2 text-sm md:text-base'>The fastest, most powerful Xbox ever.</p>
                    <button className='bg-blue-700 text-white p-3 md:p-4 rounded-sm font-medium mt-4 md:mt-48'>Shop Xbox Series X</button>
                </div>
            </div>

            <div className="card h-auto w-full md:w-96 rounded-sm shadow-lg bg-white bg-opacity-75">
                <img className='bg-cover w-full p-4 rounded-sm' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=297&hei=167&fit=crop" alt="Xbox Series S" />
                <div className="headings flex flex-col p-6">
                    <h1 className='text-lg md:text-2xl lg:text-3xl font-medium'>Xbox Series S</h1>
                    <p className='mt-2 text-sm md:text-base'>Next-gen performance in the smallest Xbox ever.</p>
                    <button className='bg-blue-700 text-white p-3 md:p-4 rounded-sm mt-4 md:mt-40 font-medium'>Shop Xbox Series S</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
