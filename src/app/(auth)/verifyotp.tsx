import { useEffect, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { verticalScale } from "react-native-size-matters";

import { Colors, CommonStyles } from "../../../constants/theme";
import CustomInput from "../../../components/custominput";
import { router } from "expo-router";
import CustomButton from "../../../components/custombutton";
import OTPInput from "../../../components/otpinput";
import CustomBack from "../../../components/customback";
import { push } from "expo-router/build/global-state/router.js";

const verifyOTP = () => {
  const [timeLeft, setTimeLeft] = useState<number>(10);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds,
    ).padStart(2, "0")}`;
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={CommonStyles.container}
        edges={["left", "right", "top"]}
      >
        <KeyboardAvoidingView
          style={CommonStyles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={[
              CommonStyles.scrollContent,
              // { paddingBottom: verticalScale(30) },
            ]}
            keyboardDismissMode="on-drag"
          >
            <View style={CommonStyles.content}>
              <CustomBack
                size={verticalScale(20)}
                onPress={() => router.push("/(auth)/forgotpassword")}
              />
              <View
                style={[
                  CommonStyles.contentWrapper,
                  {
                    // paddingTop: verticalScale(10),
                    marginBottom: verticalScale(10),
                  },
                ]}
              >
                <Text
                  style={[
                    CommonStyles.contentWrapperTitle,
                    { textAlign: "left", color: Colors.text },
                  ]}
                >
                  OTP पडताळणी
                </Text>
                <Text
                  style={[
                    CommonStyles.contentWrapperSubTitle,
                    { textAlign: "left", color: Colors.text },
                  ]}
                >
                  आम्ही तुमच्या jhone@gmail.com या ईमेल पत्त्यावर OTP पाठवला
                  आहे. तुमचे खाते सत्यापित करण्यासाठी खालील OTP प्रविष्ट करा.
                </Text>
              </View>
              <OTPInput
                onChange={(value) => {
                  // setOtp(value);
                  console.log("Entered OTP:", value);
                }}
              />

              <View style={CommonStyles.dontReceivedWrapper}>
                <Text style={CommonStyles.dontReceivedText}>
                  Don't receive OTP?
                </Text>

                <View style={CommonStyles.resendWrapper}>
                  <TouchableOpacity
                    disabled={timeLeft > 0}
                    activeOpacity={0.8}
                    onPress={() => {
                      console.log("Resend OTP");

                      // Call resend OTP API here

                      setTimeLeft(180);
                    }}
                  >
                    <Text
                      style={[
                        CommonStyles.resendText,
                        timeLeft > 0 && CommonStyles.resendDisabled,
                      ]}
                    >
                      Resend
                    </Text>
                  </TouchableOpacity>

                  <Text style={CommonStyles.resendTimer}>
                    ({formatTime(timeLeft)})
                  </Text>
                </View>
              </View>

              <CustomButton
                styleGradient={{ borderRadius: verticalScale(30) }}
                title="Continue"
                onPress={() => router.push("/newpassword")}
                loading={false}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default verifyOTP;
