import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const imageUrl = data.image_id
    ? `https://lakeimagesweb.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`
    : "";
  useEffect(() => {
    async function fetchAPI() {
      const result = await axios(`https://api.artic.edu/api/v1/artworks/${id}`);
      setData(result.data.data);
    }
    fetchAPI();
  }, [id]);

  return (
    <div>
      <div>{data.title}</div>
      <img src={imageUrl} alt={data.title} />
      <div>{data.artist_display}</div>
      <div>{data.medium_display}</div>
      <div>{data.date_display}</div>
      <div>{data.place_of_origin}</div>
      <div>{data.dimensions}</div>
      <div>{data.gallery_title}</div>
      <div>{data.department_title}</div>
      <div>{data.copyright_notice}</div>
    </div>
  );
}

export default Detail;
