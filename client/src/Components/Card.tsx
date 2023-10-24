import React from "react";

const Card = ({ header, date, note, ind }: any) => {
  return (
    <div
      className={`w-[355px] h-[520px] lg:w-[480px] lg:h-[530px] 2xl:h-[560px] 2xl:w-[587px] pt-[34px] pl-[10px] pr-[10px] pb-[50px] flex flex-col justify-between ${
        ind === 1 ? "bg-white" : "bg-navy"
      } rounded-[10px] 2xl:mb-[80px] lg:mb-[40px] mb-[20px]`}
    >
      <h2
        className={`${
          ind === 1 ? "text-black" : "text-white"
        } font-body font-bold text-[26px] lg:text-[32px] 2xl:text-[42px]`}
      >
        {header}
      </h2>
      <p
        className={`${
          ind === 1 ? "text-black" : "text-[#F6F6F6]"
        } font-body font-normal leading-[30px] text-[18px]  mt-[20px]`}
      >
        {note}
      </p>
      <div className="flex justify-between">
        <span className="font-body text-lightBlue flex">
          <img src="./date.svg" alt="date" />
          22.10.2023
        </span>
        <span className="font-body text-lightBlue flex">
          <img src="./time.svg" alt="" />
          10:00
        </span>
      </div>
    </div>
  );
};

export default Card;
