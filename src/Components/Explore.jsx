import React from 'react';

const Explore = () => {
    return (
        <div className='explore flex flex-wrap items-center justify-center gap-8 mt-28 mb-16'>
            <div className="options flex flex-col justify-center items-center cursor-pointer w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72">
                <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40" height={50} width={50} alt="Choose your Microsoft 365" />
                <p className='mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-900 underline underline-offset-6 decoration-2 text-center'>Choose your Microsoft 365</p>
            </div>
            <div className="options flex flex-col justify-center items-center cursor-pointer w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72">
                <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40" height={50} width={50} alt="Shop Xbox" />
                <p className='mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-900 underline underline-offset-6 decoration-2 text-center'>Shop Xbox</p>
            </div>
            <div className="options flex flex-col justify-center items-center cursor-pointer w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72">
                <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40" height={50} width={50} alt="Get Windows 11" />
                <p className='mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-900 underline underline-offset-6 decoration-2 text-center'>Get Windows 11</p>
            </div>
            <div className="options flex flex-col justify-center items-center cursor-pointer w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72">
                <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40" height={50} width={50} alt="Explore Surface devices" />
                <p className='mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-900 underline underline-offset-6 decoration-2 text-center'>Explore Surface devices</p>
            </div>
        </div>
    );
}

export default Explore;
