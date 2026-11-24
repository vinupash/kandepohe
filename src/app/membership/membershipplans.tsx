import { useState } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import { router } from "expo-router";

import { Colors, CommonStyles, Fonts } from "../../../constants/theme";

import Header from "../../../components/header";
import MembershipPlanCard from "../../../components/membershipplancard";
import { membershipPlansData } from "../../../mocks/membershipplans_data";

const MembershipPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePayment = (plan: (typeof membershipPlansData)[number]) => {
    setSelectedPlan(plan.id);

    // router.push({
    //   pathname: "/Membership/payment",
    //   params: {
    //     planId: plan.id,
    //     planName: plan.name,
    //     amount: String(plan.price),
    //     duration: String(plan.duration),
    //   },
    // });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={CommonStyles.container}
        edges={["left", "right", "top", "bottom"]}
      >
        <Header
          backButton
          onPress={() => router.back()}
          screenTitle="Membership Plans"
          isLogo={false}
        />

        <FlatList
          data={membershipPlansData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MembershipPlanCard plan={item} onPressPay={handlePayment} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.intro}>
              <Text style={styles.heading}>Choose Your Membership</Text>
              <Text style={styles.subtitle}>
                Select a plan to unlock more features and connect with the right
                profiles.
              </Text>
            </View>
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MembershipPlans;

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(18),
    paddingBottom: verticalScale(10),
  },
  intro: {
    marginBottom: verticalScale(20),
  },
  heading: {
    fontSize: scale(20),
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  subtitle: {
    fontSize: scale(13),
    fontFamily: Fonts.regular,
    color: "#777",
    marginTop: verticalScale(6),
    lineHeight: verticalScale(20),
  },
});
