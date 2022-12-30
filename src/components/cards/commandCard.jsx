import React from "react";

const CommandCard = ({ command }) => {
   
    return (
      <div className="flex flex-col justify-left items-left mb-[20px] border-[2px] border-white rounded-[10px] bg-[#000000] p-[20px] w-[80%]">
        <p className="font-poppins font-bold text-[12px] md:text-[16px] text-white  mb-[5px]">
          Command: <a className="text-[#FE01EE]">{command.name}</a>
        </p>
        <p className="font-poppins text-[11px] md:text-[14px] text-white mb-[5px]">
          Description: {command.description}
        </p>
        <p className="font-poppins text-[11px] md:text-[14px] text-white mb-[5px]">
          Category: {command.category}
        </p>
        <p className="font-poppins text-[11px] md:text-[14px] text-white  mb-[5px]">
          Usage: {command.usage}
        </p>
      </div>
    );
};

export default CommandCard;