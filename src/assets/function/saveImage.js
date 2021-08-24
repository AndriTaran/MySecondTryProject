import { Platform } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";
import hasAndroidPermission from "./androidPermission";
import { fetchPhoto } from "../../redux/actions";

const saveImage = async (filePath, edited, dispach) => {
  try {
    if (Platform.OS === "android") {
      const granted = await hasAndroidPermission();
      if (!granted) {
        return;
      }
    }
    if (edited) {
      await CameraRoll.save(filePath);
    } else {
      await CameraRoll.save(filePath);
    }
    dispach(fetchPhoto());

  } catch (error) {
    console.log(error, "saveImage err");
  }
};

export default saveImage;
