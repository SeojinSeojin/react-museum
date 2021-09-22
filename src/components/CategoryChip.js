import React from "react";
import { Chip } from "../styles/chip";

function CategoryChip(props) {
  const content = props.content;
  return <Chip>{content}</Chip>;
}

export default CategoryChip;
