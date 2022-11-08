import React, { useCallback, useEffect, useState, useTransition } from "react";
import axios from "axios";

interface RandomImages {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const TransitionPage = () => {
  const [page, setPage] = useState(1);
  const [radomImageList, setRandomImageList] = useState<RandomImages[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const [isPending, startTranisition] = useTransition();

  const fetchImages = useCallback(async () => {
    const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    console.log("fetching");
    setRandomImageList(radomImageList.concat(data));
    setIsFetching(false);
    setPage((page) => page + 1);
  }, [page]);

  useEffect(() => {
    if (isFetching) fetchImages();
  }, [isFetching]);

  useEffect(() => {
    const handleScroll = () => {
      startTranisition(() => {
        const { scrollTop, offsetHeight } = document.documentElement;
        console.log("스크롤감지");

        if (window.innerHeight + scrollTop >= offsetHeight) {
          setIsFetching(true);
        }
      });
    };

    setIsFetching(true);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {radomImageList?.map((data) => (
        <img style={{ width: "500px", height: "500px" }} key={data.id} src={data.download_url} alt="image" />
      ))}
    </>
  );
};

export default TransitionPage;
