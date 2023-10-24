import React from "react";

const Svg = ({ left }: any) => {
  return (
    <svg
      className={left ? "" : "rotate-180"}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.16" cx="17" cy="17" r="12.75" fill="#88A1DE" />
      <circle
        cx="17"
        cy="17"
        r="12.75"
        stroke="#88A1DE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 12.75L12.75 17M12.75 17L17 21.25M12.75 17H21.25"
        stroke="#88A1DE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Pagination = () => {
  return (
    <div className="flex mt-[33px] items-center justify-between pb-[129px]">
      <div>
        <Svg left={true} />
      </div>
      {[1, 2, 3, 4, 5].map((e) => (
        <p className="font-body font-bold text-[22px] leading-[20px]">{e}</p>
      ))}
      <div>
        <Svg />
      </div>
    </div>
  );
};

export default Pagination;
