import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { scale, verticalScale } from "react-native-size-matters";
import { Colors, Fonts } from "../constants/theme";

interface DropdownItem {
  id: number;
  value: string;
  name: string;
}

interface SelectDropdownProps {
  data: DropdownItem[];
  value: string | null;
  setValue: (value: string) => void;
  placeholder?: string;
  search?: boolean;
  label: string;
  editable?: boolean;
}

const SelectDropdown = ({
  data,
  value,
  setValue,
  placeholder = "Select One (एक निवडा)",
  search = true,
  label,
  editable = true,
}: SelectDropdownProps) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={{ flex: 1, gap: verticalScale(3) }}>
      <Text style={styles.label}>{label}</Text>
      <Dropdown
        style={[styles.dropdown, !editable && { backgroundColor: "#F5F5F5" }]}
        placeholderStyle={[
          styles.placeholderStyle,
          { color: isFocus ? "#1A1A1A" : "#999999" },
        ]}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search={search && editable}
        maxHeight={300}
        labelField="name"
        valueField="value"
        placeholder={!isFocus ? placeholder : "..."}
        searchPlaceholder="Search..."
        value={value}
        disable={!editable}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default SelectDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: verticalScale(45),
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: verticalScale(10),
    paddingHorizontal: verticalScale(12),
    backgroundColor: "#fafafa",
  },
  placeholderStyle: {
    fontFamily: Fonts.regular,
    fontSize: scale(12),
  },
  selectedTextStyle: {
    fontFamily: Fonts.regular,
    fontSize: scale(12),
    color: Colors.text,
  },
  inputSearchStyle: {
    height: verticalScale(45),
    fontFamily: Fonts.regular,
    fontSize: scale(12),
  },
  label: {
    fontFamily: Fonts.semiBold,
    color: Colors.text,
    fontSize: verticalScale(12),
    marginLeft: scale(5),
  },
});
