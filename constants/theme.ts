import { Platform, ViewStyle, TextStyle } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export const Colors = {
  primary: "#e63157",
  secondary: "#208AEF",
  background: "#FFFFFF",
  text: "#333333",
  placeholder: "#999999",
  border: "#D9D9D9",
  white: "#FFFFFF",
  black: "#000000",
  success: "#28A745",
  error: "#DC3545",
  borderColor: "",
};

export const Fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
  light: "Poppins-Light",
};

export const Shadows = {
  small: {
    // iOS
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: scale(5),
    },
    shadowOpacity: 0.2,
    shadowRadius: scale(4),

    // Android
    elevation: 5,
  },
};

type CommonStylesType = {
  container: ViewStyle;
  gradient: ViewStyle;
  buttonContainer: ViewStyle;
  contentWrapperTitle: TextStyle;
  contentWrapperSubTitle: TextStyle;
  contentWrapper: ViewStyle;
  keyboardAvoidingView: ViewStyle;
  scrollContent: ViewStyle;
  content: ViewStyle;
  forgotPassword: ViewStyle;
  forgotPasswordText: TextStyle;
  separator: ViewStyle;
  dontHaveAccount: ViewStyle;
  dontHaveAccountText: TextStyle;
  dontReceivedWrapper: ViewStyle;
  dontReceivedText: TextStyle;
  resendWrapper: ViewStyle;
  resendText: TextStyle;
  resendDisabled: TextStyle;
  resendTimer: TextStyle;
  inputDOB: ViewStyle;
  textDOB: TextStyle;
  placeholderDOB: TextStyle;
  labelDOB: TextStyle;
  termsLink: TextStyle;
  checkbox: ViewStyle;
  checkBoxContainer: ViewStyle;
  selectGender: ViewStyle;
  termsDescriptionWrapper: ViewStyle;
  termsDescription: TextStyle;
  checked: ViewStyle;
  checkmark: TextStyle;
  filterWrapper: ViewStyle;
  filterCheckBoxWrapper: ViewStyle;
  filterCheckBox: ViewStyle;
  profileImageWrapper: ViewStyle;
  emptyContainer: ViewStyle;
  emptyTitle: TextStyle;
  emptySubtitle: TextStyle;
  sheetBackground: ViewStyle;
  sheetIndicator: ViewStyle;
  sheetContent: ViewStyle;
  sheetTitle: TextStyle;
  closeButton: ViewStyle;
  sheetHeader: ViewStyle;
};
export const CommonStyles: CommonStylesType = {
  container: {
    flex: 1,
    width: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundColor: Colors.white,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: verticalScale(800),
    zIndex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: verticalScale(60),
    left: scale(20),
    right: scale(20),
    zIndex: 2,
    elevation: 5,
  },
  contentWrapper: {
    flexDirection: "column",
    gap: verticalScale(5),
    // marginBottom: verticalScale(30),
  },
  contentWrapperTitle: {
    fontFamily: Fonts.bold,
    fontSize: verticalScale(20),
    lineHeight: verticalScale(30),
    marginBottom: verticalScale(8),
  },
  contentWrapperSubTitle: {
    fontFamily: Fonts.regular,
    fontSize: verticalScale(14),
    lineHeight: verticalScale(20),
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: verticalScale(30),
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    gap: verticalScale(20),
    backgroundColor: Colors.white,
    paddingHorizontal: verticalScale(20),
  },
  forgotPassword: {
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    fontSize: verticalScale(12),
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  dontHaveAccount: {
    alignItems: "center",
  },
  dontHaveAccountText: {
    fontSize: verticalScale(12),
    fontFamily: Fonts.regular,
    color: Colors.text,
    textAlign: "center",
  },
  dontReceivedWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: scale(5),
  },
  dontReceivedText: {
    fontSize: scale(14),
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  resendWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(3),
  },
  resendText: {
    fontSize: scale(14),
    fontFamily: Fonts.semiBold,
    color: "#1E8E3E",
  },
  resendDisabled: {
    color: Colors.primary,
  },
  resendTimer: {
    fontSize: scale(14),
    fontFamily: Fonts.regular,
    color: "#666666",
  },
  selectGender: {
    height: verticalScale(40),
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: verticalScale(10),
    paddingHorizontal: scale(12),
    justifyContent: "center",
  },
  labelDOB: {
    fontFamily: "Poppins-SemiBold",
    color: Colors.text,
    fontSize: verticalScale(12),
    marginLeft: scale(5),
  },
  inputDOB: {
    height: verticalScale(45),
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: verticalScale(10),
    paddingHorizontal: scale(12),
    justifyContent: "center",
    backgroundColor: "#fafafa",
  },
  textDOB: {
    fontFamily: Fonts.regular,
    color: Colors.text,
    fontSize: verticalScale(12),
    lineHeight: verticalScale(18),
  },
  placeholderDOB: {
    fontFamily: Fonts.regular,
    color: "#999999",
    fontSize: verticalScale(12),
  },
  termsDescriptionWrapper: {
    flexDirection: "row",
    gap: scale(6),
    paddingVertical: verticalScale(2),
    // marginBottom: scale(10),
    // borderBottomWidth: 1,
    // borderBottomColor: "#E5E7EB",
    width: "100%",
  },
  termsDescription: {
    fontSize: verticalScale(10),
    lineHeight: verticalScale(16),
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
  },
  checkbox: {
    width: scale(20),
    height: scale(20),
    borderWidth: 1.5,
    borderColor: "#BDBDBD",
    borderRadius: scale(4),
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  checkmark: {
    color: Colors.white,
    fontSize: scale(14),
  },
  // label: {
  //   fontFamily: "Poppins-SemiBold",
  //   color: "#1A1A1A",
  //   fontSize: verticalScale(12),
  // },
  termsLink: {
    color: Colors.primary,
    fontFamily: Fonts.semiBold,
  },
  filterWrapper: {
    width: "100%",
    alignSelf: "stretch",
    gap: verticalScale(10),
    overflow: "hidden",
    paddingBottom: verticalScale(50),
  },
  filterCheckBoxWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: scale(8),
  },
  filterCheckBox: {
    width: scale(16),
    height: scale(16),
    borderWidth: 1.5,
    flexShrink: 0,
    marginTop: verticalScale(2),
  },
  // Home profile image
  profileImageWrapper: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(20),
  },
  emptyTitle: {
    fontSize: scale(18),
    fontFamily: "Poppins-SemiBold",
    color: "#222222",
    textAlign: "center",
  },
  emptySubtitle: {
    marginTop: verticalScale(8),
    fontSize: scale(13),
    color: "#777777",
    textAlign: "center",
  },
  // Bottom Sheet
  sheetBackground: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: verticalScale(20),
    borderTopRightRadius: verticalScale(20),
  },
  sheetIndicator: {
    backgroundColor: Colors.primary,
    width: 45,
  },
  sheetContent: {
    flex: 1,
    position: "relative",
  },
  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(10),
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: 1,
  },
  sheetTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: verticalScale(14),
    color: Colors.text,
  },
  closeButton: {
    padding: scale(4),
  },
};
