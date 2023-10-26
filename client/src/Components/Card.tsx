const Card = ({ header, date, note, ind }: any) => {
  const year: Date = new Date(date);

  const dateStr =
    date && Number(date.split("-")[0]) <= 9999
      ? `${year?.getDate()}.${year?.getMonth()}.${year?.getFullYear()}`
      : "Нет даты";

  return (
    <div
      key={ind}
      className={`w-full h-[560px] py-[70px] pl-[30px] pr-[40px] flex flex-col justify-between ${
        ind === 0 ? "bg-navy" : "bg-white"
      } rounded-[20px] 2xl:mb-[80px] lg:mb-[40px] mb-[20px]`}
    >
      <h2
        className={`${
          ind === 0 ? "text-white" : "text-black"
        } font-body font-bold leading-tight text-[26px] lg:text-[32px] 2xl:text-[42px] overflow-hidden`}
      >
        {header}
      </h2>
      <div className="overflow-y-scroll mb-[30px]">
        <p
          className={`${
            ind === 0 ? "text-[#F6F6F6]" : "text-black"
          } font-body font-normal leading-[30px] text-[18px]  mt-[20px]`}
        >
          {note}
        </p>
      </div>

      <div className="flex justify-between">
        <span className="font-body text-lightBlue flex">
          <img src="./date.svg" alt="date" />
          {dateStr}
        </span>
        <span className="font-body text-lightBlue flex">
          <img src="./time.svg" alt="" />
          {date.match(/\d+:\d+/)}
        </span>
      </div>
    </div>
  );
};

export default Card;
