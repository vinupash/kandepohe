import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { scale, verticalScale } from "react-native-size-matters";
import { PlusIcon, XIcon } from "./icons";
import { Colors } from "../constants/theme";

const ImageUpload = () => {
  const [image, setImage] = useState<string | null>(null);

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [9, 16],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.square}
      onPress={openGallery}
    >
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.uploadedImage} />

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.removeButton}
            onPress={() => setImage(null)}
          >
            <XIcon size={verticalScale(12)} color={Colors.white} />
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.placeholder}>
          <PlusIcon size={verticalScale(28)} color={Colors.placeholder} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  square: {
    flex: 1,
    aspectRatio: 9 / 16,
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
});
