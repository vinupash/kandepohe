import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Colors, Fonts } from "../constants/theme";
import { UserSearch02Icon } from "./icons";

interface SearchFilterProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchFilter = ({
  value,
  onChangeText,
  placeholder = "Search profiles...",
}: SearchFilterProps) => {
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <UserSearch02Icon size={verticalScale(16)} color={Colors.primary} />

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999999"
          value={value}
          onChangeText={onChangeText}
          returnKeyType="search"
          autoCapitalize="none"
        />

        {/*{value.length > 0 && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onChangeText("")}
            style={styles.clearButton}
          >
            <UserSearch02Icon size={verticalScale(16)} color="#777777" />
          </TouchableOpacity>
        )}*/}
      </View>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  containerWrapper: {
    paddingHorizontal: verticalScale(20),
    paddingVertical: verticalScale(5),
  },
  container: {
    height: verticalScale(38),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: verticalScale(20),
    paddingHorizontal: scale(15),
    gap: scale(5),
  },
  input: {
    flex: 1,
    height: "100%",
    paddingVertical: 0,
    fontFamily: Fonts.regular,
    fontSize: verticalScale(12),
    lineHeight: verticalScale(18),
    color: Colors.text,
  },
  clearButton: {
    padding: scale(4),
  },
});
