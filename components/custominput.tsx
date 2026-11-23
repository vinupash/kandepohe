import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
// import { Feather } from "@expo/vector-icons";
import { Colors, CommonStyles, Fonts } from "../constants/theme";
import { EyeOff, EyeOpen } from "./icons";

interface CustomInputProps {
  title: string;
  placeholder: string;
  type?: "text" | "password";
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  // value: string;
  // onChangeText: (text: string) => void;
}

const CustomInput = ({
  title,
  placeholder,
  type = "text",
  keyboardType = "default",
  editable = true,
  // value,
  // onChangeText,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: editable ? "#fafafa" : "#e1e1e1",
            },
          ]}
          placeholder={placeholder}
          secureTextEntry={isPassword && !showPassword}
          placeholderTextColor="#999999"
          keyboardType={keyboardType}
          editable={editable}
          // value={value}
          // onChangeText={onChangeText}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.showButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={verticalScale(20)} />
            ) : (
              <EyeOpen size={verticalScale(20)} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    gap: verticalScale(3),
    flex: 1,
  },
  title: {
    fontFamily: Fonts.semiBold,
    color: Colors.text,
    fontSize: verticalScale(12),
    marginLeft: scale(5),
  },
  inputWrapper: {
    height: verticalScale(45),
    // borderWidth: 1,
    // borderColor: "#fafafa",
    borderRadius: verticalScale(10),
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: verticalScale(12),
    fontFamily: "Poppins-Regular",
    fontSize: verticalScale(12),
    lineHeight: verticalScale(20),
    color: Colors.text,
  },
  showButton: {
    // paddingHorizontal: verticalScale(12),
    width: verticalScale(40),
    overflow: "hidden",
    backgroundColor: "#fafafa",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
