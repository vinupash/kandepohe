import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { verticalScale } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";

import { Colors, CommonStyles } from "../../constants/theme";
import { images } from "../../constants/images";
import CustomButton from "../../components/custombutton";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={CommonStyles.container} edges={["left", "right"]}>
        <View style={CommonStyles.container}>
          <Image
            source={images.Welcome}
            contentFit="cover"
            style={StyleSheet.absoluteFill}
          />

          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.98)"]}
            locations={[0, 0.5, 1]}
            style={CommonStyles.gradient}
            pointerEvents="none"
          />

          <View style={CommonStyles.buttonContainer}>
            <View
              style={[
                CommonStyles.contentWrapper,
                { marginBottom: verticalScale(30) },
              ]}
            >
              <Text
                style={[
                  CommonStyles.contentWrapperTitle,
                  {
                    textAlign: "center",
                    color: Colors.white,
                    marginBottom: verticalScale(10),
                  },
                ]}
              >
                तुमच्या आयुष्याचा नवा सोबती
              </Text>
              <Text
                style={[
                  CommonStyles.contentWrapperSubTitle,
                  { textAlign: "center", color: Colors.white },
                ]}
              >
                मराठी समाजातील योग्य स्थळे शोधा आणि तुमच्या नव्या प्रवासाला
                सुरुवात करा.
              </Text>
            </View>
            <CustomButton
              styleGradient={{ borderRadius: verticalScale(30) }}
              title="Get Started"
              onPress={() => router.replace("/signin")}
              loading={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
