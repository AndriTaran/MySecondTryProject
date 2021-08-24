import React from "react";
import { useSelector } from "react-redux";
import PhotoItem from "./PhotoItem";
import { View } from "../../../common/simpleComponents/";
import { FlatList } from "react-native";

const ImageBar = () => {

  const photos = useSelector(state => state.photo.photos);

  const renderItem = ({ item }) => <PhotoItem source={item.uri || item.image} />;

  return (
    <View
      height={"15%"}
      width={"100%"}
      bc={"grey"}
      pt={"10px"}
    >
      <FlatList
        horizontal={true}
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => `${item.uri || item.image}`}
      />
    </View>
  );
};

export default ImageBar;
