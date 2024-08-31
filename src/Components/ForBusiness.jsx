import React from 'react';

const ForBusiness = () => {
  return (
    <div className='business mt-6 p-6 md:p-12 lg:p-20'>
      <h1 className='text-3xl md:text-3xl lg:text-4xl font-medium text-center'>For business</h1>
      <div className='card_box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
        <div className="card flex flex-col h-full rounded-sm shadow-xl bg-white bg-opacity-75">
          <img className='bg-cover w-full h-48 md:h-56 lg:h-64 rounded-t-sm' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=297&hei=167&fit=crop" />
          <div className="headings flex flex-col p-6 flex-grow">
            <h1 className='text-lg md:text-xl lg:text-2xl font-medium'>Surface for Business</h1>
            <p className='mt-2 flex-grow'>No matter what you do, there is a Surface to help you do it.</p>
            <button className='bg-blue-700 text-white p-2 md:p-3 lg:p-4 rounded-sm mt-4 md:mt-8 lg:mt-12 font-medium'>Shop Now</button>
          </div>
        </div>

        <div className="card flex flex-col h-full rounded-sm shadow-xl bg-white bg-opacity-75">
          <img className='bg-cover w-full h-48 md:h-56 lg:h-64 rounded-t-sm' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=297&hei=167&fit=crop" />
          <div className="headings flex flex-col p-6 flex-grow">
            <h1 className='text-lg md:text-xl lg:text-2xl font-medium'>Get Microsoft Teams for free</h1>
            <p className='mt-2 flex-grow'>Online meetings, chat and shared cloud storage – all in one place.</p>
            <button className='bg-blue-700 text-white p-2 md:p-3 lg:p-4 rounded-sm mt-4 md:mt-8 lg:mt-12 font-medium'>Sign up for free</button>
          </div>
        </div>

        <div className="card flex flex-col h-full rounded-sm shadow-xl bg-white bg-opacity-75">
          <img className='bg-cover w-full h-48 md:h-56 lg:h-64 rounded-t-sm' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-Teams-Commercial-Meeting?wid=297&hei=167&fit=crop" />
          <div className="headings flex flex-col p-6 flex-grow">
            <h1 className='text-lg md:text-xl lg:text-2xl font-medium'>Get Microsoft Teams for your business</h1>
            <p className='mt-2 flex-grow'>Online meetings, chat, real-time collaboration, and shared cloud storage – all in one place.</p>
            <button className='bg-blue-700 text-white p-2 md:p-3 lg:p-4 rounded-sm mt-4 md:mt-8 lg:mt-12 font-medium'>Find the right plan for your business</button>
          </div>
        </div>

        <div className="card flex flex-col h-full rounded-sm shadow-xl bg-white bg-opacity-75">
          <img className='bg-cover w-full h-48 md:h-56 lg:h-64 rounded-t-sm' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Copilot-Commercial?wid=297&hei=167&fit=crop" />
          <div className="headings flex flex-col p-6 flex-grow">
            <h1 className='text-lg md:text-xl lg:text-2xl font-medium'>Copilot for Microsoft 365</h1>
            <p className='mt-2 flex-grow'>Save time and focus on the things that matter most with AI in Microsoft 365 for business.</p>
            <button className='bg-blue-700 text-white p-2 md:p-3 lg:p-4 rounded-sm mt-4 md:mt-8 lg:mt-12 font-medium'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForBusiness;
