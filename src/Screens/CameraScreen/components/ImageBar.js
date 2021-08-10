import React from "react";
import { Block } from "../../../common/simpleComponents/";
import { useSelector } from "react-redux";
import PhotoItem from "./PhotoItem";
import { FlatList } from "react-native";

const ImageBar = () => {

  const photos = useSelector(state => state.photo.photos);

  const renderItem = ({ item, index }) => {
    return (
      <PhotoItem source={item.uri || item.image} />
    );
  };

  return (
    <Block height={"15%"} bc={"grey"} pt={"10px"}>
      <FlatList horizontal={true}
                data={photos}
                renderItem={renderItem}
                keyExtractor={item => item.uri} />
    </Block>
  );
};

export default ImageBar;
