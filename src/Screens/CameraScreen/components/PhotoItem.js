import React from "react";
import { PESDK } from "react-native-photoeditorsdk";
import { useDispatch } from "react-redux";
import { addPhoto, getPhoto } from "../../../redux/actions";
import { Button, Image } from "../../../common/simpleComponents/";

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
    <Button onPress={openEditor}>
      <Image
        source={{ uri: source }}
        height={"100px"}
        width={"100px"}
        ml={"5px"}
      />
    </Button>
  );
};

export default PhotoItem;
