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
import Terms from "../../../components/terms";
import { termsData } from "../../../mocks/terms_data";

const TermsCondition = () => {
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
                onPress={() => router.back()}
              />
              <View style={[CommonStyles.contentWrapper]}>
                <Text
                  style={[
                    CommonStyles.contentWrapperTitle,
                    { textAlign: "left", color: Colors.text },
                  ]}
                >
                  अटी व शर्ती
                </Text>
                <Text
                  style={[
                    CommonStyles.contentWrapperSubTitle,
                    { textAlign: "left", color: Colors.text },
                  ]}
                >
                  सुतार समाज विवाह मंच या ॲपमध्ये आपले स्वागत आहे. या ॲपचा वापर
                  करण्यापूर्वी कृपया खालील अटी व शर्ती काळजीपूर्वक वाचा. या ॲपचा
                  वापर करून किंवा खाते तयार करून आपण या अटींशी सहमत असल्याचे
                  मान्य करता.
                </Text>
              </View>
              <View style={CommonStyles.separator} />
              <View>
                {termsData.map((term, index) => (
                  <Terms
                    key={term.id}
                    title={term.title}
                    descriptions={term.terms.map((item) => item.terms_1)}
                    isLast={index === termsData.length - 1}
                  />
                ))}
              </View>
              <CustomButton
                styleGradient={{ borderRadius: verticalScale(30) }}
                title="Continue"
                onPress={() => router.back()}
                loading={false}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default TermsCondition;
