import { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Colors, CommonStyles, Fonts } from "../../../constants/theme";
import CustomInput from "../../../components/custominput";
import { router } from "expo-router";
import CustomButton from "../../../components/custombutton";
import CustomBack from "../../../components/customback";
import { FemaleSymbolIcon, MaleSymbolIcon } from "../../../components/icons";
import SelectDropdown from "../../../components/selectdropdown";
import { mockSelects } from "../../../mocks/select_data";
import CustomTextArea from "../../../components/customtextarea";
import ImageUpload from "../../../components/imageupload";

type Gender = "Male" | "Female";
const Registration = () => {
  const [checked, setChecked] = useState(false);
  const [gender, setGender] = useState<Gender>("Male");
  const [dob, setDob] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [address, setAddress] = useState<string>("");

  // Calculate latest eligible date of birth
  const getMaximumDOB = () => {
    const today = new Date();
    const minimumAge = gender === "Male" ? 21 : 18;

    return new Date(
      today.getFullYear() - minimumAge,
      today.getMonth(),
      today.getDate(),
    );
  };

  const maximumDOB = getMaximumDOB();

  // Format date without time
  const formatDate = (value: Date) =>
    value.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  // Format time without seconds
  const formatTime = (value: Date) =>
    value.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  // Update gender and validate existing DOB
  const handleGenderChange = (selectedGender: Gender) => {
    setGender(selectedGender);

    if (dob) {
      const today = new Date();
      const minimumAge = selectedGender === "Male" ? 21 : 18;

      const maxDate = new Date(
        today.getFullYear() - minimumAge,
        today.getMonth(),
        today.getDate(),
      );

      if (dob > maxDate) {
        setDob(null);
      }
    }
  };

  // select state
  const [maritalStatus, setMaritalStatus] = useState<string | null>(null);
  const [height, setHeight] = useState<string | null>(null);
  const [bloodGroup, setBloodGroup] = useState<string | null>(null);
  const [complexion, setComplexion] = useState<string | null>(null);
  const [education, setEducation] = useState<string | null>(null);
  const [occupation, setOccupation] = useState<string | null>(null);
  const [motherToungue, setMotherToungue] = useState<string | null>("Marathi");
  const [location, setLocation] = useState<string | null>(null);
  const [religion, setReligion] = useState<string | null>("Hindu");
  const [cast, setCast] = useState<string | null>("Sutar");
  const [subCast, setSubCast] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>("India");
  const [star, setStar] = useState<string | null>(null);
  const [moonsign, setMoonsign] = useState<string | null>(null);
  const [gan, setGan] = useState<string | null>(null);
  const [nadi, setNadi] = useState<string | null>(null);
  const [manglik, setManglik] = useState<string | null>(null);
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={CommonStyles.container}
        edges={["left", "right", "top"]}
      >
        <KeyboardAvoidingView
          style={CommonStyles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={[
              CommonStyles.scrollContent,
              // { paddingBottom: verticalScale(30) },
            ]}
            keyboardDismissMode="on-drag"
          >
            <View style={CommonStyles.content}>
              <CustomBack
                size={verticalScale(20)}
                onPress={() => router.push("/(auth)/signin")}
              />
              <View style={CommonStyles.contentWrapper}>
                <Text
                  style={[
                    CommonStyles.contentWrapperTitle,
                    { textAlign: "left", color: Colors.text },
                  ]}
                >
                  खाते तयार करा
                </Text>
                <Text
                  style={[
                    CommonStyles.contentWrapperSubTitle,
                    { textAlign: "left", color: Colors.text },
                  ]}
                >
                  अवघ्या काही सेकंदांत तुमचे खाते तयार करा. तुमच्यासाठी योग्य
                  जीवनसाथी शोधण्यात आम्ही तुम्हाला मदत करू.
                </Text>
              </View>

              <View style={CommonStyles.separator} />

              <Text
                style={[
                  CommonStyles.contentWrapperSubTitle,
                  { fontFamily: Fonts.semiBold },
                ]}
              >
                Basic Information (मुलभूत माहिती)
              </Text>
              <CustomInput
                title="Name (आपले नांव)"
                type="text"
                placeholder="Enter Name (आपले नांव)"
                keyboardType="default"
              />
              <CustomInput
                title="Father's Name (वडिलांचे नांव)"
                type="text"
                placeholder="Father's Name (वडिलांचे नांव)"
                keyboardType="default"
              />
              <CustomInput
                title="Mother's Name (आईचे नांव)"
                type="text"
                placeholder="Mother's Name (आईचे नांव)"
                keyboardType="default"
              />
              <CustomInput
                title="Last Name (आडनांव)"
                type="text"
                placeholder="Last Name (आडनांव)"
                keyboardType="default"
              />
              <CustomInput
                title="Mobile No.1 (मोबाइल नंबर १)"
                type="text"
                placeholder="Mobile No.1 (मोबाइल नंबर १)"
                keyboardType="number-pad"
              />
              <CustomInput
                title="Mobile No.2 (मोबाइल नंबर २)"
                type="text"
                placeholder="Mobile No.2 (मोबाइल नंबर २)"
                keyboardType="number-pad"
              />
              <CustomInput
                title="Email ID (ई मेल आईडी)"
                type="text"
                placeholder="Email ID (ई मेल आईडी)"
                keyboardType="email-address"
              />
              <CustomInput
                title="Native Place (मूळ ठिकाण)"
                type="text"
                placeholder="Native Place (मूळ ठिकाण)"
                keyboardType="default"
              />
              <View style={{ flexDirection: "column", gap: verticalScale(3) }}>
                <Text
                  style={{
                    fontFamily: Fonts.semiBold,
                    color: Colors.text,
                    fontSize: verticalScale(12),
                    marginLeft: scale(5),
                  }}
                >
                  Gender
                </Text>

                <View style={{ flexDirection: "row", gap: scale(12) }}>
                  {(["Male", "Female"] as Gender[]).map((item) => (
                    <Pressable
                      key={item}
                      style={[
                        CommonStyles.selectGender,
                        {
                          flex: 1,
                          borderColor:
                            gender === item ? Colors.primary : "#D9D9D9",
                          backgroundColor:
                            gender === item ? "#FFF0F3" : "#fafafa",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: scale(8),
                        },
                      ]}
                      onPress={() => handleGenderChange(item)}
                    >
                      {item === "Male" ? (
                        <MaleSymbolIcon
                          size={verticalScale(20)}
                          color={gender === item ? Colors.primary : Colors.text}
                        />
                      ) : (
                        <FemaleSymbolIcon
                          size={verticalScale(20)}
                          color={gender === item ? Colors.primary : Colors.text}
                        />
                      )}

                      <Text
                        style={{
                          color: gender === item ? "#e63157" : "#333333",
                          fontFamily: "Poppins-Regular",
                          fontSize: scale(12),
                        }}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              <CustomInput
                title="Place Of Birth (जन्म स्थान)"
                type="text"
                placeholder="Place Of Birth (जन्म स्थान)"
                keyboardType="default"
              />

              {/* Date */}
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                date={dob ?? maximumDOB}
                maximumDate={maximumDOB}
                onConfirm={(selectedDate) => {
                  if (selectedDate <= maximumDOB) {
                    setDob(selectedDate);
                  }
                  setDatePickerVisible(false);
                }}
                onCancel={() => setDatePickerVisible(false)}
              />

              {/* Time */}
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                date={time ?? new Date()}
                is24Hour={false}
                onConfirm={(selectedTime) => {
                  setTime(selectedTime);
                  setTimePickerVisible(false);
                }}
                onCancel={() => setTimePickerVisible(false)}
              />

              <View style={{ flexDirection: "row", gap: scale(12) }}>
                <View style={{ flex: 1, gap: verticalScale(3) }}>
                  <Text style={CommonStyles.labelDOB}>Date of Birth</Text>

                  <Pressable
                    style={CommonStyles.inputDOB}
                    onPress={() => setDatePickerVisible(true)}
                  >
                    <Text
                      style={[
                        CommonStyles.textDOB,
                        !dob && CommonStyles.placeholderDOB,
                      ]}
                    >
                      {dob ? formatDate(dob) : "Select date"}
                    </Text>
                  </Pressable>
                </View>
                <View style={{ flex: 1, gap: verticalScale(3) }}>
                  <Text style={CommonStyles.labelDOB}>Time of Birth</Text>

                  <Pressable
                    style={CommonStyles.inputDOB}
                    onPress={() => setTimePickerVisible(true)}
                  >
                    <Text
                      style={[
                        CommonStyles.textDOB,
                        !time && CommonStyles.placeholderDOB,
                      ]}
                    >
                      {time ? formatTime(time) : "Select time"}
                    </Text>
                  </Pressable>
                </View>
              </View>

              <View style={{ flexDirection: "column", gap: verticalScale(5) }}>
                <Text style={[CommonStyles.labelDOB, { marginLeft: 0 }]}>
                  महत्त्वाची सूचना – विवाहासाठी वयोमर्यादा
                </Text>
                <Text
                  style={{
                    fontSize: verticalScale(10),
                    lineHeight: verticalScale(16),
                    fontFamily: "Poppins-Regular",
                    color: "#1A1A1A",
                  }}
                >
                  ऋणानुबंधमध्ये भारतातील विवाहविषयक कायद्यांचे काटेकोरपणे पालन
                  केले जाते.
                </Text>
                <View>
                  <View style={CommonStyles.termsDescriptionWrapper}>
                    <View
                      style={{
                        width: scale(5),
                        height: scale(5),
                        borderRadius: scale(2.5),
                        backgroundColor: "#e63157",
                        marginTop: scale(5),
                      }}
                    />

                    <Text style={CommonStyles.termsDescription}>
                      <Text style={{ fontFamily: "Poppins-SemiBold" }}>
                        मुलींसाठी:
                      </Text>{" "}
                      किमान{" "}
                      <Text style={{ fontFamily: "Poppins-SemiBold" }}>
                        वय १८ वर्षे
                      </Text>{" "}
                      असणे आवश्यक आहे.
                    </Text>
                  </View>
                  <View style={CommonStyles.termsDescriptionWrapper}>
                    <View
                      style={{
                        width: scale(5),
                        height: scale(5),
                        borderRadius: scale(2.5),
                        backgroundColor: "#e63157",
                        marginTop: scale(5),
                      }}
                    />

                    <Text style={CommonStyles.termsDescription}>
                      <Text style={{ fontFamily: "Poppins-SemiBold" }}>
                        मुलांसाठी:
                      </Text>{" "}
                      किमान{" "}
                      <Text style={{ fontFamily: "Poppins-SemiBold" }}>
                        वय २१ वर्षे
                      </Text>{" "}
                      असणे आवश्यक आहे.
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: verticalScale(10),
                    lineHeight: verticalScale(16),
                    fontFamily: "Poppins-Regular",
                    color: "#1A1A1A",
                  }}
                >
                  कायद्यानुसार निर्धारित केलेले किमान विवाहयोग्य वय पूर्ण
                  केलेल्या व्यक्तींनाच या प्लॅटफॉर्मवर नोंदणी करता येईल.
                </Text>
                <Text
                  style={{
                    fontSize: verticalScale(10),
                    lineHeight: verticalScale(16),
                    fontFamily: "Poppins-Regular",
                    color: "#1A1A1A",
                  }}
                >
                  भारतात बालविवाह प्रतिबंधित आहे. ऋणानुबंध बालविवाहास परवानगी
                  देत नाही किंवा अशा नोंदणीला प्रोत्साहन देत नाही.
                </Text>
                <Text
                  style={{
                    fontSize: verticalScale(10),
                    lineHeight: verticalScale(16),
                    fontFamily: "Poppins-SemiBold",
                    color: "#1A1A1A",
                  }}
                >
                  कृपया नोंदणी करण्यापूर्वी आपले वय आणि वैयक्तिक माहिती अचूक
                  असल्याची खात्री करा.
                </Text>
              </View>

              <SelectDropdown
                data={mockSelects[0].maritalStatus ?? []}
                value={maritalStatus}
                setValue={setMaritalStatus}
                label="Marital Status (वैवाहिक दर्जा)"
              />

              <SelectDropdown
                data={mockSelects[1].height ?? []}
                value={height}
                setValue={setHeight}
                label="Height (उंची)"
              />
              <SelectDropdown
                data={mockSelects[2].bloodGroupData ?? []}
                value={bloodGroup}
                setValue={setBloodGroup}
                label="Blood Group (रक्त गट)"
              />

              <SelectDropdown
                data={mockSelects[3].complexion ?? []}
                value={complexion}
                setValue={setComplexion}
                label="Complexion (वर्ण)"
              />

              <SelectDropdown
                data={mockSelects[17].dietOptions ?? []}
                value={maritalStatus}
                setValue={setMaritalStatus}
                label="Select Diet (आहार निवडा)"
              />

              <SelectDropdown
                data={mockSelects[4].education ?? []}
                value={education}
                setValue={setEducation}
                label="Education (शिक्षण)"
              />

              <CustomInput
                title="Education Details (शिक्षणाची सविस्तर माहिती)"
                type="text"
                placeholder="Education Details (शिक्षणाची सविस्तर माहिती)"
                keyboardType="default"
              />

              <SelectDropdown
                data={mockSelects[6].occupation ?? []}
                value={occupation}
                setValue={setOccupation}
                label="Occupation (व्यवसाय)"
              />

              <CustomInput
                title="Occupation Details (व्यवसायाचा तपशील)"
                type="text"
                placeholder="Occupation Details (व्यवसायाचा तपशील)"
                keyboardType="default"
              />

              <SelectDropdown
                data={mockSelects[5].motherToungue ?? []}
                value={motherToungue}
                setValue={setMotherToungue}
                search={false}
                label="Mother Toungue (मातृभाषा)"
              />

              <SelectDropdown
                data={mockSelects[16].maharashtraLocations ?? []}
                value={location}
                setValue={setLocation}
                search={false}
                label="Current Location"
              />

              <View style={{ flexDirection: "row", gap: scale(12) }}>
                <SelectDropdown
                  data={mockSelects[7].religion ?? []}
                  value={religion}
                  setValue={setReligion}
                  search={false}
                  label="Religion (धर्म)"
                />

                <SelectDropdown
                  data={mockSelects[8].cast ?? []}
                  value={cast}
                  setValue={setCast}
                  label="Caste (जात)"
                  search={false}
                />
              </View>

              <SelectDropdown
                data={mockSelects[10].countryList ?? []}
                value={country}
                setValue={setCountry}
                label="Country Living (कोणत्या देशात)"
                search={false}
              />

              <CustomTextArea
                title="Address"
                placeholder="Enter your full address"
                value={address}
                setValue={setAddress}
                editable={true}
              />

              <CustomInput
                title="Aadhar Number (आधार क्रमांक)"
                type="text"
                placeholder="Aadhar Number (आधार क्रमांक)"
                keyboardType="numeric"
              />

              <View style={{ flexDirection: "column", gap: verticalScale(5) }}>
                <Text style={[CommonStyles.labelDOB, { marginLeft: 0 }]}>
                  महत्त्वाची सूचना – आधार पडताळणी आणि गोपनीयता
                </Text>
                <Text
                  style={{
                    fontSize: verticalScale(10),
                    lineHeight: verticalScale(16),
                    fontFamily: "Poppins-Regular",
                    color: "#1A1A1A",
                  }}
                >
                  ऋणानुबंधवरील विवाह प्रोफाइल्सची सत्यता राखण्यासाठी, आपल्या
                  संमतीने ओळख पडताळणीकरिता आधारशी संबंधित माहिती मागितली जाऊ
                  शकते. आपल्या आधार माहितीचा इतर कोणत्याही असंबंधित कारणासाठी
                  वापर केला जाणार नाही किंवा तिचा गैरवापर केला जाणार नाही.
                  आपल्या वैयक्तिक माहितीचे संरक्षण करणे आणि लागू कायदे व
                  गोपनीयता धोरणानुसार तिचा वापर करणे हे आमचे उद्दिष्ट आहे.
                </Text>
                <Text
                  style={{
                    fontSize: verticalScale(10),
                    lineHeight: verticalScale(16),
                    fontFamily: "Poppins-SemiBold",
                    color: "#1A1A1A",
                  }}
                >
                  आपली गोपनीयता आणि विश्वास आमच्यासाठी महत्त्वाचा आहे.
                </Text>
              </View>

              <View style={CommonStyles.separator} />

              <View
                style={{
                  flexDirection: "column",
                  gap: verticalScale(20),
                }}
              >
                <Text
                  style={[
                    CommonStyles.contentWrapperSubTitle,
                    { fontFamily: Fonts.semiBold },
                  ]}
                >
                  Upload Images (प्रतिमा अपलोड करा)
                </Text>
                <View style={{ flexDirection: "row", gap: scale(10) }}>
                  <ImageUpload />
                  <ImageUpload />
                  <ImageUpload />
                </View>
              </View>

              <View style={CommonStyles.separator} />

              <Text
                style={[
                  CommonStyles.contentWrapperSubTitle,
                  { fontFamily: Fonts.semiBold },
                ]}
              >
                Socio Religious Attributes (सामाजिक धर्मयुक्त)
              </Text>

              <CustomInput
                title="Gothra (गोत्र)"
                type="text"
                placeholder="Gothra (गोत्र)"
                keyboardType="default"
              />
              <SelectDropdown
                data={mockSelects[11].star ?? []}
                value={star}
                setValue={setStar}
                label="Star (नक्षत्र)"
              />
              <SelectDropdown
                data={mockSelects[12].moonsign ?? []}
                value={moonsign}
                setValue={setMoonsign}
                label="Moonsign (चंद्रराशी)"
              />
              <View style={{ flexDirection: "row", gap: scale(12) }}>
                <CustomInput
                  title="Yoni (योनी)"
                  type="text"
                  placeholder="Yoni (योनी)"
                  keyboardType="default"
                />

                <CustomInput
                  title="Devak (देवक)"
                  type="text"
                  placeholder="Devak (देवक)"
                  keyboardType="default"
                />
              </View>

              <SelectDropdown
                data={mockSelects[13].gan ?? []}
                value={gan}
                setValue={setGan}
                label="Gan (गण)"
              />

              <SelectDropdown
                data={mockSelects[14].nadi ?? []}
                value={nadi}
                setValue={setNadi}
                label="Nadi (नाडी)"
              />
              <SelectDropdown
                data={mockSelects[15].manglik ?? []}
                value={manglik}
                setValue={setManglik}
                label="Are You Manglik? (आपण मांगलिक आहात?)"
              />

              <TouchableOpacity
                style={CommonStyles.checkBoxContainer}
                activeOpacity={0.8}
                onPress={() => setChecked(!checked)}
              >
                <View
                  style={[
                    CommonStyles.checkbox,
                    checked && CommonStyles.checked,
                  ]}
                >
                  {checked && <Text style={CommonStyles.checkmark}>✓</Text>}
                </View>

                <Text style={CommonStyles.labelDOB}>
                  I agree to the{" "}
                  <Text
                    style={CommonStyles.termsLink}
                    onPress={() => router.push("/termscondition")}
                  >
                    Terms & Conditions
                  </Text>
                </Text>
              </TouchableOpacity>

              <CustomButton
                styleGradient={{ borderRadius: verticalScale(30) }}
                title="Continue"
                onPress={() => router.replace("/signin")}
                loading={false}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Registration;
