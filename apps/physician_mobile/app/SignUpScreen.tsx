import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView,
         Platform,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mail, Phone, Lock, Eye, EyeOff, MapPin, FileText, CreditCard, Camera, ArrowRight,
} from "lucide-react-native";
import { styles, phyAuthStyles } from "@caresync/mobile-ui";
import { SignUpForm, InitialSignUpForm} from "@caresync/shared"
import { Header } from "../components/Header";
import { useDoctorDocumentUpload, useImagePickers } from "../hooks/fileHandler";
import { router } from "expo-router";
import { previewFormImages, initialFormImages } from "../hooks/previewImage";


const SignUpScreen: React.FC<{ navigation?: any }> = ({ navigation }) => {
  const [form, setForm] = useState<SignUpForm>(InitialSignUpForm);
  const [previewForm, setPreviewForm] = useState<previewFormImages>(initialFormImages)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { pickCertificate} = useDoctorDocumentUpload();
  const { pickImage } = useImagePickers();

  const update = (field: keyof SignUpForm, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleCompleteRegistration = () => {
    router.push({
      pathname: "/Preview",
      params: { form: JSON.stringify(form),
        previewForm: JSON.stringify(previewForm)
       },
    }); };

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F7FB" }}>
      <Header navigation={"signup"} />
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "transparent" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <SafeAreaView style={styles.container}>
            {/* Step Indicator */}
            <View style={phyAuthStyles.stepRow}>
              {["Basic", "Credentials", "Profile"].map((label, i) => {
                const step = i + 1;
                return (
                  <View key={label} style={phyAuthStyles.stepItem}>
                    <View
                      style={[
                        phyAuthStyles.stepCircle,
                        phyAuthStyles.stepCircleActive,
                      ]}
                    >
                      <Text style={phyAuthStyles.stepNumber}>{step}</Text>
                    </View>
                    <Text
                      style={[
                        phyAuthStyles.stepLabel,
                        phyAuthStyles.stepLabelActive,
                      ]}
                    >
                      {label}
                    </Text>
                    {i < 2 && <View style={phyAuthStyles.stepLine} />}
                  </View>
                );
              })}
            </View>

            {/* Page Title */}
            <View style={{ width: "93%", marginBottom: 16 }}>
              <Text style={phyAuthStyles.pageTitle}>Doctor Onboarding</Text>
              <Text style={phyAuthStyles.pageSubtitle}>
                Join our network of medical professionals.
              </Text>
            </View>

            {/* ── SECTION 1: Identity Information ── */}
            <View style={[styles.card, { marginBottom: 16 }]}>
              <Text style={phyAuthStyles.sectionLabel}>
                IDENTITY INFORMATION
              </Text>

              <Text style={styles.label}>First Name</Text>
              <View style={[styles.InputWrapper, { width: "97%" }]}>
                <TextInput
                  placeholder="Enter first name"
                  placeholderTextColor="#9CA3AF"
                  style={styles.InputField}
                  value={form.fname}
                  onChangeText={(v) => update("fname", v)}
                  autoCapitalize="words"
                />
              </View>

              <Text style={styles.label}>Last Name</Text>
              <View style={[styles.InputWrapper, { width: "97%" }]}>
                <TextInput
                  placeholder="Enter last name"
                  placeholderTextColor="#9CA3AF"
                  style={styles.InputField}
                  value={form.lname}
                  onChangeText={(v) => update("lname", v)}
                  autoCapitalize="words"
                />
              </View>

              <Text style={styles.label}>
                Other Name <Text style={styles.optionalLabel}>(Optional)</Text>
              </Text>
              <View
                style={[
                  [styles.InputWrapper, { width: "97%" }],
                  { marginBottom: 0 },
                ]}
              >
                <TextInput
                  placeholder="Middle or other names"
                  placeholderTextColor="#9CA3AF"
                  style={styles.InputField}
                  value={form.othername}
                  onChangeText={(v) => update("othername", v)}
                  autoCapitalize="words"
                />
              </View>
            </View>

            {/* ── SECTION 2: Account Credentials ── */}
            <View style={[styles.card, { marginBottom: 16 }]}>
              <Text style={phyAuthStyles.sectionLabel}>
                ACCOUNT CREDENTIALS
              </Text>

              <Text style={styles.label}>Email Address</Text>
              <View style={[styles.InputWrapper, { width: "97%" }]}>
                <Mail size={20} color="#6B7280" />
                <TextInput
                  placeholder="doctor@hospital.com"
                  placeholderTextColor="#9CA3AF"
                  style={styles.InputField}
                  value={form.email}
                  onChangeText={(v) => update("email", v)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <Text style={styles.label}>Phone Number</Text>
              <View style={[styles.InputWrapper, { width: "97%" }]}>
                <Phone size={20} color="#6B7280" />
                <TextInput
                  placeholder="+233 XX XXX XXXX"
                  placeholderTextColor="#9CA3AF"
                  style={styles.InputField}
                  value={form.phoneNumber}
                  onChangeText={(v) => update("phoneNumber", v)}
                  keyboardType="phone-pad"
                />
              </View>

              <Text style={styles.label}>Password</Text>
              <View style={[styles.InputWrapper, { width: "97%" }]}>
                <Lock size={20} color="#6B7280" />
                <TextInput
                  placeholder="••••••••"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showPassword}
                  style={styles.InputField}
                  value={form.password}
                  onChangeText={(v) => update("password", v)}
                />
                <TouchableOpacity onPress={() => setShowPassword((p) => !p)}>
                  {showPassword ? (
                    <EyeOff size={20} color="#6B7280" />
                  ) : (
                    <Eye size={20} color="#6B7280" />
                  )}
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>Confirm Password</Text>
              <View
                style={[
                  [styles.InputWrapper, { width: "97%" }],
                  { marginBottom: 0 },
                ]}
              >
                <Lock size={20} color="#6B7280" />
                <TextInput
                  placeholder="••••••••"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showConfirmPassword}
                  style={styles.InputField}
                  value={form.confirmPassword}
                  onChangeText={(v) => update("confirmPassword", v)}
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword((p) => !p)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} color="#6B7280" />
                  ) : (
                    <Eye size={20} color="#6B7280" />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            {/* ── SECTION 3: Professional Verification ── */}
            <View style={[styles.card, { marginBottom: 16 }]}>
              <Text style={phyAuthStyles.sectionLabel}>
                PROFESSIONAL VERIFICATION
              </Text>

              <Text style={styles.label}>Hospital / Pharmacy Name</Text>
              <View style={[styles.InputWrapper, { width: "97%" }]}>
                <TextInput
                  placeholder="Full name of practice"
                  placeholderTextColor="#9CA3AF"
                  style={styles.InputField}
                  value={form.placeName}
                  onChangeText={(v) => update("placeName", v)}
                />
              </View>

              <Text style={styles.label}>Practice Location</Text>
              <View style={[styles.InputWrapper, { width: "97%" }]}>
                <MapPin size={20} color="#6B7280" />
                <TextInput
                  placeholder="City, Region"
                  placeholderTextColor="#9CA3AF"
                  style={styles.InputField}
                  value={form.placeLocation}
                  onChangeText={(v) => update("placeLocation", v)}
                />
              </View>

              <Text style={styles.label}>Mandatory Documents</Text>

              {/* ************************Medical Certificate Upload************************* */}
              {previewForm.proofOfCertification ? (
                <View style={phyAuthStyles.uploadRow}>
                  <View style={phyAuthStyles.uploadIconWrap}>
                    <FileText size={22} color="#0cf56d" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={phyAuthStyles.uploadTitle}>File Uploaded</Text>
                    <Text style={phyAuthStyles.uploadHint}>
                      File Name: {previewForm.proofOfCertificationName}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={phyAuthStyles.uploadBtn}
                    onPress={async () => {
                      const file = await pickCertificate();
                      if (file) {
                        setPreviewForm((prev) => ({
                          ...prev,
                          proofOfCertification: file.uri,
                          proofOfCertificationName: file.name,
                        }));
                      }
                    }}
                  >
                    <Text style={phyAuthStyles.uploadBtnText}>
                      Change Upload
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={phyAuthStyles.uploadRow}>
                  <View style={phyAuthStyles.uploadIconWrap}>
                    <FileText size={22} color="#2563EB" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={phyAuthStyles.uploadTitle}>
                      Medical Certificate
                    </Text>
                    <Text style={phyAuthStyles.uploadHint}>
                      PDF, JPG (Max 5MB)
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={phyAuthStyles.uploadBtn}
                    onPress={async () => {
                      const file = await pickCertificate();
                      if (file)
                        setPreviewForm((prev) => ({
                          ...prev,
                          proofOfCertification: file.uri,
                          proofOfCertificationName: file.name
                        }));
                    }}
                  >
                    <Text style={phyAuthStyles.uploadBtnText}>Upload</Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* ***************Ghana Card Upload********************* */}
              {previewForm.ghanaCardImage ? (
                <View
                  style={[
                    phyAuthStyles.uploadRow,
                    {
                      marginBottom: 12,
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    },
                  ]}
                >
                  <Image
                    source={{ uri: previewForm.ghanaCardImage }}
                    style={{ width: 200, height: 170 }}
                    resizeMode="stretch"
                  />
                  <TouchableOpacity
                    style={phyAuthStyles.uploadBtn}
                    onPress={async () => {
                      const uri = await pickImage();
                      if (uri)
                        setPreviewForm((prev) => ({
                          ...prev,
                          ghanaCardImage: uri,
                        }));
                    }}
                  >
                    <Text style={phyAuthStyles.uploadBtnText}>
                      change Image?
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={[phyAuthStyles.uploadRow, { marginBottom: 12 }]}>
                  <View style={phyAuthStyles.uploadIconWrap}>
                    <CreditCard size={22} color="#2563EB" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={phyAuthStyles.uploadTitle}>
                      Ghana Card (Front)
                    </Text>
                    <Text style={phyAuthStyles.uploadHint}>
                      Clear photo required
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={phyAuthStyles.uploadBtn}
                    onPress={async () => {
                      const url = await pickImage();
                      if (url)
                        setPreviewForm((prev) => ({ ...prev, ghanaCardImage: url }));
                    }}
                  >
                    <Text style={phyAuthStyles.uploadBtnText}>Upload</Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* ******************************image of location************************** */}
              {previewForm.placeImage ? (
                <View
                  style={[
                    phyAuthStyles.uploadRow,
                    {
                      marginBottom: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    },
                  ]}
                >
                  <Image
                    source={{ uri: previewForm.placeImage }}
                    style={{ width: 200, height: 170 }}
                    resizeMode="stretch"
                  />
                  <TouchableOpacity
                    style={phyAuthStyles.uploadBtn}
                    onPress={async () => {
                      const uri = await pickImage();
                      if (uri)
                        setPreviewForm((prev) => ({
                          ...prev,
                          placeImage: uri,
                        }));
                    }}
                  >
                    <Text style={phyAuthStyles.uploadBtnText}>
                      change Image?
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={[phyAuthStyles.uploadRow, { marginBottom: 0 }]}>
                  <View style={phyAuthStyles.uploadIconWrap}>
                    <CreditCard size={22} color="#2563EB" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={phyAuthStyles.uploadTitle}>
                      Image Of Practice
                    </Text>
                    <Text style={phyAuthStyles.uploadHint}>
                      Clear photo required
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={phyAuthStyles.uploadBtn}
                    onPress={async () => {
                      const uri = await pickImage();
                      if (uri)
                        setPreviewForm((prev) => ({
                          ...prev,
                          placeImage: uri,
                        }));
                    }}
                  >
                    <Text style={phyAuthStyles.uploadBtnText}>Upload</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {/* ── SECTION 4: Patient-Facing Profile ── */}
            <View style={[styles.card, { marginBottom: 20 }]}>
              <Text style={phyAuthStyles.sectionLabel}>
                PATIENT-FACING PROFILE
              </Text>

              {/* Profile Picture */}
              <View style={{ alignItems: "center", marginBottom: 20 }}>
                <View style={phyAuthStyles.avatarWrap}>
                  <View style={phyAuthStyles.avatarPlaceholder}>
                    <View style={phyAuthStyles.avatarIconBg}>
                      <Text style={{ fontSize: 32 }}>👨‍⚕️</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={phyAuthStyles.cameraBtn}
                    onPress={async () => {
                      const url = await pickImage();
                      if (url)
                        setPreviewForm((prev) => ({
                          ...prev,
                          profileImage: url,
                        }));
                    }}
                  >
                    <Camera size={14} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
                <Text style={phyAuthStyles.avatarLabel}>
                  Profile Picture Upload
                </Text>
              </View>

              <Text style={styles.label}>Professional Bio</Text>
              <View
                style={[
                  [styles.InputWrapper, { width: "97%" }],
                  {
                    alignItems: "flex-start",
                    paddingVertical: 10,
                    marginBottom: 6,
                  },
                ]}
              >
                <TextInput
                  placeholder="Briefly describe your specialization and experience..."
                  placeholderTextColor="#9CA3AF"
                  style={[
                    styles.InputField,
                    { minHeight: 90, textAlignVertical: "top" },
                  ]}
                  value={form.biography}
                  onChangeText={(v) => update("biography", v)}
                  multiline
                  numberOfLines={4}
                />
              </View>
              <Text style={phyAuthStyles.bioHint}>
                This will be visible to patients on your public profile.
              </Text>
            </View>

            {/* Complete Registration Button */}
            <TouchableOpacity
              style={[
                styles.button,
                {
                  width: "93%",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                },
              ]}
              onPress={handleCompleteRegistration}
            >
              <Text style={styles.buttonText}>Complete Registration</Text>
              <ArrowRight size={18} color="#FFFFFF" />
            </TouchableOpacity>

            {/* Terms */}
            <Text
              style={[
                styles.termsText,
                { marginTop: 14, width: "85%", textAlign: "center" },
              ]}
            >
              By signing up, you agree to our{" "}
              <Text style={styles.link}>Terms of Service</Text> and{" "}
              <Text style={styles.link}>HIPAA Policies</Text>.
            </Text>

            {/* Bottom Footer */}
            <View style={[styles.BottomFooter, { marginTop: 24 }]}>
              <Text style={styles.CopyrightText}>
                © 2024 CareSync Medical Systems. All rights reserved.
              </Text>
              <View style={styles.FooterLinksRow}>
                <Text style={styles.FooterLink}>Privacy Policy</Text>
                <Text style={styles.FooterLink}>Terms of Service</Text>
                <Text style={styles.FooterLink}>Support</Text>
              </View>
              <View style={{ marginTop: 8 }}>
                <Text style={styles.FooterLink}>HIPAA Compliance</Text>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
export default SignUpScreen