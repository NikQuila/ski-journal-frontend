import { Text } from "@rneui/base";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import * as React from "react";
import Carousel from "react-native-reanimated-carousel";

const IMAGESFORSLIDER = [
  "https://motioncue.com/wp-content/uploads/2020/06/Mobile-app-demo-videos-motioncue.png",
  "https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/30/posts/26768/image/gecjo.jpg",
  "https://thirdeyeblindproductions.com/wp-content/uploads/2021/08/GOOGLE-CALENDAR-%E2%80%93-A-Perfect-Planner.jpg",
];

const ImagesSlider = () => {
  const width = 300;
  const height = 250;

  return (
    <View style={styles.imagesContainer}>
      <Carousel
        loop
        width={width}
        mode="horizontal-stack"
        modeConfig={{}}
        height={height}
        autoPlay={true}
        data={IMAGESFORSLIDER}
        scrollAnimationDuration={2000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index, item }) => {
          return (
            <View style={{}}>
              <Image
                source={{ uri: item, width: width, height: height }}
                style={styles.imageSlide}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ImagesSlider;

const styles = StyleSheet.create({
  imagesContainer: {
    alignSelf: "center",
  },
  imageSlide: {
    borderRadius: 20,
  },
});
