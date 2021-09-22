import React from "react";
import { Link } from "react-router-dom";
import CategoryChip from "./CategoryChip";
import imageBlank from "../statics/images/image-blank.jpg";

function MuseumCard(props) {
  const data = props.data;
  const imageUrl = data.image_id
    ? `https://lakeimagesweb.artic.edu/iiif/2/${data.image_id}/full/400,/0/default.jpg`
    : data.alt_image_ids
    ? `https://lakeimagesweb.artic.edu/iiif/2/${data.alt_image_ids[0]}/full/400,/0/default.jpg`
    : imageBlank;
  const detailLocation = `/${data.id}`;
  return (
    <Link to={detailLocation}>
      <div>{data.title}</div>
      <div>{data.artist_display}</div>
      <div>{data.medium_display}</div>
      <div>
        {data.category_titles
          .filter((element, index) => {
            return data.category_titles.indexOf(element) === index;
          })
          .map((title) => {
            const key = `${data.id}_${title}`.replaceAll(" ", "_");
            return <CategoryChip key={key} content={title} />;
          })}
      </div>
      <div>
        {data.term_titles
          .filter((element, index) => {
            return data.term_titles.indexOf(element) === index;
          })
          .map((title) => {
            const key = `${data.id}_${title}`.replaceAll(" ", "_");
            return <CategoryChip key={key} content={title} />;
          })}
      </div>
      <img src={imageUrl} alt={data.title} />
    </Link>
  );
}

export default MuseumCard;
