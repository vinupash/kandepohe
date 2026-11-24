import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  GestureResponderEvent,
  ImageSourcePropType,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { scale, verticalScale } from "react-native-size-matters";
import { PlusIcon, XIcon } from "./icons";
import { Colors, Fonts } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient";

interface ShortlistProfileCardProps {
  id: string;
  name: string;
  image: ImageSourcePropType;
  openProfile: (event: GestureResponderEvent) => void;
  onRemove: (event: GestureResponderEvent) => void;
  age: number;
  location: string;
  isMember: boolean;
}

const ShortlistProfileCard = ({
  id,
  name,
  openProfile,
  image,
  onRemove,
  age,
  location,
  isMember,
}: ShortlistProfileCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.square}
      onPress={openProfile}
    >
      <Image
        source={image}
        style={styles.uploadedImage}
        blurRadius={isMember ? 0 : 25}
      />

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.removeButton}
        onPress={onRemove}
      >
        <XIcon size={verticalScale(12)} color={Colors.white} />
      </TouchableOpacity>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.98)"]}
        locations={[0, 1]}
        style={styles.profileOverlay}
        pointerEvents="box-none"
      >
        <Text
          style={{
            color: Colors.white,
            fontFamily: Fonts.regular,
            fontSize: scale(12),
          }}
        >
          {name}, {age}
        </Text>
        <Text
          style={{
            color: Colors.white,
            fontFamily: Fonts.regular,
            fontSize: scale(10),
          }}
        >
          {location}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ShortlistProfileCard;

const styles = StyleSheet.create({
  square: {
    flex: 1,
    aspectRatio: 1 / verticalScale(1.3),
    backgroundColor: "#fafafa",
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: verticalScale(8),
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: scale(10),
  },
  removeButton: {
    position: "absolute",
    top: scale(-5),
    right: scale(-5),
    width: scale(20),
    height: scale(20),
    borderRadius: scale(10),
    backgroundColor: Colors.error,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    elevation: 3,
  },
  // Bottom Gradient
  profileOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(15),
    height: verticalScale(100),
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
  },
});
