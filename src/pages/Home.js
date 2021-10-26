import React, { useState, useEffect } from "react";
import MuseumCard from "../components/MuseumCard";
import { CardContainer } from "../styles/card";

function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  });
  useEffect(() => {
    async function fetchAPI() {
      const result = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=${page}`
      );
      const resultData = await result.json();
      const artworksData = resultData.data;
      setData((prevData) => [...prevData, ...artworksData]);
    }
    fetchAPI();
  }, [page]);

  const handleScroll = () => {
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    const documentHeight = document.documentElement.clientHeight;
    if (scrollTop + documentHeight === scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <CardContainer>
      {data.length !== 0
        ? data.slice(0, -1).map((ele) => <MuseumCard key={ele.id} data={ele} />)
        : null}
    </CardContainer>
  );
}

export default Home;
