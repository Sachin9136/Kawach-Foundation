import React from 'react';

const Banners = ({ bannerImage, headingText, textColor = '#FFED05' }) => {
  return (
    <div className="relative flex justify-center bg-no-repeat bg-center bg-cover h-[300px] lg:h-[633px]" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div
        className={`absolute text-${textColor} top-[125px] lg:top-[290px]`} // Using Tailwind responsive classes
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#FFED05]">
          {headingText}
        </h1>
      </div>
    </div>
  );
};

export default Banners;
