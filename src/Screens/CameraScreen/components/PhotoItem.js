import React from "react";
import { Image } from "../../../common/simpleComponents/Image";
import { PESDK } from "react-native-photoeditorsdk";
import { TouchableOpacity } from "react-native";
import { fetchPhoto } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import saveImage from "../../../assets/function/saveImage";


const PhotoItem = ({ source }) => {

  const dispatch = useDispatch();

  const openEditor = () => {
    PESDK.openEditor(
      { uri: source })
      .then((r) => saveImage(r.image, true))
      .then(() => dispatch(fetchPhoto()))
      .catch(err => console.log(err));
  };

  return (
    <TouchableOpacity onPress={openEditor}>
      <Image source={{ uri: source }}
             height={"100px"}
             width={"100px"}
             ml={"5px"} />
    </TouchableOpacity>
  );
};

export default PhotoItem;
