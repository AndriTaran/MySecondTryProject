import React from "react";
import { useSelector } from "react-redux";
import PhotoItem from "./PhotoItem";
import { Block } from "../../../common/simpleComponents/";
import { FlatList } from "react-native";

const ImageBar = () => {

  const photos = useSelector(state => state.photo.photos);

  const renderItem = ({ item }) => (
    <PhotoItem source={item.uri || item.image} key={item.uri} />
  );

  return (
    <Block
      height={"15%"}
      bc={"grey"}
      pt={"10px"}
    >
      <FlatList
        horizontal={true}
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.uri}
      />
    </Block>
  );
};

export default ImageBar;
