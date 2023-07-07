// React
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useEffect, useState } from "react";
// Share
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
// Marker
import ImageMarker from "react-native-image-marker";
// Utils
import colors from "../utils/colors";

const ShareButton = ({ imageUrl }) => {
  //   console.log(Sharing.isAvailableAsync());
  const downloadFileForShare = async () => {
    const newUrl = await FileSystem.downloadAsync(
      imageUrl,
      FileSystem.cacheDirectory + "tmp.png"
    );
    console.log(newUrl.uri);
    // ImageMarker.markText({
    //   src: newUrl.uri,
    //   text: "text marker",
    //   X: 30,
    //   Y: 30,
    //   color: "#FF0000", // '#ff0000aa' '#f0aa'
    //   fontName: "Arial-BoldItalicMT",
    //   fontSize: 44,
    //   shadowStyle: {
    //     dx: 10.5,
    //     dy: 20.8,
    //     radius: 20.9,
    //     color: "#ff00ff", // '#ff00ffad'
    //   },
    //   textBackgroundStyle: {
    //     type: "stretchX",
    //     paddingX: 10,
    //     paddingY: 10,
    //     color: "#0f0", // '#0f0a'
    //   },
    //   scale: 1,
    //   quality: 100,
    // })
    //   .then((res) => {
    //     console.log("the path is" + res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    Sharing.shareAsync(newUrl.uri);
  };
  useEffect(() => {
    Sharing.isAvailableAsync().then((result) => {});
  }, []);
  return (
    <TouchableOpacity onPress={() => downloadFileForShare()}>
      {/* <TouchableOpacity> */}
      <Icon
        style={
          {
            //   left: moderateScale(10),
          }
        }
        name="share-2"
        size={20}
        color={colors.textDefaultColor}
      />
    </TouchableOpacity>
  );
};

export default ShareButton;
