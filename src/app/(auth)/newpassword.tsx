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

const NewPassword = () => {
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
                onPress={() => router.push("/verifyotp")}
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
                  नवीन पासवर्ड सेट करा
                </Text>
                <Text
                  style={[
                    CommonStyles.contentWrapperSubTitle,
                    { textAlign: "left", color: Colors.text },
                  ]}
                >
                  तुमचा नवीन पासवर्ड तयार करा. जर तुम्हाला तुमचा पासवर्ड आठवत
                  नसेल, तर कृपया ‘पासवर्ड विसरलात?’ हा पर्याय निवडा.
                </Text>
              </View>
              <CustomInput
                title="Password"
                type="password"
                placeholder="Enter Password"
                keyboardType="default"
              />

              <CustomInput
                title="Confirm New Password"
                type="password"
                placeholder="Enter Confirm Password"
                keyboardType="default"
              />

              <CustomButton
                styleGradient={{ borderRadius: verticalScale(30) }}
                title="Save New Password"
                onPress={() => router.push("/signin")}
                loading={false}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default NewPassword;
