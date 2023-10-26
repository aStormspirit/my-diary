import { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const Filter = ({
  posts,
  setPosts,
  load,
}: {
  posts: any[];
  setPosts: React.Dispatch<React.SetStateAction<any>>;
  load: boolean;
}) => {
  const [selected, setSelected] = useState(false);

  function sortEggsInNest(a: any, b: any) {
    if (new Date(a.date)?.getTime() > new Date(b.date)?.getTime()) {
      return -1;
    } else if (new Date(b.date)?.getTime() > new Date(a.date)?.getTime()) {
      return 1;
    } else {
      return 0;
    }
  }

  const oldest = () => {
    return posts.sort(
      (a: any, b: any) =>
        new Date(a.date)?.getTime() - new Date(b.date)?.getTime()
    );
  };

  const newest = () => {
    return posts.sort(sortEggsInNest);
  };

  useEffect(() => {
    setPosts([...oldest()]);
  }, [load]);

  return (
    <div className="flex items-end mr-[10px] ml-[10px] mt-[28px]">
      <div
        className={` ${
          selected ? "" : "bg-lightBlue rounded-[40px]"
        } w-[50%] lg:w-[192px] h-[44px] lg:h-[64px] flex items-center justify-center`}
        onClick={() => {
          setSelected(false);
          setPosts([...oldest()]);
        }}
      >
        <div>
          {selected ? (
            <img src="./SortingLeft2.svg" alt="" />
          ) : (
            <img src="./SortingLeft.svg" alt="" />
          )}
        </div>
        <p>Сначала новые</p>
      </div>
      <div
        className={` ${
          !selected ? "" : "bg-lightBlue rounded-[40px]"
        } w-[50%] lg:w-[192px] h-[44px] lg:h-[64px] flex items-center justify-center`}
        onClick={() => {
          setSelected(true);
          setPosts([...newest()]);
        }}
      >
        <div>
          {selected ? (
            <img src="./SortingRight2.svg" alt="" />
          ) : (
            <img src="./SortingRight.svg" alt="" />
          )}
        </div>
        <p>Сначала старые</p>
      </div>
    </div>
  );
};

type Post = {
  header: string;
  date: string;
  note: string;
};

const Main = ({ setPostSend, postSend }: any) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [lowCount, setLowCount] = useState((page - 1) * 6);
  const [highCount, setHighCount] = useState(page * 6);
  const [pageCount, setPageCount] = useState(6);

  useEffect(() => {
    setLowCount((page - 1) * 6);
    setHighCount(page * 6);
  }, [page]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/post", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        setPosts(json.customers);
        setLoad(true);
      })
      .catch((err) => console.log(err));

    setPostSend("");
  }, [postSend]);

  return (
    <div className="w-full bg-[#F6F6F6] lg:rounded-t-[80px] rounded-t-[30px]">
      <div className="container mx-auto mt-[10px] pl-[10px] pr-[10px]">
        <div className="lg:flex justify-between lg:pb-[69px] pb-[159px]">
          <h1 className="font-bold font-body w-[343px] lg:w-[527px] xl:w-[797px] text-[42px] leading-10 lg:leading-[64px] 2xl:leading-[100px] 2xl:text-[112px] pt-[29px] pr-[10] lg:pt-[60px] 2xl:pt-[80px]">
            Мой дневничок
          </h1>
          <Filter posts={posts} setPosts={setPosts} load={load} />
        </div>
        <main className="grid gap-[20px] md:gap-[22px] lg:gap-[30px] 2xl:gap-[40px] md:gap-y-[30px] lg:gap-y-[40px] 2xl:gap-y-[80px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {posts ? (
            posts.map((el: any, i: number) => {
              if (lowCount < i + 1 && highCount > i) {
                return (
                  <Card
                    key={i}
                    date={el.date}
                    ind={i}
                    note={el.note}
                    header={el.header}
                  />
                );
              } else {
              }
            })
          ) : (
            <></>
          )}
        </main>
        <button
          className="container bg-white rounded-[50px] h-[100px]"
          onClick={() => {
            setHighCount(page * 6 + 6);
            setPageCount(pageCount + 6);
          }}
        >
          Показать еще
        </button>
        <Pagination
          page={page}
          setPage={setPage}
          setPageCount={setPageCount}
          count={Math.ceil(posts.length / pageCount)}
        />
      </div>
    </div>
  );
};

export default Main;
