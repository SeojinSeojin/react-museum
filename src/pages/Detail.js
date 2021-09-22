import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import imageBlank from "../statics/images/image-blank.jpg";
import {
  DetailContainer,
  DetailTitle,
  DetailWrapper,
} from "../styles/detail-page";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const imageUrl = data.image_id
    ? `https://lakeimagesweb.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`
    : data.alt_image_ids
    ? `https://lakeimagesweb.artic.edu/iiif/2/${data.alt_image_ids[0]}/full/400,/0/default.jpg`
    : imageBlank;
  useEffect(() => {
    async function fetchAPI() {
      const result = await axios(`https://api.artic.edu/api/v1/artworks/${id}`);
      setData(result.data.data);
    }
    fetchAPI();
  }, [id]);

  return (
    <DetailContainer>
      <DetailWrapper>
        <img src={imageUrl} alt={data.title} />
        <DetailTitle>{data.title}</DetailTitle>
        <div style={{ textAlign: "right" }}>{data.artist_display}</div>
        <div>{data.medium_display}</div>
        <div>{data.date_display}</div>
        <div>{data.place_of_origin}</div>
        <div>{data.dimensions}</div>
        <div>{data.gallery_title}</div>
        <div>{data.department_title}</div>
        <div>{data.copyright_notice}</div>
      </DetailWrapper>
    </DetailContainer>
  );
}

export default Detail;
