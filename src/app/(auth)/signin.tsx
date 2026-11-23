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

const SignIn = () => {
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
              <View
                style={[
                  CommonStyles.contentWrapper,
                  {
                    paddingTop: verticalScale(78),
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
                  पुन्हा स्वागत आहे!
                </Text>
                <Text
                  style={[
                    CommonStyles.contentWrapperSubTitle,
                    { textAlign: "left", color: Colors.text },
                  ]}
                >
                  तुमच्या आयुष्याच्या सुंदर सहप्रवासासाठी योग्य जीवनसाथी
                  शोधण्याचा प्रवास सुरू ठेवा.
                </Text>
              </View>
              <CustomInput
                title="Email Address"
                type="text"
                placeholder="Enter Email Address"
                keyboardType="email-address"
                // editable="false"
              />
              <CustomInput
                title="Password"
                type="password"
                placeholder="Enter Password"
                keyboardType="default"
              />

              <CustomButton
                styleGradient={{ borderRadius: verticalScale(30) }}
                title="Log In"
                onPress={() => router.replace("/(tabs)/home")}
                loading={false}
              />

              <TouchableOpacity
                style={CommonStyles.forgotPassword}
                activeOpacity={0.8}
                onPress={() => router.push("/(auth)/forgotpassword")}
              >
                <Text style={CommonStyles.forgotPasswordText}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <View style={CommonStyles.separator} />

              <TouchableOpacity
                style={CommonStyles.dontHaveAccount}
                activeOpacity={0.8}
                onPress={() => router.push("/(auth)/registration")}
              >
                <Text style={CommonStyles.dontHaveAccountText}>
                  New to Kandepohe?{" "}
                  <Text
                    style={{
                      color: "#e63157",
                      fontFamily: "Poppins-SemiBold",
                    }}
                  >
                    Create an Account
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignIn;
