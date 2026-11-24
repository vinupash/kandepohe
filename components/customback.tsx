import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { verticalScale } from "react-native-size-matters";
import { ArrowLeft } from "./icons";
import { Colors, Shadows } from "../constants/theme";

interface CustomBackType {
  onPress: (event: GestureResponderEvent) => void;
  size: number;
}

const CustomBack = ({ onPress, size }: CustomBackType) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.backIconWrapper}
      onPress={onPress}
    >
      <ArrowLeft size={size} color={Colors.primary} />
    </TouchableOpacity>
  );
};

export default CustomBack;

const styles = StyleSheet.create({
  backIconWrapper: {
    width: verticalScale(40),
    height: verticalScale(40),
    marginTop: verticalScale(20),
    borderRadius: verticalScale(20),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
    borderColor: "#D1D5DB",
    borderWidth: 1,
  },
});
