import { useState, useEffect } from "react";
import { useInput } from "../utils/validate";

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

const Popup = ({ open, setPostSend }: React.SetStateAction<any>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<Post>({
    header: "",
    date: "",
    note: "",
  });

  const header = useInput("", { isEmpty: true, maxLength: 200 });
  const date = useInput("", { isEmpty: true, maxLenght: 30 });
  const note = useInput("", { isEmpty: true, maxLength: 2000 });

  function handleSubmut(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true);

    fetch("http://127.0.0.1:3001/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => setPostSend(data.message))
      .catch((err) => console.log(err));

    setLoading(false);
    document.body.classList.remove("modal-show");
    open(false);
  }

  return (
    <div className="bg-navy fixed inset-0 bg-navy bg-opacity-80 flex lg:items-center items-start justify-center">
      <div className="bg-white lg:rounded-[40px] w-[375px] lg:w-[924px] 2xl:w-[1214px] lg:left-[5%] pl-[10px] pr-[10px] pb-[20px] lg:pl-[50px] lg:pr-[50px] 2xl:pl-[60px] 2xl:pr-[60px]">
        <div className="flex justify-between">
          <h2 className="font-body text-[32px] lg:text-[42px] text-black font-bold mt-[46px]">
            Новая запись
          </h2>
          <div
            className="mt-[10px] mr-[8px]"
            onClick={() => {
              open(false);
              document.body.classList.remove("modal-show");
            }}
          >
            <Svg />
          </div>
        </div>
        <form onSubmit={handleSubmut} className="mt-[32px]">
          <div className="2xl:flex">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <span className="font-body text-[18px] text-black">
                  Заголовок
                </span>
                {header.isDirty && header.isEmpty && (
                  <div className="flex 2xl:mr-[42px]">
                    <img
                      className="w-[24px] h-[24px]"
                      src="./error.svg"
                      alt="error"
                    />
                    <span className="font-body text-[18px] text-error">
                      Обязательное поле
                    </span>
                  </div>
                )}
                {header.isDirty && header.maxLengthError && (
                  <div className="flex 2xl:mr-[42px]">
                    <img
                      className="w-[24px] h-[24px]"
                      src="./error.svg"
                      alt="error"
                    />
                    <span className="font-body text-[18px] text-error">
                      Максимум 200 символов
                    </span>
                  </div>
                )}
              </div>

              <input
                className={`w-[355px] h-[80px] lg:w-[825px] 2xl:w-[526px] bg-[#F6F6F6] 2xl:mr-[42px] px-[20px] outline-none`}
                style={
                  header.isDirty && header.isEmpty
                    ? { border: "1px solid #FF832A" }
                    : {}
                }
                type="text"
                required
                onChange={(e) => {
                  header.onChange(e);
                  setForm({ ...form, [e.target.name]: e.target.value });
                }}
                value={header.value}
                onBlur={(e) => header.onBlur(e)}
                name="header"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <span className="font-body text-[18px] text-black mt-[20px] 2xl:mt-0">
                  Дата
                </span>
                {date.isDirty && date.isEmpty && (
                  <div className="flex items-center">
                    <img
                      className="w-[24px] h-[24px]"
                      src="./error.svg"
                      alt="error"
                    />
                    <span className="font-body text-[18px] text-error">
                      Обязательное поле
                    </span>
                  </div>
                )}
              </div>

              <input
                className={`w-[355px] h-[80px] lg:w-[825px] 2xl:w-[526px] outline-none bg-[#F6F6F6] px-[20px]`}
                style={
                  date.isDirty && date.isEmpty
                    ? { border: "1px solid #FF832A" }
                    : {}
                }
                onChange={(e) => {
                  date.onChange(e);
                  setForm({ ...form, [e.target.name]: e.target.value });
                }}
                value={date.value}
                onBlur={(e) => date.onBlur(e)}
                type="datetime-local"
                required
                name="date"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <span className="font-body text-[18px] text-black mt-[20px]">
                Заметка
              </span>
              {note.isDirty && note.isEmpty && (
                <div className="flex items-center">
                  <img
                    className="w-[24px] h-[24px]"
                    src="./error.svg"
                    alt="error"
                  />
                  <span className="font-body text-[18px] text-error">
                    Обязательное поле
                  </span>
                </div>
              )}
              {note.isDirty && note.maxLengthError && (
                <div className="flex 2xl:mr-[42px]">
                  <img
                    className="w-[24px] h-[24px]"
                    src="./error.svg"
                    alt="error"
                  />
                  <span className="font-body text-[18px] text-error">
                    Максимум 2000 символов
                  </span>
                </div>
              )}
            </div>

            <textarea
              className={`resize-none w-[355px] h-[223px] lg:w-[825px] 2xl:w-[1094px] outline-none bg-[#F6F6F6] mb-[23px] py-[20px] px-[20px]`}
              style={
                note.isDirty && note.isEmpty
                  ? { border: "1px solid #FF832A" }
                  : {}
              }
              onChange={(e) => {
                note.onChange(e);
                setForm({ ...form, [e.target.name]: e.target.value });
              }}
              value={note.value}
              onBlur={(e) => note.onBlur(e)}
              name="note"
            />
          </div>
          <button
            type="submit"
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
