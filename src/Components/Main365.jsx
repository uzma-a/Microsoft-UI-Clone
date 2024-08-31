import React from 'react';

const Main365 = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-white p-4 md:p-10 lg:p-20 font-poppins relative w-full h-screen bg-cover bg-center mt-0 mid:mt-28" 
         style={{backgroundImage: `url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-Backgroundimage-1600x680?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1600&qlt=100&fit=constrain")`}}>
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold text-gray-700 mb-4 text-center">
        Microsoft 365 Home Page
      </h1>
      <p className="text-sm mt-4 sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl text-center mb-8 sm:mb-12 lg:mb-16 mx-auto">
        Experience the full power of Microsoft 365 apps for free. Utilize AI to ask any questions you may have and make the most out of your Microsoft 365 experience.
      </p>
    </div>
  );
};

export default Main365;
