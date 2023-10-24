import { useState, useRef } from "react";

const Svg = () => {
  return (
    <div className="pointer w-[38px] h-[38px] flex items-center justify-center">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.08337 2.0835L17.9167 17.9168M2.08337 17.9168L17.9167 2.0835"
          stroke="#050F28"
          stroke-width="3.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

type Post = {
  header: string;
  date: string;
  note: string;
};

const Popup = ({ open }: React.SetStateAction<any>) => {
  const formRef = useRef();
  const [loading, setLoading] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(true);
  const [form, setForm] = useState<Post>({
    header: "",
    date: "",
    note: "",
  });

  function handleSubmut(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true);

    fetch("http://127.0.0.1:3001/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((e) => console.log(e))
      .catch((err) => console.log(err));
    open(false);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  return (
    <div className="bg-navy fixed inset-0 bg-navy bg-opacity-80 flex lg:items-center items-start justify-center">
      <div className="bg-white lg:rounded-[40px] w-[375px] lg:w-[924px] 2xl:w-[1214px] lg:left-[5%] pl-[10px] pr-[10px] pb-[20px] lg:pl-[50px] lg:pr-[50px] 2xl:pl-[60px] 2xl:pr-[60px]">
        <div className="flex justify-between">
          <h2 className="font-body text-[32px] lg:text-[42px] text-black font-bold mt-[46px]">
            Новая запись
          </h2>
          <div className="mt-[10px] mr-[8px]" onClick={() => open(false)}>
            <Svg />
          </div>
        </div>
        <form className="mt-[32px]">
          <div className="2xl:flex">
            <div className="flex flex-col">
              <span className="font-body text-[18px] text-black">
                Заголовок
              </span>
              <input
                className={`${
                  valid ? "" : "border border-error-600"
                } w-[355px] h-[80px] lg:w-[825px] 2xl:w-[526px] outline-none bg-[#F6F6F6] 2xl:mr-[42px]`}
                type="text"
                onChange={handleChange}
                name="header"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-body text-[18px] text-black mt-[20px] 2xl:mt-0">
                Дата
              </span>
              <input
                className="w-[355px] h-[80px] lg:w-[825px] 2xl:w-[526px] outline-none bg-[#F6F6F6]"
                onChange={handleChange}
                type="text"
                name="date"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-body text-[18px] text-black mt-[20px]">
              Заметка
            </span>
            <textarea
              className="resize-none w-[355px] h-[223px] lg:w-[825px] 2xl:w-[1094px] outline-none bg-[#F6F6F6] mb-[23px]"
              onChange={handleChange}
              name="note"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmut}
            className={`w-[357px] h-[97px] rounded-[65px] bg-navy pointer`}
          >
            <span className="font-body text-[18px] text-white font-bold">
              {loading ? "Отправка" : "Поделиться наболевшим"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
