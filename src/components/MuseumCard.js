import React from "react";
import { Link } from "react-router-dom";
import CategoryChip from "./CategoryChip";
import imageBlank from "../statics/images/image-blank.jpg";
import { ChipWrapper } from "../styles/chip";
import { CardImage, CardTitle, CardWrapper } from "../styles/card";

function MuseumCard(props) {
  const data = props.data;
  const imageUrl = data.image_id
    ? `https://lakeimagesweb.artic.edu/iiif/2/${data.image_id}/full/400,/0/default.jpg`
    : data.alt_image_ids
    ? `https://lakeimagesweb.artic.edu/iiif/2/${data.alt_image_ids[0]}/full/400,/0/default.jpg`
    : imageBlank;
  const detailLocation = `/${data.id}`;
  return (
    <CardWrapper>
      <Link
        to={detailLocation}
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardTitle>{data.title}</CardTitle>
        <div>{data.artist_display}</div>
        <div>{data.medium_display}</div>
        <ChipWrapper>
          {data.category_titles
            .filter((element, index) => {
              return data.category_titles.indexOf(element) === index;
            })
            .map((title) => {
              const key = `${data.id}_${title}`.replaceAll(" ", "_");
              return <CategoryChip key={key} content={title} />;
            })}
        </ChipWrapper>
        <ChipWrapper>
          {data.term_titles
            .filter((element, index) => {
              return data.term_titles.indexOf(element) === index;
            })
            .map((title) => {
              const key = `${data.id}_${title}`.replaceAll(" ", "_");
              return <CategoryChip key={key} content={title} />;
            })}
        </ChipWrapper>
        <CardImage src={imageUrl} alt={data.title} />
      </Link>
    </CardWrapper>
  );
}

export default MuseumCard;
