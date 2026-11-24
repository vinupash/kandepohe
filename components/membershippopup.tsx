import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { LockKeyholeIcon, XIcon } from "./icons";
import { Colors, Fonts } from "../constants/theme";

interface MembershipPopupProps {
  showPopup: () => void;
  maybeLater: () => void;
  viewPlans: () => void;
}

const MembershipPopup = ({
  showPopup,
  maybeLater,
  viewPlans,
}: MembershipPopupProps) => {
  return (
    <View style={styles.popupOverlay}>
      <View style={styles.popupContainer}>
        {/* Close Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.popupCloseButton}
          onPress={showPopup}
        >
          <XIcon size={scale(20)} color={Colors.black} />
        </TouchableOpacity>

        {/* Lock Icon */}
        <View style={styles.popupIconWrapper}>
          <LockKeyholeIcon size={scale(24)} color={Colors.white} />
        </View>

        <Text style={styles.popupTitle}>Premium Membership</Text>

        <Text style={styles.popupDescription}>
          Unlock contact details and download complete profile information by
          becoming a premium member.
        </Text>

        {/* View Plans */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.popupPrimaryButton}
          onPress={viewPlans}
        >
          <Text style={styles.popupPrimaryButtonText}>
            View Membership Plans
          </Text>
        </TouchableOpacity>

        {/* Maybe Later */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.popupSecondaryButton}
          onPress={maybeLater}
        >
          <Text style={styles.popupSecondaryButtonText}>Maybe Later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MembershipPopup;

const styles = StyleSheet.create({
  popupOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.65)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(25),
    zIndex: 10,
  },

  popupContainer: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: scale(18),
    paddingHorizontal: scale(22),
    paddingTop: verticalScale(28),
    paddingBottom: verticalScale(20),
    alignItems: "center",
  },

  popupCloseButton: {
    position: "absolute",
    top: verticalScale(12),
    right: scale(12),
    padding: scale(5),
  },

  popupIconWrapper: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: verticalScale(15),
  },

  popupTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: scale(17),
    color: Colors.black,
    textAlign: "center",
  },

  popupDescription: {
    fontFamily: Fonts.regular,
    fontSize: scale(11),
    color: Colors.text,
    textAlign: "center",
    lineHeight: verticalScale(16),
    marginTop: verticalScale(8),
    marginBottom: verticalScale(20),
  },

  popupPrimaryButton: {
    width: "100%",
    backgroundColor: Colors.primary,
    paddingVertical: verticalScale(12),
    borderRadius: scale(20),
    alignItems: "center",
  },

  popupPrimaryButtonText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: scale(12),
  },

  popupSecondaryButton: {
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(5),
  },

  popupSecondaryButtonText: {
    color: Colors.primary,
    fontFamily: Fonts.medium,
    fontSize: scale(11),
  },
});
