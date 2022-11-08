import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

interface RandomImages {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
const IntersectionPage = () => {
  const [page, setPage] = useState(1);
  const [radomImageList, setRandomImageList] = useState<RandomImages[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [lastImage, setLastImage] = useState<HTMLDivElement | null>(null);

  const fetchImages = useCallback(async () => {
    const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    console.log("fetching");
    setRandomImageList(radomImageList.concat(data));
    setIsFetching(false);
  }, [page]);

  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setPage((prev) => prev + 1);
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastImage) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastImage);
    }
    return () => observer && observer.disconnect();
  }, [lastImage]);

  return (
    <>
      {radomImageList?.map((randomImage, index) => {
        if (index === radomImageList.length - 1) {
          return (
            <img
              style={{ width: "500px", height: "500px", borderRadius: "50%" }}
              key={randomImage.id}
              src={randomImage.download_url}
              alt="random"
              ref={setLastImage}
            />
          );
        } else {
          return (
            <img
              style={{ width: "500px", height: "500px" }}
              key={randomImage.id}
              src={randomImage.download_url}
              alt="random"
            />
          );
        }
      })}
    </>
  );
};

export default IntersectionPage;
