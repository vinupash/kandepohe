import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

import { Colors, CommonStyles, Fonts } from "../../../constants/theme";
import { router } from "expo-router";
import Header from "../../../components/header";

const ProfileView = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={CommonStyles.container}
        edges={["left", "right", "top", "bottom"]}
      >
        <Header
          backButton={true}
          onPress={() => router.back()}
          screenTitle="Profile View"
          isLogo={false}
        />
        <Text>Profile View</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ProfileView;
