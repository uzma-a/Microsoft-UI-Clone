

import React from 'react';

const XboxGame = () => {
  return (
    <div className='game relative max-w-screen-2xl m-auto min-h-screen bg-cover bg-center mb-12' style={{ backgroundImage: `url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-AEM-Game-Pass-Ultimate:VP4-1260x600"})` }}>
      <div className="absolute inset-0 p-6 sm:p-12 md:p-20 lg:p-28 text-white flex items-center ">
        <div className="max-w-full md:max-w-lg bg-zinc-900 p-4 md:p-6 lg:p-8 rounded">
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>Xbox Game Pass Ultimate</h1>
          <p className='mt-4 sm:mt-6 text-sm sm:text-base md:text-lg'>Play new games on day one. Plus, enjoy hundreds of high-quality games with friends on console and PC.</p>
          <button className='bg-blue-700 mt-8 sm:mt-12 md:mt-16 p-2 sm:p-3 md:p-4 text-sm sm:text-lg md:text-xl rounded-sm hover:bg-blue-800'>Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default XboxGame;
