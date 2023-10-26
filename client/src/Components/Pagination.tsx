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

const Pagination = ({ page, setPage, count, setPageCount }: any) => {
  const arr: any = [];

  for (let i = 1; i < count + 1; i++) {
    arr.push(i);
  }

  return (
    <div className="flex mt-[33px] items-center justify-between pb-[129px]">
      <div
        onClick={() => {
          if (page == 1) {
            setPage(1);
            setPageCount(6);
          } else {
            setPage(page - 1);
            setPageCount(6);
          }
        }}
      >
        <Svg left={true} />
      </div>
      {arr.map((e: any) => (
        <p
          onClick={() => {
            setPage(e);
            setPageCount(6);
          }}
          className={` ${
            page === e ? "text-lightBlue" : ""
          } font-body font-bold text-[22px] leading-[20px] cursor-pointer`}
        >
          {e}
        </p>
      ))}
      <div
        onClick={() => {
          if (page == arr[arr.length - 1]) {
            setPage(arr[arr.length - 1]);
            setPageCount(6);
          } else {
            setPage(page + 1);
            setPageCount(6);
          }
        }}
      >
        <Svg />
      </div>
    </div>
  );
};

export default Pagination;
