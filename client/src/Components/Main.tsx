import { useEffect, useState } from "react";
import Card from "./Card";
import data from "../data.json";
import Pagination from "./Pagination";
import axios from "axios";

const Svg = () => {
  const [post, setPost] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:3001/post", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((posts) => console.log(posts));
  }, []);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4_1006)">
        <path
          d="M4 6H20M4 12H14M4 18H8"
          stroke="#050F28"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 16L18 20M18 20L22 16M18 20L18 4"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_1006">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Filter = () => {
  return (
    <div className="flex items-end mr-[10px] ml-[10px] mt-[28px]">
      <div className="w-[50%] lg:w-[192px] h-[44px] lg:h-[64px] lg:rounded-[40px] rounded-[40px] bg-lightBlue flex items-center justify-center">
        <div>
          <Svg />
        </div>
        <p>Сначала новые</p>
      </div>
      <div className="w-[50%] lg:w-[192px] h-[44px] lg:h-[64px] flex items-center justify-center">
        <div>
          <Svg />
        </div>
        <p>Сначала старые</p>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="bg-[#F6F6F6] lg:rounded-t-[80px] rounded-t-[30px] mt-[10px]">
      <div className="lg:flex justify-between lg:pb-[69px] pb-[159px]">
        <h1 className="font-bold font-body 2xl:text-[112px] text-[42px] w-[343px] lg:w-[527px] xl:w-[797px] leading-10 lg:leading-[64px] 2xl:leading-[100px] pt-[29px] pr-[10] lg:pt-[60px] 2xl:pt-[80px]">
          Мой дневничок
        </h1>
        <Filter />
      </div>
      <main className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {data.map((e: any, i: number) => (
          <Card key={i} date={e.date} ind={i} note={e.note} header={e.header} />
        ))}
      </main>
      <button className="bg-white rounded-[50px] 2xl:w-[1840px] lg:w-[982px] w-[355px] h-[100px]">
        Показать еще
      </button>
      <Pagination />
    </div>
  );
};

export default Main;
