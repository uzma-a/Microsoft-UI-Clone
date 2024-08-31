import React from 'react';

const Main = () => {
    return (
        <div className="relative  w-full h-screen bg-cover bg-center z-0"
            style={{ backgroundImage: `url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-AI-11Ed-Sapphire-MC001-3000x1682:VP4-1399x600")` }}>
            {/* Overlay with opacity */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            {/* Content on top of the overlay */}
            <div className="relative mt-28 z-10 p-6 md:p-20 flex flex-col justify-center items-center md:items-start font-poppins">
                <div className="bg-slate-100 p-8 max-h-fit max-w-2xl bg-opacity-80 z-10">
                    <button className='bg-yellow-400 font-bold text-black p-2 cursor-pointer mt-8'>NEW</button>
                    <h1 className='text-2xl md:text-4xl pt-4 font-bold'>Meet Surface Pro</h1>
                    <p className='pt-8 font-poppins text-lg md:text-xl font-18px'>This laptop's unrivalled flexibility and AI features like Live Captions and Cocreator, enable you to do more than you ever imagined.</p>
                    <button className='bg-blue-600 text-white p-3 font-medium mt-8 cursor-pointer'>Learn More</button>
                </div>
            </div>
        </div>

    );
}

export default Main;
