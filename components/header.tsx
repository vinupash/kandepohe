import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { ArrowLeft, FilterHorizontalIcon } from "./icons";

interface HeaderProps {
  onPress: (event: GestureResponderEvent) => void;
  backButton: boolean;
}
const Header = ({ backButton = false, onPress }: HeaderProps) => {
  return (
    <View style={styles.homeHeaderWrapper}>
      {backButton ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={styles.iconWrapper}
        >
          <ArrowLeft size={verticalScale(20)} />
        </TouchableOpacity>
      ) : (
        <View style={styles.dummyView} />
      )}
      <View style={styles.logo} />
      <View style={styles.dummyView} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  homeHeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(4),
    backgroundColor: "#ffffff",
    // borderWidth: 1,
  },
  logo: {
    width: scale(100),
    height: scale(40),
  },
  dummyView: {
    width: verticalScale(30),
    height: verticalScale(30),
    // borderWidth: 1,
  },
  iconWrapper: {
    width: verticalScale(35),
    height: verticalScale(35),
    borderRadius: verticalScale(17.5),
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fafafa",
    // borderColor: "#D1D5DB",
    // borderWidth: 1,
  },
});
