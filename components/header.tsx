import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { ArrowLeft, BellIcon, FilterHorizontalIcon } from "./icons";
import { Colors, Fonts } from "../constants/theme";

interface HeaderProps {
  onPress: (event: GestureResponderEvent) => void;
  backButton: boolean;
  screenTitle: string;
  isLogo: boolean;
}
const Header = ({
  backButton = false,
  onPress,
  screenTitle,
  isLogo = true,
}: HeaderProps) => {
  return (
    <View style={styles.homeHeaderWrapper}>
      {backButton ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={styles.iconWrapper}
        >
          <ArrowLeft size={verticalScale(20)} color={Colors.primary} />
        </TouchableOpacity>
      ) : (
        <View style={styles.dummyView} />
      )}
      {isLogo ? (
        <View style={styles.logo} />
      ) : (
        <Text style={styles.screenTitle}>{screenTitle}</Text>
      )}
      <View style={styles.dummyView} />
      {/*<TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.iconWrapper}
      >
        <BellIcon size={verticalScale(16)} color={Colors.primary} />
      </TouchableOpacity>*/}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  homeHeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: verticalScale(20),
    paddingVertical: verticalScale(4),
    backgroundColor: "#ffffff",
    // borderWidth: 1,
  },
  logo: {
    width: scale(100),
    height: scale(40),
    // borderWidth: 1,
  },
  dummyView: {
    width: verticalScale(35),
    height: verticalScale(35),
    // borderWidth: 1,
  },
  iconWrapper: {
    width: verticalScale(35),
    height: verticalScale(35),
    borderRadius: verticalScale(17.5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
    borderColor: "#D1D5DB",
    borderWidth: 1,
  },
  screenTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: verticalScale(12),
  },
});
