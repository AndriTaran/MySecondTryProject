import React from "react";
import { Image } from "../../../common/simpleComponents/Image";

const PhotoItem = ({source}) => {
  return (
    <Image source={{ uri: source }}
           height={'100px'}
           width={'100px'}
           ml={'5px'}/>
  );
};

export default PhotoItem;
