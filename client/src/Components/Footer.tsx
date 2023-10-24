import React from "react";

const Svg = () => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 8L8.5 1L1.5 8M8.5 1L8.5 15"
        stroke="#050F28"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy h-[87px] lg:h-[70px] relative">
      <a
        className="bg-lightBlue w-[355px] h-[72px] absolute rounded-[40px] flex items-center justify-center top-[-50px]"
        href="#logo"
      >
        <Svg />
        <span>Наверх</span>
      </a>
      <h1 className="text-white font-body text-[18px] pt-[45px]">
        Мой дневничок
      </h1>
    </footer>
  );
};

export default Footer;
