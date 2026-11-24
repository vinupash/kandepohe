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
import SearchFilter from "../../../components/searchfilter";
import { mockProfiles } from "../../../mocks/profile_data";
import ShortlistProfileCard from "../../../components/shortlistprofilecard";
import MembershipPopup from "../../../components/membershippopup";

const ShortlistProfile = () => {
  const [isMember, setIsMember] = useState(true);
  const [profiles, setProfiles] = useState(mockProfiles);
  const [search, setSearch] = useState("");
  const [showMembershipPopup, setShowMembershipPopup] = useState(false);

  const handleOpenProfile = (id: string) => {
    console.log("Open profile:", id);
    if (!isMember) {
      setShowMembershipPopup(true);
      return;
    }
    router.push("/profileview/profileview");

    // router.push({
    //   pathname: "/profile/[id]",
    //   params: { id },
    // });
  };

  const handleRemoveProfile = (id: string) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={CommonStyles.container}
        edges={["left", "right", "top", "bottom"]}
      >
        <Header
          backButton={false}
          onPress={() => {}}
          screenTitle="Shortlisted Profiles"
          isLogo={false}
        />
        <SearchFilter
          value={search}
          onChangeText={setSearch}
          placeholder="Search by name, ID..."
        />
        <FlatList
          data={profiles}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <ShortlistProfileCard
                id={item.id}
                name={item.name}
                age={item.age}
                location={item.location}
                image={item.image[0]}
                isMember={isMember}
                openProfile={() => handleOpenProfile(item.id)}
                onRemove={() => {}}
                // openProfile={() => handleOpenProfile(item.id)}
                // onRemove={() => handleRemoveProfile(item.id)}
              />
            </View>
          )}
        />
        {/* Custom Membership Popup */}
        {showMembershipPopup && (
          <MembershipPopup
            viewPlans={() => {
              setShowMembershipPopup(false);
              router.push("/Membership/membershipplans");
            }}
            showPopup={() => setShowMembershipPopup(false)}
            maybeLater={() => setShowMembershipPopup(false)}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ShortlistProfile;

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(25),
  },

  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: verticalScale(15),
  },

  cardWrapper: {
    width: "48%",
  },

  // Custom Membership Popup
  popupOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.65)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(25),
    zIndex: 10,
  },

  popupContainer: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: scale(18),
    paddingHorizontal: scale(22),
    paddingTop: verticalScale(28),
    paddingBottom: verticalScale(20),
    alignItems: "center",
  },

  popupCloseButton: {
    position: "absolute",
    top: verticalScale(12),
    right: scale(12),
    padding: scale(5),
  },

  popupIconWrapper: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: verticalScale(15),
  },

  popupTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: scale(17),
    color: Colors.black,
    textAlign: "center",
  },

  popupDescription: {
    fontFamily: Fonts.regular,
    fontSize: scale(11),
    color: Colors.text,
    textAlign: "center",
    lineHeight: verticalScale(16),
    marginTop: verticalScale(8),
    marginBottom: verticalScale(20),
  },

  popupPrimaryButton: {
    width: "100%",
    backgroundColor: Colors.primary,
    paddingVertical: verticalScale(12),
    borderRadius: scale(20),
    alignItems: "center",
  },

  popupPrimaryButtonText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: scale(12),
  },

  popupSecondaryButton: {
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(5),
  },

  popupSecondaryButtonText: {
    color: Colors.primary,
    fontFamily: Fonts.medium,
    fontSize: scale(11),
  },
});
