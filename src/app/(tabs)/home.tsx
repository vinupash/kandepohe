import { useState, useMemo, useCallback, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

import { Colors, CommonStyles, Fonts, Shadows } from "../../../constants/theme";

import Header from "../../../components/header";
import FilterView from "../../../components/filterview";
import ProfileCard from "../../../components/profilecard";

import { EraserIcon, XIcon } from "../../../components/icons/AppIcons";
import { mockProfiles } from "../../../mocks/profile_data";
import SelectDropdown from "../../../components/selectdropdown";
import { mockSelects } from "../../../mocks/select_data";

const Home = () => {
  // --------------------------------
  // Profile List
  // --------------------------------

  const [containerHeight, setContainerHeight] = useState(0);

  const verticalPadding = verticalScale(5);
  const profileGap = verticalScale(12);

  const profileHeight = Math.max(0, containerHeight - verticalPadding * 2);

  // --------------------------------
  // Bottom Sheet
  // --------------------------------

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["90%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
        pressBehavior="close"
      />
    ),
    [],
  );

  const handleOpenFilter = useCallback(() => {
    sheetRef.current?.snapToIndex(0);
    setActiveFilter("Height");
  }, []);

  const handleCloseFilter = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // --------------------------------
  // Filter Tabs
  // --------------------------------

  const filterTabs = [
    "Height",
    "Age",
    "Education",
    "Profession",
    "Location",
    "Marital Status",
    "Have Children",
    "Manglik",
    // "City",
    // "Employed In",
    "Diet",
  ];

  const [activeFilter, setActiveFilter] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<Record<string, any>>(
    {},
  );

  // Clear all filters
  const handleClearFilters = () => {
    setActiveFilter("");
    setSelectedFilters({});
    sheetRef.current?.close();
  };

  // Apply filters
  const handleApplyFilters = () => {
    console.log("Applied Filters:", selectedFilters);

    sheetRef.current?.close();
  };

  // --------------------------------
  // Filter Content cool
  // --------------------------------

  const [heightFrom, setHeightFrom] = useState<string | null>(null);
  const [heightTo, setHeightTo] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const renderFilterContent = () => {
    switch (activeFilter) {
      case "Height":
        return (
          <View
            style={{
              flexDirection: "column",
              gap: verticalScale(10),
            }}
          >
            <Text style={[styles.filterPlaceholder, { textAlign: "right" }]}>
              Height Filters
            </Text>

            <SelectDropdown
              data={mockSelects[1].height ?? []}
              value={heightFrom}
              setValue={setHeightFrom}
              label="Minimum Height"
            />

            <SelectDropdown
              data={mockSelects[1].height ?? []}
              value={heightTo}
              setValue={setHeightTo}
              label="Maximum Height"
            />
          </View>
        );

      case "Age":
        return (
          <View
            style={{
              flexDirection: "column",
              gap: verticalScale(20),
            }}
          >
            <Text style={[styles.filterPlaceholder, { textAlign: "right" }]}>
              Age Filters
            </Text>

            <SelectDropdown
              data={mockSelects[1].height ?? []}
              value={heightFrom}
              setValue={setHeightFrom}
              label="Minimum Age"
            />

            <SelectDropdown
              data={mockSelects[1].height ?? []}
              value={heightTo}
              setValue={setHeightTo}
              label="Maximum Age"
            />
          </View>
        );

      case "Education":
        return (
          <View
            style={{
              width: "100%",
              alignSelf: "stretch",
              gap: verticalScale(10),
              overflow: "hidden",
              paddingBottom: verticalScale(50),
            }}
          >
            <Text style={[styles.filterPlaceholder, { textAlign: "right" }]}>
              Have Children
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[4].education?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: scale(8),
                }}
              >
                <View
                  style={[
                    CommonStyles.checkbox,
                    checked && CommonStyles.checked,
                    {
                      width: scale(16),
                      height: scale(16),
                      borderWidth: 1.5,
                      flexShrink: 0,
                      marginTop: verticalScale(2),
                    },
                  ]}
                >
                  {checked && <Text style={CommonStyles.checkmark}>✓</Text>}
                </View>

                <View style={{ flex: 1, minWidth: 0 }}>
                  <Text
                    style={[
                      CommonStyles.labelDOB,
                      {
                        fontFamily: Fonts.light,
                        fontSize: verticalScale(10),
                        lineHeight: verticalScale(16),
                        flexShrink: 1,
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );

      case "Profession":
        return (
          <View
            style={{
              width: "100%",
              alignSelf: "stretch",
              gap: verticalScale(10),
              overflow: "hidden",
              paddingBottom: verticalScale(50),
            }}
          >
            <Text style={[styles.filterPlaceholder, { textAlign: "right" }]}>
              Profession Filter
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[6].occupation?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: scale(8),
                }}
              >
                <View
                  style={[
                    CommonStyles.checkbox,
                    checked && CommonStyles.checked,
                    {
                      width: scale(16),
                      height: scale(16),
                      borderWidth: 1.5,
                      flexShrink: 0,
                      marginTop: verticalScale(2),
                    },
                  ]}
                >
                  {checked && <Text style={CommonStyles.checkmark}>✓</Text>}
                </View>

                <View style={{ flex: 1, minWidth: 0 }}>
                  <Text
                    style={[
                      CommonStyles.labelDOB,
                      {
                        fontFamily: Fonts.light,
                        fontSize: verticalScale(10),
                        lineHeight: verticalScale(16),
                        flexShrink: 1,
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );

      case "Location":
        return (
          <View
            style={{
              width: "100%",
              alignSelf: "stretch",
              gap: verticalScale(10),
              overflow: "hidden",
              paddingBottom: verticalScale(50),
            }}
          >
            <Text style={[styles.filterPlaceholder, { textAlign: "right" }]}>
              Location
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[16].maharashtraLocations?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: scale(8),
                }}
              >
                <View
                  style={[
                    CommonStyles.checkbox,
                    checked && CommonStyles.checked,
                    {
                      width: scale(16),
                      height: scale(16),
                      borderWidth: 1.5,
                      flexShrink: 0,
                      marginTop: verticalScale(2),
                    },
                  ]}
                >
                  {checked && <Text style={CommonStyles.checkmark}>✓</Text>}
                </View>

                <View style={{ flex: 1, minWidth: 0 }}>
                  <Text
                    style={[
                      CommonStyles.labelDOB,
                      {
                        fontFamily: Fonts.light,
                        fontSize: verticalScale(10),
                        lineHeight: verticalScale(16),
                        flexShrink: 1,
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );

      case "Marital Status":
        return (
          <View
            style={{
              width: "100%",
              alignSelf: "stretch",
              gap: verticalScale(10),
              overflow: "hidden",
            }}
          >
            <Text style={[styles.filterPlaceholder, { textAlign: "right" }]}>
              Marital Status
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[0].maritalStatus?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: scale(8),
                }}
              >
                <View
                  style={[
                    CommonStyles.checkbox,
                    checked && CommonStyles.checked,
                    {
                      width: scale(16),
                      height: scale(16),
                      borderWidth: 1.5,
                      flexShrink: 0,
                      marginTop: verticalScale(2),
                    },
                  ]}
                >
                  {checked && <Text style={CommonStyles.checkmark}>✓</Text>}
                </View>

                <View style={{ flex: 1, minWidth: 0 }}>
                  <Text
                    style={[
                      CommonStyles.labelDOB,
                      {
                        fontFamily: Fonts.light,
                        fontSize: verticalScale(10),
                        lineHeight: verticalScale(16),
                        flexShrink: 1,
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );

      case "Have Children":
        return (
          <View
            style={{
              width: "100%",
              alignSelf: "stretch",
              gap: verticalScale(10),
              overflow: "hidden",
            }}
          >
            <Text style={[styles.filterPlaceholder, { textAlign: "right" }]}>
              Have Children
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[0].maritalStatus?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: scale(8),
                }}
              >
                <View
                  style={[
                    CommonStyles.checkbox,
                    checked && CommonStyles.checked,
                    {
                      width: scale(16),
                      height: scale(16),
                      borderWidth: 1.5,
                      flexShrink: 0,
                      marginTop: verticalScale(2),
                    },
                  ]}
                >
                  {checked && <Text style={CommonStyles.checkmark}>✓</Text>}
                </View>

                <View style={{ flex: 1, minWidth: 0 }}>
                  <Text
                    style={[
                      CommonStyles.labelDOB,
                      {
                        fontFamily: Fonts.light,
                        fontSize: verticalScale(10),
                        lineHeight: verticalScale(16),
                        flexShrink: 1,
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );

      case "Manglik":
        return (
          <View
            style={{
              width: "100%",
              alignSelf: "stretch",
              gap: verticalScale(10),
              overflow: "hidden",
            }}
          >
            <Text style={[styles.filterPlaceholder, { textAlign: "right" }]}>
              Manglik Filter
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[15].manglik?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: scale(8),
                }}
              >
                <View
                  style={[
                    CommonStyles.checkbox,
                    checked && CommonStyles.checked,
                    {
                      width: scale(16),
                      height: scale(16),
                      borderWidth: 1.5,
                      flexShrink: 0,
                      marginTop: verticalScale(2),
                    },
                  ]}
                >
                  {checked && <Text style={CommonStyles.checkmark}>✓</Text>}
                </View>

                <View style={{ flex: 1, minWidth: 0 }}>
                  <Text
                    style={[
                      CommonStyles.labelDOB,
                      {
                        fontFamily: Fonts.light,
                        fontSize: verticalScale(10),
                        lineHeight: verticalScale(16),
                        flexShrink: 1,
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );

      // case "City":
      //   return <Text style={styles.filterPlaceholder}>City Filters</Text>;

      // case "Employed In":
      //   return (
      //     <Text style={styles.filterPlaceholder}>Employed In Filters</Text>
      //   );

      case "Diet":
        return (
          <View
            style={{
              width: "100%",
              alignSelf: "stretch",
              gap: verticalScale(10),
              overflow: "hidden",
            }}
          >
            <Text style={[styles.filterPlaceholder, { textAlign: "right" }]}>
              Diet Filter
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[17].dietOptions?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: scale(8),
                }}
              >
                <View
                  style={[
                    CommonStyles.checkbox,
                    checked && CommonStyles.checked,
                    {
                      width: scale(16),
                      height: scale(16),
                      borderWidth: 1.5,
                      flexShrink: 0,
                      marginTop: verticalScale(2),
                    },
                  ]}
                >
                  {checked && <Text style={CommonStyles.checkmark}>✓</Text>}
                </View>

                <View style={{ flex: 1, minWidth: 0 }}>
                  <Text
                    style={[
                      CommonStyles.labelDOB,
                      {
                        fontFamily: Fonts.light,
                        fontSize: verticalScale(10),
                        lineHeight: verticalScale(16),
                        flexShrink: 1,
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );

      default:
        return null;
    }
  };

  // --------------------------------
  // Main UI
  // --------------------------------

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={CommonStyles.container}
        edges={["left", "right", "top", "bottom"]}
      >
        {/* Header */}
        <Header backButton={false} onPress={() => {}} />

        {/* Horizontal Filter View */}
        <FilterView
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
          onPress={handleOpenFilter}
          onPressFilter={handleOpenFilter}
          filters={filterTabs}
        />

        {/* Profile List */}
        <View
          style={[
            styles.profileImageWrapper,
            { paddingVertical: verticalPadding },
          ]}
          onLayout={(event) => {
            setContainerHeight(event.nativeEvent.layout.height);
          }}
        >
          {profileHeight > 0 && (
            <FlatList
              data={mockProfiles ?? []}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ProfileCard
                  name={item.name}
                  image={item.image}
                  height={profileHeight}
                  age={item.age}
                  professional={item.education}
                  location={item.location}
                  isMember={item.isMember}
                  isVerified={true}
                  onMembershipPress={() => {}}
                  onPress={() => {}}
                  onCall={() => {
                    console.log("Call profile:", item.id);
                  }}
                  onShortlist={(value) => {
                    console.log("Shortlist:", item.id, value);
                  }}
                  onDownload={() => {
                    console.log("Download profile:", item.id);
                  }}
                />
              )}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyTitle}>No Profiles Found</Text>

                  <Text style={styles.emptySubtitle}>
                    There are no profiles available right now. Please check back
                    later.
                  </Text>
                </View>
              }
              contentContainerStyle={
                mockProfiles?.length ? undefined : { flexGrow: 1 }
              }
              ItemSeparatorComponent={() => (
                <View style={{ height: profileGap }} />
              )}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
              snapToInterval={profileHeight + profileGap}
              snapToAlignment="start"
              decelerationRate="fast"
              disableIntervalMomentum
              getItemLayout={(_, index) => ({
                length: profileHeight + profileGap,
                offset: index * (profileHeight + profileGap),
                index,
              })}
            />
          )}
        </View>

        {/* -------------------------------- */}
        {/* Filter Bottom Sheet */}
        {/* -------------------------------- */}

        <BottomSheet
          ref={sheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose
          enableDynamicSizing={false}
          backdropComponent={renderBackdrop}
          backgroundStyle={styles.sheetBackground}
          handleIndicatorStyle={styles.sheetIndicator}
        >
          <View style={styles.sheetContent}>
            {/* Sheet Header */}
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Filter Profiles</Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleCloseFilter}
                style={styles.closeButton}
              >
                <XIcon size={verticalScale(20)} color={Colors.text} />
              </TouchableOpacity>
            </View>

            {/* Filter Tabs and Content */}
            <View style={styles.filterContainer}>
              {/* Left Side - Vertical Tabs */}
              <ScrollView
                style={styles.filterTabs}
                contentContainerStyle={styles.filterTabsContent}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled
              >
                {filterTabs.map((tab) => {
                  const isActive = activeFilter === tab;

                  return (
                    <TouchableOpacity
                      key={tab}
                      activeOpacity={0.8}
                      onPress={() => setActiveFilter(tab)}
                      style={[
                        styles.filterTab,
                        isActive && styles.activeFilterTab,
                      ]}
                    >
                      <Text
                        style={[
                          styles.filterTabText,
                          isActive && styles.activeFilterTabText,
                        ]}
                      >
                        {tab}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>

              {/* Right Side - Filter Content */}
              <ScrollView
                style={styles.filterContent}
                contentContainerStyle={styles.filterContentContainer}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled
                keyboardShouldPersistTaps="handled"
              >
                {renderFilterContent()}
              </ScrollView>
            </View>

            {/* Bottom Footer - Outside filterContainer */}
            <View style={styles.filterFooter}>
              {/* Clear All */}
              {/*<TouchableOpacity
                activeOpacity={0.8}
                onPress={handleClearFilters}
                style={styles.clearFilterButton}
              >
                <Text style={styles.clearFilterText}>Clear All</Text>
              </TouchableOpacity>*/}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleClearFilters}
                style={{
                  width: scale(40),
                  height: scale(40),
                  borderRadius: scale(20),
                  backgroundColor: Colors.white,
                  justifyContent: "center",
                  alignItems: "center",
                  ...Shadows.small,
                }}
              >
                <EraserIcon size={verticalScale(14)} color={Colors.primary} />
              </TouchableOpacity>

              {/* Apply Filters */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleApplyFilters}
                style={styles.applyFilterButton}
              >
                <Text style={styles.applyFilterText}>Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;

// --------------------------------
// Styles
// --------------------------------

const styles = StyleSheet.create({
  // Profile List
  profileImageWrapper: {
    flex: 1,
    paddingHorizontal: scale(20),
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(20),
  },

  emptyTitle: {
    fontSize: scale(18),
    fontFamily: "Poppins-SemiBold",
    color: "#222222",
    textAlign: "center",
  },

  emptySubtitle: {
    marginTop: verticalScale(8),
    fontSize: scale(13),
    color: "#777777",
    textAlign: "center",
  },

  // Bottom Sheet
  sheetBackground: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: verticalScale(20),
    borderTopRightRadius: verticalScale(20),
  },

  sheetIndicator: {
    backgroundColor: Colors.primary,
    width: 45,
  },

  sheetContent: {
    flex: 1,
    position: "relative",
  },

  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(10),
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: 1,
  },

  sheetTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: verticalScale(14),
    color: Colors.text,
  },

  closeButton: {
    padding: scale(4),
  },

  // Filter Layout
  filterContainer: {
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
  },

  filterTabs: {
    width: "38%",
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: "#F8F8F8",
  },

  filterTabsContent: {
    flexGrow: 1,
    paddingBottom: verticalScale(10),
  },

  filterContent: {
    flex: 1,
    minWidth: 0,
    backgroundColor: Colors.white,
  },

  filterContentContainer: {
    flexGrow: 1,
    padding: scale(15),
  },

  filterTab: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(14),
    borderLeftWidth: 3,
    borderLeftColor: "transparent",
  },

  activeFilterTab: {
    backgroundColor: Colors.white,
    borderLeftColor: Colors.primary,
  },

  filterTabText: {
    fontFamily: Fonts.regular,
    fontSize: scale(10),
    color: Colors.text,
  },

  activeFilterTabText: {
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
  },

  filterPlaceholder: {
    fontFamily: Fonts.medium,
    fontSize: scale(12),
    color: Colors.text,
  },

  // Footer
  filterFooter: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(16),
    // paddingVertical: verticalScale(12),
    // borderTopWidth: 1,
    // borderTopColor: "#EEEEEE",
    // backgroundColor: Colors.white,
    gap: scale(10),
    flexShrink: 0,
    // marginBottom: verticalScale(30),
    position: "absolute",
    bottom: 0,
    paddingBottom: verticalScale(10),
  },

  clearFilterButton: {
    flex: 1,
    height: verticalScale(40),
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  clearFilterText: {
    fontFamily: Fonts.medium,
    fontSize: scale(11),
    color: Colors.primary,
  },

  applyFilterButton: {
    flex: 1.5,
    height: verticalScale(40),
    borderRadius: scale(20),
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  applyFilterText: {
    fontFamily: Fonts.medium,
    fontSize: scale(11),
    color: Colors.white,
  },
});
