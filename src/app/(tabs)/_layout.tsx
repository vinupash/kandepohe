import { useEffect, useMemo, useRef } from "react";
import { Tabs } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { Colors, Fonts } from "../../../constants/theme";
import {
  BadgeInfoIcon,
  HomeIcon,
  SparklesIcon,
  UserIcon,
} from "../../../components/icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        animation: "shift",

        tabBarStyle: {
          height: verticalScale(60),
          backgroundColor: Colors.white,
          borderTopWidth: 0,
          borderTopColor: "transparent",
          elevation: 0, // Android: remove shadow
          shadowOpacity: 0, // iOS: remove shadow
          paddingBottom: verticalScale(10),
          paddingTop: verticalScale(10),
        },
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View collapsable={false} style={styles.tabBarWrapper}>
              <HomeIcon
                size={verticalScale(16)}
                color={focused ? Colors.primary : Colors.placeholder}
              />

              <Text
                style={[styles.tabBarTitle, focused && { color: "#e63157" }]}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      {/* About */}
      <Tabs.Screen
        name="shortlistprofile"
        options={{
          title: "Shortlist Profile",
          tabBarIcon: ({ focused }) => (
            <View collapsable={false} style={styles.tabBarWrapper}>
              <SparklesIcon
                size={verticalScale(16)}
                color={focused ? Colors.primary : Colors.placeholder}
              />

              <Text
                style={[styles.tabBarTitle, focused && { color: "#e63157" }]}
              >
                Shortlist
              </Text>
            </View>
          ),
        }}
      />

      {/* Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View collapsable={false} style={styles.tabBarWrapper}>
              <UserIcon
                size={verticalScale(16)}
                color={focused ? Colors.primary : Colors.placeholder}
              />

              <Text
                style={[styles.tabBarTitle, focused && { color: "#e63157" }]}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />

      {/* About */}
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ focused }) => (
            <View collapsable={false} style={styles.tabBarWrapper}>
              <BadgeInfoIcon
                size={verticalScale(16)}
                color={focused ? Colors.primary : Colors.placeholder}
              />

              <Text
                style={[styles.tabBarTitle, focused && { color: "#e63157" }]}
              >
                About
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  tabBarWrapper: {
    justifyContent: "center",
    alignItems: "center",
    gap: verticalScale(1),
    width: scale(60),
    height: scale(40),
  },

  tabBarTitle: {
    fontSize: verticalScale(8),
    fontFamily: Fonts.regular,
    color: Colors.placeholder,
    marginTop: scale(2),
    textAlign: "center",
  },

  chatBubble: {
    flex: 1,
    backgroundColor: "#DCF8C6",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  primaryBtn: {
    flex: 1,
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
});
