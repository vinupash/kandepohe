import { useCallback, useEffect, useRef, useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { scale, verticalScale } from "react-native-size-matters";
import { Image, type ImageSource } from "expo-image";

import { Colors, CommonStyles, Fonts, Shadows } from "../constants/theme";
import {
  CallIcon,
  CallLocked02Icon,
  DownloadIcon,
  LockKeyholeIcon,
  StarIcon,
  UserCheckIcon,
  XIcon,
} from "./icons";
import { router } from "expo-router";

interface ProfileCardProps {
  name: string;
  image: ImageSource[];
  height: number;
  age: number;
  onPress: () => void;

  professional?: string;
  location?: string;

  // Membership
  isMember: boolean;
  onMembershipPress?: () => void;

  // Profile actions
  onCall?: () => void;
  onShortlist?: (shortlisted: boolean) => void;
  onDownload?: () => void;
  handleImagePress: () => void;

  isVerified?: boolean;
}

const AUTO_SLIDE_INTERVAL = 10000;

const ProfileCard = ({
  name,
  image,
  height,
  age,
  onPress,
  professional = "Professional",
  location = "Location",
  isMember,
  onMembershipPress,
  onCall,
  onShortlist,
  onDownload,
  isVerified = false,
  handleImagePress,
}: ProfileCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isShortlisted, setIsShortlisted] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [showMembershipPopup, setShowMembershipPopup] = useState(false);

  const imageListRef = useRef<FlatList<ImageSource>>(null);

  const { width: screenWidth } = useWindowDimensions();

  const images = image?.length ? image : [];
  const imageWidth = cardWidth || screenWidth;

  // Auto image slider
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((previousIndex) => {
        const nextIndex = (previousIndex + 1) % images.length;

        imageListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });

        return nextIndex;
      });
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [images.length]);

  // Update active pagination dot
  const handleImageScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const index = Math.round(offsetX / imageWidth);

      setActiveIndex(index);
    },
    [imageWidth],
  );

  // Call action
  const handleCall = () => {
    if (!isMember) {
      setShowMembershipPopup(true);
      return;
    }

    onCall?.();
  };

  // Shortlist action
  const handleShortlist = () => {
    const newValue = !isShortlisted;

    setIsShortlisted(newValue);
    onShortlist?.(newValue);
  };

  // Download action
  const handleDownload = () => {
    if (!isMember) {
      setShowMembershipPopup(true);
      return;
    }

    onDownload?.();
  };

  // Navigate to membership plans
  const handleViewPlans = () => {
    setShowMembershipPopup(false);
    router.push("/Membership/membershipplans");
    onMembershipPress?.();
  };

  return (
    <View
      onLayout={(event) => {
        setCardWidth(event.nativeEvent.layout.width);
      }}
      style={[styles.profileCard, { height }]}
    >
      {/* Image Slider */}
      <FlatList
        ref={imageListRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        scrollEnabled={images.length > 1}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleImageScroll}
        style={styles.imageSlider}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleImagePress}
            style={{ width: imageWidth, height: "100%" }}
          >
            <Image
              source={item}
              contentFit="cover"
              transition={300}
              blurRadius={isMember ? 0 : 25}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        )}
      />

      {/* Pagination Dots */}
      {images.length > 1 && (
        <View style={styles.paginationContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                activeIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>
      )}

      {isVerified && (
        <View style={styles.verifiedBadge}>
          <UserCheckIcon size={scale(13)} color={Colors.primary} />

          <Text style={styles.verifiedText}>Verified</Text>
        </View>
      )}

      {/* Bottom Gradient */}
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.98)"]}
        locations={[0, 1]}
        style={styles.profileOverlay}
        pointerEvents="box-none"
      >
        {/* Profile Details */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={onPress}
          style={styles.profileDetailsWrapper}
        >
          <View style={styles.profileNameWrapper}>
            <Text style={styles.profileName}>{name},</Text>

            <Text style={styles.profileName}>{age}</Text>
          </View>

          <View style={styles.profileInfoRow}>
            <Text style={styles.profileText}>Professional:</Text>

            <Text style={styles.profileText}>{professional}</Text>
          </View>

          <View style={styles.profileInfoRow}>
            <Text style={styles.profileText}>Location:</Text>

            <Text style={styles.profileText}>{location}</Text>
          </View>

          <View style={styles.profileInfoRow}>
            <Text style={styles.profileText}>{"Unmarried"}</Text>
          </View>
        </TouchableOpacity>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: verticalScale(40),
              height: verticalScale(40),
              borderRadius: verticalScale(20),
              borderWidth: 1,
              borderColor: Colors.success,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={handleCall}
          >
            {isMember ? (
              <CallIcon size={verticalScale(18)} color={Colors.success} />
            ) : (
              <CallLocked02Icon
                size={verticalScale(18)}
                color={Colors.success}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: verticalScale(40),
              height: verticalScale(40),
              borderRadius: verticalScale(20),
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: Colors.primary,
              backgroundColor: isShortlisted ? "transparent" : Colors.primary,
            }}
            onPress={handleShortlist}
          >
            <StarIcon color={isShortlisted ? Colors.primary : Colors.white} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: verticalScale(40),
              height: verticalScale(40),
              borderRadius: verticalScale(20),
              // backgroundColor: "#2878D0",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#2878D0",
            }}
            onPress={handleDownload}
          >
            <DownloadIcon size={verticalScale(20)} color={"#2878D0"} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: verticalScale(40),
              height: verticalScale(40),
              borderRadius: verticalScale(20),
              // backgroundColor: "#2878D0",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#FF0000",
            }}
            // onPress={handleDownload}
          >
            <XIcon size={verticalScale(20)} color={"#FF0000"} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Custom Membership Popup */}
      {showMembershipPopup && (
        <View style={styles.popupOverlay}>
          <View style={styles.popupContainer}>
            {/* Close Button */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.popupCloseButton}
              onPress={() => setShowMembershipPopup(false)}
            >
              <XIcon size={scale(20)} color={Colors.black} />
            </TouchableOpacity>

            {/* Lock Icon */}
            <View style={styles.popupIconWrapper}>
              <LockKeyholeIcon size={scale(24)} color={Colors.white} />
            </View>

            <Text style={styles.popupTitle}>Premium Membership</Text>

            <Text style={styles.popupDescription}>
              Unlock contact details and download complete profile information
              by becoming a premium member.
            </Text>

            {/* View Plans */}
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.popupPrimaryButton}
              onPress={handleViewPlans}
            >
              <Text style={styles.popupPrimaryButtonText}>
                View Membership Plans
              </Text>
            </TouchableOpacity>

            {/* Maybe Later */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.popupSecondaryButton}
              onPress={() => setShowMembershipPopup(false)}
            >
              <Text style={styles.popupSecondaryButtonText}>Maybe Later</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProfileCard;

// Styles
const styles = StyleSheet.create({
  profileCard: {
    width: "100%",
    borderRadius: verticalScale(10),
    overflow: "hidden",
    backgroundColor: "#808080",
  },

  imageSlider: {
    width: "100%",
    height: "100%",
  },

  profileImage: {
    height: "100%",
  },

  // Pagination
  paginationContainer: {
    position: "absolute",
    top: verticalScale(12),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: scale(8),
    zIndex: 2,
  },

  paginationDot: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(4),
    backgroundColor: Colors.white,
  },

  activeDot: {
    width: scale(24),
    backgroundColor: Colors.primary,
  },

  // Bottom Gradient
  profileOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(15),
    minHeight: verticalScale(190),
    height: verticalScale(250),
  },

  profileDetailsWrapper: {
    gap: verticalScale(1),
  },

  profileNameWrapper: {
    flexDirection: "row",
    gap: verticalScale(5),
    justifyContent: "center",
  },

  profileName: {
    color: Colors.white,
    fontSize: scale(22),
    fontFamily: Fonts.semiBold,
    textAlign: "center",
  },

  profileInfoRow: {
    flexDirection: "row",
    gap: verticalScale(5),
    justifyContent: "center",
  },

  profileText: {
    fontFamily: Fonts.regular,
    color: Colors.white,
    fontSize: verticalScale(12),
  },

  // Action Buttons
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(14),
    gap: scale(10),
  },

  actionButton: {
    flex: 1,
    minHeight: verticalScale(38),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: scale(5),
    backgroundColor: "rgba(255,255,255,0.20)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.45)",
    borderRadius: scale(8),
    paddingHorizontal: scale(5),
  },

  shortlistedButton: {
    backgroundColor: Colors.white,
    borderColor: Colors.white,
  },

  actionText: {
    color: Colors.white,
    fontSize: scale(10),
    fontFamily: Fonts.medium,
  },

  shortlistedText: {
    color: Colors.primary,
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

  verifiedBadge: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    gap: scale(3),
    backgroundColor: "rgba(230, 49, 87, 0.15)",
    paddingHorizontal: scale(7),
    paddingVertical: verticalScale(3),
    borderRadius: scale(12),
    top: scale(12),
    left: scale(12),
  },

  verifiedText: {
    color: Colors.primary,
    fontSize: scale(9),
    fontFamily: Fonts.regular,
  },
});
