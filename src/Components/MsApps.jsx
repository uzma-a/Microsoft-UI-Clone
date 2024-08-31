import React from 'react';
import './styles.css';
import word from '../assets/ms-word.png'
import excel from '../assets/ms-excel.png'
import powerpoint from '../assets/ms-powerpoint.png'

const MsApps = () => {
  return (
    <div className='flex bg-gray-800 '>
      <div className="flex flex-col justify-center min-h-screen p-4 md:p-10 lg:p-20 gap-12 bg-gray-800">
        <div className="box flex flex-col items-center justify-center rounded-md w-full md:w-[70vw] lg:w-[60vw] xl:w-[50vw] h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[55vh] bg-white shadow-lg">
          <div className="box-content text-black p-6 md:p-8 lg:p-10 ">
            <h1 className="text-2xl md:text-3xl  lg:text-4xl font-semibold flex items-center gap-4 ">Microsoft Word  |  <img src={word} alt="Word" className="h-14" /></h1>
            <p className="mt-2 md:mt-4 text-base md:text-lg lg:text-xl">
              Experience the power of professional document creation with Microsoft Word. Whether you're drafting a resume, writing a report, or crafting a letter, Word offers intuitive tools and sleek templates to make your work stand out.
            </p>
          </div>
        </div>

        <div className="box flex flex-col items-center justify-center rounded-md w-full md:w-[70vw] lg:w-[60vw] xl:w-[50vw] h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[55vh] bg-white shadow-lg">
          <div className="box-content text-black p-6 md:p-8 lg:p-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold flex items-center gap-4 ">Microsoft Excel  |  <img src={excel} alt="Excel" className="h-14" /></h1>
            <p className="mt-2 md:mt-4 text-base md:text-lg lg:text-xl">
              Unlock the potential of data analysis with Microsoft Excel. From simple spreadsheets to complex data models, Excel's powerful features help you organize, visualize, and make sense of your data with ease.
            </p>
          </div>
        </div>

        <div className="box flex flex-col items-center justify-center rounded-md w-full md:w-[70vw] lg:w-[60vw] xl:w-[50vw] h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[55vh] bg-white shadow-lg">
          <div className="box-content text-black p-6 md:p-8 lg:p-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold flex items-center gap-4 ">Microsoft PowerPoint  |  <img src={powerpoint} alt="Powerpoint" className="h-14" /></h1>
            <p className="mt-2 md:mt-4 text-base md:text-lg lg:text-xl">
              Elevate your presentations with Microsoft PowerPoint. Create stunning slideshows with dynamic transitions, animations, and multimedia elements that captivate your audience and convey your message effectively.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default MsApps;
