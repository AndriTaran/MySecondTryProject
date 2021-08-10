import React from "react";
import { Image } from "../../../common/simpleComponents/Image";
import { PESDK } from "react-native-photoeditorsdk";
import { TouchableOpacity } from "react-native";
import { addPhoto, getPhoto } from "../../../redux/actions";
import { useDispatch } from "react-redux";


const PhotoItem = ({ source }) => {

  const dispatch = useDispatch();

  const openEditor = () => {
    PESDK.openEditor(
      { uri: source })
      .then((r) => dispatch(addPhoto(r)))
      .then(() => dispatch(getPhoto()))
      .catch(err => console.log(err));
  };

  return (
    <TouchableOpacity onPress={openEditor}>
      <Image
        source={{ uri: source }}
        height={"100px"}
        width={"100px"}
        ml={"5px"}
      />
    </TouchableOpacity>
  );
};

export default PhotoItem;
