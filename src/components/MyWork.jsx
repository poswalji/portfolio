import React, { useState } from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import mywork_data from '../assets/mywork_data'; 
import arrow_icon from '../assets/arrow_icon.svg';

const MyWork = () => {
  // State to manage the number of visible items
  const [visibleItems, setVisibleItems] = useState(6); // Initially show 3 items 

  // Function to handle the "Show More" button click
  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems+6); // Load more items
  };

  return (
    <div
      id="work"
      className="flex flex-col items-start md:items-center justify-center gap-20 md:my-[80px] my-[50px] mx-[70px] md:mx-[170px]"
    >
      <div className="relative">
        <h1 className="md:py-0 p-0 md:px-[30px] text-[50px] md:text-[80px] font-semibold">
          My Latest Work
        </h1>
        <img
          className="w-[120px] md:w-max absolute bottom-0 right-0 z-[-1]"
          src={theme_pattern}
          alt="Decorative pattern"
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-[30px] mb-20">
        {mywork_data.slice(0, visibleItems).map((work, index) => (
          <div
            className="md:w-[370px] md:h-[270px] px-2 py-5"
            key={index}
          >
            <a href={work.http}>
              <img
                className="min-h-[100px] w-[100%] md:w-[370px] md:h-[270px] box-border rounded cursor-pointer hover:scale-[1.10] duration-300 hover:border-[4px] hover:border-[#ff00ff]  hover:rounded-[10px] hover:border-solid"
                src={work.w_img}
                alt={`Work ${index + 1}`}
              />
            </a>
          </div>
        ))}
      </div>
      
      {/* Show the "Show More" button only if there are more items to reveal */}
      {visibleItems < mywork_data.length && (
        <div className="w-[100%] flex justify-center">
          <div
            className="flex gap-[15px] justify-center rounded-[50px]  border-[2px] border-solid border-white md:py-[30px] md:px-[60px] px-10 py-5 md:text-[22px] text-[18px]  font-medium mb-20 cursor-pointer hover:border-[#ff00ff] hover:gap-[30px] hover:duration-500"
            onClick={handleShowMore}
          >
            <p>Show More</p>
            <img
              src={arrow_icon}
              alt="Arrow icon indicating more content"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
