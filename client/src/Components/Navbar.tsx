import { useState } from "react";
import Popup from "./Popup";
import { styles } from "../styles";

const Svg = () => {
  return (
    <div className="flex lg:hidden justify-center items-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_8_2139)">
          <path
            opacity="0.16"
            d="M5 16L4 20L8 19L18 9L15 6L5 16Z"
            fill="white"
          />
          <path
            d="M5 16L4 20L8 19L19.5858 7.41421C20.3668 6.63316 20.3668 5.36683 19.5858 4.58579L19.4142 4.41421C18.6332 3.63316 17.3668 3.63317 16.5858 4.41421L5 16Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 6L18 9"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 20H21"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_8_2139">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const Navbar = ({ setPostSend }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="container mx-auto flex justify-between 2xl:h-[172px] lg:h-[118px] h-[71px] items-center pl-[10px] pr-[10px]">
      <img
        className="2xl:w-[418px] 2xl:h-[110px] lg:w-[312px] lg:h-[77px] w-[186px] h-[45px] gap-10"
        src="./Logo.png"
        id="logo"
        alt="logo"
      />
      <button
        onClick={() => {
          setOpen(!open);
          document.body.classList.add("modal-show");
        }}
        className={styles.button}
      >
        <span className="font-body text-[18px] text-white font-bold">
          <p className="hidden lg:block ">Написать</p> <Svg />
        </span>
      </button>
      {open ? <Popup setPostSend={setPostSend} open={setOpen} /> : <></>}
    </div>
  );
};

export default Navbar;
