import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Colors, Fonts } from "../constants/theme";
import { CheckIcon, IndianRupeeIcon, XIcon } from "./icons";

interface MembershipPlan {
  id: string;
  name: string;
  duration: number;
  price: number;
  interestLimit: number;
  priority: number;
  profileHighlight: boolean;
  advancedFilters: boolean;
  profileViewers: boolean;
}

interface MembershipPlanCardProps {
  plan: MembershipPlan;
  onPressPay: (plan: MembershipPlan) => void;
}

const MembershipPlanCard = ({ plan, onPressPay }: MembershipPlanCardProps) => {
  const features = [
    {
      title: `${plan.interestLimit} Interests`,
      enabled: true,
    },
    {
      title: "Priority Profile Listing",
      enabled: true,
    },
    {
      title: "Profile Highlight",
      enabled: plan.profileHighlight,
    },
    {
      title: "Advanced Filters",
      enabled: plan.advancedFilters,
    },
    {
      title: "Who Viewed Your Profile",
      enabled: plan.profileViewers,
    },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.planName}>{plan.name}</Text>
          <Text style={styles.duration}>{plan.duration} Months Membership</Text>
        </View>

        <View style={styles.priceContainer}>
          <View
            style={{
              flexDirection: "row",
              gap: scale(0),
              alignItems: "center",
            }}
          >
            <IndianRupeeIcon size={scale(22)} color={Colors.primary} />
            <Text style={styles.price}>{plan.price}</Text>
          </View>
          <Text style={styles.priceLabel}>Total Price</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <Text style={styles.featureHeading}>Plan Benefits</Text>

      {features.map((feature, index) => (
        <View key={index} style={styles.featureRow}>
          <View style={styles.featureIcon}>
            {feature.enabled ? (
              <CheckIcon
                size={scale(20)}
                color={feature.enabled ? "#16A34A" : Colors.error}
              />
            ) : (
              <XIcon
                size={scale(20)}
                color={feature.enabled ? "#16A34A" : Colors.error}
              />
            )}
          </View>

          <Text
            style={[
              styles.featureText,
              !feature.enabled && styles.disabledFeature,
            ]}
          >
            {feature.title}
          </Text>
        </View>
      ))}

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.payButton}
        onPress={() => onPressPay(plan)}
      >
        <Text style={styles.payButtonText}>Pay Now</Text>
        <Text
          style={[
            styles.payButtonText,
            { fontSize: scale(16), fontFamily: Fonts.semiBold },
          ]}
        >
          ₹{plan.price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MembershipPlanCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: scale(14),
    padding: scale(16),
    marginBottom: verticalScale(16),
    borderWidth: 1,
    borderColor: "#EAEAEA",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  planName: {
    fontSize: scale(19),
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  duration: {
    fontSize: scale(12),
    fontFamily: Fonts.regular,
    color: "#777",
    marginTop: verticalScale(4),
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  price: {
    fontSize: scale(23),
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  priceLabel: {
    fontSize: scale(11),
    fontFamily: Fonts.regular,
    color: "#777",
  },
  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: verticalScale(14),
  },
  featureHeading: {
    fontSize: scale(14),
    fontFamily: Fonts.semiBold,
    color: Colors.black,
    marginBottom: verticalScale(10),
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(9),
  },
  featureIcon: {
    width: scale(22),
    fontSize: scale(15),
    fontFamily: Fonts.bold,
  },
  featureText: {
    fontSize: scale(13),
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  disabledFeature: {
    color: "#A0A0A0",
  },
  payButton: {
    backgroundColor: Colors.primary,
    borderRadius: scale(30),
    paddingVertical: verticalScale(12),
    alignItems: "center",
    marginTop: verticalScale(12),
    flexDirection: "row",
    gap: scale(5),
    justifyContent: "center",
    alignContent: "center",
  },
  payButtonText: {
    color: Colors.white,
    fontSize: scale(14),
    fontFamily: Fonts.light,
  },
});
