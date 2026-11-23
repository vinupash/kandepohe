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
import CustomBack from "../../../components/customback";

const ForgotPassword = () => {
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
                onPress={() => router.push("/(auth)/signin")}
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
                  पासवर्ड विसरलात?
                </Text>
                <Text
                  style={[
                    CommonStyles.contentWrapperSubTitle,
                    { textAlign: "left", color: Colors.text },
                  ]}
                >
                  {/*आम्ही तुमच्या jhone@gmail.com या ईमेल पत्त्यावर OTP पाठवला
                  आहे. तुमचे खाते सत्यापित करण्यासाठी खालील OTP प्रविष्ट करा.*/}
                  कृपया तुमचा ईमेल पत्ता प्रविष्ट करा. पासवर्ड रीसेट करण्यासाठी
                  पुढील टप्प्यात आम्ही तुम्हाला OTP पाठवू.
                </Text>
              </View>
              <CustomInput
                title="Email Address"
                type="text"
                placeholder="Enter Email Address"
                keyboardType="email-address"
                // editable="false"
              />

              <CustomButton
                styleGradient={{ borderRadius: verticalScale(30) }}
                title="Continue"
                onPress={() => router.replace("/verifyotp")}
                loading={false}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ForgotPassword;
