import React, { useState, useEffect } from "react";
import axios from "axios";
import MuseumCard from "../components/MuseumCard";

function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchAPI() {
      const result = await axios("https://api.artic.edu/api/v1/artworks");
      setData(result.data);
    }
    fetchAPI();
  }, []);

  return (
    <div>
      {data.data
        ? data.data.map((ele) => <MuseumCard key={ele.id} data={ele} />)
        : null}
    </div>
  );
}

export default Home;
