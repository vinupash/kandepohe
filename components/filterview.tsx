import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { verticalScale } from "react-native-size-matters";
import { ArrowDownIcon, FilterHorizontalIcon } from "./icons";
import { Colors, Fonts } from "../constants/theme";

interface FilterViewProps {
  onPress: () => void;
  activeFilter: string;
  onSelectFilter: (filter: string) => void;
  filters: string[];
}

const FilterView = ({
  onPress,
  activeFilter,
  onSelectFilter,
  filters,
}: FilterViewProps) => {
  return (
    <View style={styles.filterWrapper}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.filterButton}
      >
        <FilterHorizontalIcon size={verticalScale(13)} />
      </TouchableOpacity>

      <View style={styles.separator} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterScrollContent}
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <TouchableOpacity
              key={filter}
              activeOpacity={0.8}
              onPress={() => {
                onSelectFilter(filter);
                onPress();
              }}
              style={[styles.iconWrapper, isActive && styles.activeFilter]}
            >
              <Text
                style={[styles.filterText, isActive && styles.activeFilterText]}
              >
                {filter}
              </Text>

              <ArrowDownIcon
                size={verticalScale(12)}
                color={isActive ? Colors.primary : Colors.text}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FilterView;

const styles = StyleSheet.create({
  filterWrapper: {
    paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(5),
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    gap: verticalScale(5),
  },
  filterButton: {
    width: verticalScale(30),
    height: verticalScale(30),
    borderRadius: verticalScale(15),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
    borderColor: "#D1D5DB",
    borderWidth: 1,
  },
  iconWrapper: {
    borderRadius: verticalScale(15),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
    borderColor: "#D1D5DB",
    borderWidth: 1,
    paddingHorizontal: verticalScale(10),
    paddingVertical: verticalScale(5),
    gap: verticalScale(3),
  },
  activeFilter: {
    backgroundColor: "#FCE8ED",
    borderColor: Colors.primary,
  },
  separator: {
    width: 1,
    height: verticalScale(25),
    backgroundColor: "#E5E7EB",
  },
  filterScrollContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: verticalScale(5),
  },
  filterText: {
    fontFamily: Fonts.light,
    color: Colors.text,
    fontSize: verticalScale(10),
    lineHeight: verticalScale(14),
  },
  activeFilterText: {
    color: Colors.primary,
    fontFamily: Fonts.medium,
  },
});
