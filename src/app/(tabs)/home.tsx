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

  const [activeFilter, setActiveFilter] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<Record<string, any>>(
    {},
  );

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

  const handleOpenFilter = useCallback(
    (tab?: string) => {
      if (tab) {
        setActiveFilter(tab);
      } else if (!activeFilter) {
        setActiveFilter("Height");
      }

      sheetRef.current?.snapToIndex(0);
    },
    [activeFilter],
  );

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
  // Filter Content
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
            <Text
              style={[CommonStyles.filterPlaceholder, { textAlign: "right" }]}
            >
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
            <Text
              style={[CommonStyles.filterPlaceholder, { textAlign: "right" }]}
            >
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
          <View style={CommonStyles.filterWrapper}>
            <Text
              style={[CommonStyles.filterPlaceholder, { textAlign: "right" }]}
            >
              Have Children
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[4].education?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={CommonStyles.filterCheckBoxWrapper}
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
          <View style={CommonStyles.filterWrapper}>
            <Text
              style={[CommonStyles.filterPlaceholder, { textAlign: "right" }]}
            >
              Profession Filter
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[6].occupation?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={CommonStyles.filterCheckBoxWrapper}
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
          <View style={CommonStyles.filterWrapper}>
            <Text
              style={[CommonStyles.filterPlaceholder, { textAlign: "right" }]}
            >
              Location
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[16].maharashtraLocations?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={CommonStyles.filterCheckBoxWrapper}
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
          <View style={CommonStyles.filterWrapper}>
            <Text
              style={[CommonStyles.filterPlaceholder, { textAlign: "right" }]}
            >
              Marital Status
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[0].maritalStatus?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={CommonStyles.filterCheckBoxWrapper}
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
          <View style={CommonStyles.filterWrapper}>
            <Text
              style={[CommonStyles.filterPlaceholder, { textAlign: "right" }]}
            >
              Have Children
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[0].maritalStatus?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={CommonStyles.filterCheckBoxWrapper}
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
          <View style={CommonStyles.filterWrapper}>
            <Text
              style={[CommonStyles.filterPlaceholder, { textAlign: "right" }]}
            >
              Manglik Filter
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[15].manglik?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={CommonStyles.filterCheckBoxWrapper}
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
      //   return <Text style={CommonStyles.filterPlaceholder}>City Filters</Text>;

      // case "Employed In":
      //   return (
      //     <Text style={CommonStyles.filterPlaceholder}>Employed In Filters</Text>
      //   );

      case "Diet":
        return (
          <View style={CommonStyles.filterWrapper}>
            <Text
              style={[CommonStyles.filterPlaceholder, { textAlign: "right" }]}
            >
              Diet Filter
            </Text>

            <View style={CommonStyles.separator} />

            {mockSelects[17].dietOptions?.map((item) => (
              <TouchableOpacity
                key={item.value}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
                style={CommonStyles.filterCheckBoxWrapper}
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
          filters={filterTabs}
        />

        {/* Profile List */}
        <View
          style={[
            CommonStyles.profileImageWrapper,
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
                <View style={CommonStyles.emptyContainer}>
                  <Text style={CommonStyles.emptyTitle}>No Profiles Found</Text>

                  <Text style={CommonStyles.emptySubtitle}>
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
          backgroundStyle={CommonStyles.sheetBackground}
          handleIndicatorStyle={CommonStyles.sheetIndicator}
        >
          <View style={CommonStyles.sheetContent}>
            {/* Sheet Header */}
            <View style={CommonStyles.sheetHeader}>
              <Text style={CommonStyles.sheetTitle}>Filter Profiles</Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleCloseFilter}
                style={CommonStyles.closeButton}
              >
                <XIcon size={verticalScale(20)} color={Colors.text} />
              </TouchableOpacity>
            </View>

            {/* Filter Tabs and Content */}
            <View style={CommonStyles.filterContainer}>
              {/* Left Side - Vertical Tabs */}
              <ScrollView
                style={CommonStyles.filterTabs}
                contentContainerStyle={CommonStyles.filterTabsContent}
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
                        CommonStyles.filterTab,
                        isActive && CommonStyles.activeFilterTab,
                      ]}
                    >
                      <Text
                        style={[
                          CommonStyles.filterTabText,
                          isActive && CommonStyles.activeFilterTabText,
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
                style={CommonStyles.filterContent}
                contentContainerStyle={CommonStyles.filterContentContainer}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled
                keyboardShouldPersistTaps="handled"
              >
                {renderFilterContent()}
              </ScrollView>
            </View>

            {/* Bottom Footer - Outside filterContainer */}
            <View style={CommonStyles.filterFooter}>
              {/* Clear All */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleClearFilters}
                style={CommonStyles.filterButton}
              >
                <EraserIcon size={verticalScale(14)} color={Colors.primary} />
              </TouchableOpacity>

              {/* Apply Filters */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleApplyFilters}
                style={CommonStyles.applyFilterButton}
              >
                <Text style={CommonStyles.applyFilterText}>Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
