import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { User, Mail, Phone, Lock, Building2, MapPin, FileText, CreditCard, Camera, 
         CheckCircle, ArrowLeft, Send, } from "lucide-react-native";
import { styles } from "@caresync/mobile-ui";
import { Header } from "../components/Header";
import { SignUpForm, InitialSignUpForm } from "@caresync/shared";
import { router, useLocalSearchParams } from "expo-router";

const maskPassword = (pw: string) => "•".repeat(Math.min(pw.length, 10));

const Row: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  faded?: boolean;
}> = ({ icon, label, value, faded }) => (
  <View style={local.row}>
    <View style={local.rowIcon}>{icon}</View>
    <View style={{ flex: 1 }}>
      <Text style={local.rowLabel}>{label}</Text>
      <Text
        style={[
          local.rowValue,
          faded && { color: "#9CA3AF", fontStyle: "italic" },
        ]}
      >
        {value}
      </Text>
    </View>
  </View>
);

const DocRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  uploaded: boolean;
}> = ({ icon, label, uploaded }) => (
  <View style={local.docRow}>
    <View style={local.rowIcon}>{icon}</View>
    <Text style={local.rowValue}>{label}</Text>
    <View
      style={[
        local.docBadge,
        uploaded ? local.docBadgeSuccess : local.docBadgeMissing,
      ]}
    >
      <Text
        style={[
          local.docBadgeText,
          uploaded ? { color: "#16A34A" } : { color: "#DC2626" },
        ]}
      >
        {uploaded ? "Uploaded" : "Missing"}
      </Text>
    </View>
  </View>
);

const Preview: React.FC = () => {
  const { form: formParam } = useLocalSearchParams();
  const form: SignUpForm = formParam
    ? JSON.parse(formParam as string)
    : InitialSignUpForm;

  const fullName = [form.fname, form.othername, form.lname]
    .filter(Boolean)
    .join(" ");

  const handleSubmit = () => {
    // TODO: wire up registration API call
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F7FB" }}>
      <Header navigation={"doctor-preview"} />
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
          {/* Hero Banner */}
          <View style={local.heroBanner}>
            <CheckCircle size={36} color="#2563EB" />
            <View style={{ marginLeft: 14, flex: 1 }}>
              <Text style={local.heroTitle}>Review Your Details</Text>
              <Text style={local.heroSub}>
                Please confirm everything looks correct before submitting.
              </Text>
            </View>
          </View>

          {/* Profile Summary */}
          <View style={local.profileCard}>
            <View style={local.avatarCircle}>
              {form.profileImg ? null : (
                <Text style={{ fontSize: 36 }}>👨‍⚕️</Text>
              )}
            </View>
            <Text style={local.profileName}>{fullName || "Dr. —"}</Text>
            <Text style={local.profileSub}>
              {form.placeName || "Practice not specified"}
            </Text>
            <View style={local.profileBadge}>
              <Text style={local.profileBadgeText}>
                Doctor · Pending Verification
              </Text>
            </View>
          </View>

          {/* SECTION 1: Identity Information */}
          <View style={[styles.card, { marginBottom: 16, minWidth: "93%" }]}>
            <Text style={local.sectionLabel}>IDENTITY INFORMATION</Text>

            <Row
              icon={<User size={18} color="#2563EB" />}
              label="Full Name"
              value={fullName || "—"}
              faded={!fullName}
            />
            {form.othername ? (
              <Row
                icon={<User size={18} color="#6B7280" />}
                label="Other Name"
                value={form.othername}
              />
            ) : null}
          </View>

          {/* SECTION 2: Account Credentials */}
          <View style={[styles.card, { marginBottom: 16, minWidth: "93%" }]}>
            <Text style={local.sectionLabel}>ACCOUNT CREDENTIALS</Text>

            <Row
              icon={<Mail size={18} color="#2563EB" />}
              label="Email Address"
              value={form.email || "—"}
              faded={!form.email}
            />
            <Row
              icon={<Phone size={18} color="#2563EB" />}
              label="Phone Number"
              value={form.phoneNumber || "—"}
              faded={!form.phoneNumber}
            />
            <Row
              icon={<Lock size={18} color="#2563EB" />}
              label="Password"
              value={form.password ? maskPassword(form.password) : "—"}
              faded={!form.password}
            />
          </View>

          {/* SECTION 3: Professional Verification */}
          <View style={[styles.card, { marginBottom: 16, minWidth: "93%" }]}>
            <Text style={local.sectionLabel}>PROFESSIONAL VERIFICATION</Text>

            <Row
              icon={<Building2 size={18} color="#2563EB" />}
              label="Hospital / Pharmacy"
              value={form.placeName || "—"}
              faded={!form.placeName}
            />
            <Row
              icon={<MapPin size={18} color="#2563EB" />}
              label="Practice Location"
              value={form.placeLocation || "—"}
              faded={!form.placeLocation}
            />

            <Text style={[local.rowLabel, { marginBottom: 10, marginTop: 4 }]}>
              Mandatory Documents
            </Text>
            <DocRow
              icon={<FileText size={18} color="#2563EB" />}
              label="Medical Certificate"
              uploaded={!!form.proofOfCertification}
            />
            <DocRow
              icon={<CreditCard size={18} color="#2563EB" />}
              label="Ghana Card (Front/Back)"
              uploaded={!!form.ghanacardImg}
            />
          </View>

          {/* SECTION 4: Patient-Facing Profile */}
          <View style={[styles.card, { marginBottom: 24, minWidth: "93%" }]}>
            <Text style={local.sectionLabel}>PATIENT-FACING PROFILE</Text>

            <View style={local.row}>
              <View style={local.rowIcon}>
                <Camera size={18} color="#2563EB" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={local.rowLabel}>Profile Picture</Text>
                <View
                  style={[
                    local.docBadge,
                    form.profileImg
                      ? local.docBadgeSuccess
                      : local.docBadgeMissing,
                    { alignSelf: "flex-start", marginTop: 4 },
                  ]}
                >
                  <Text
                    style={[
                      local.docBadgeText,
                      form.profileImg
                        ? { color: "#16A34A" }
                        : { color: "#DC2626" },
                    ]}
                  >
                    {form.profileImg ? "Uploaded" : "Not uploaded"}
                  </Text>
                </View>
              </View>
            </View>

            <View style={local.bioBox}>
              <Text style={local.rowLabel}>Professional Bio</Text>
              <Text
                style={[
                  local.bioText,
                  !form.biography && {
                    color: "#9CA3AF",
                    fontStyle: "italic",
                  },
                ]}
              >
                {form.biography || "No bio provided."}
              </Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={{ width: "93%", gap: 12 }}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                },
              ]}
              onPress={handleSubmit}
            >
              <Send size={18} color="#FFFFFF" />
              <Text style={styles.buttonText}>Submit Registration</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={local.backBtn}
              onPress={() => router.back()}
            >
              <ArrowLeft size={18} color="#2563EB" />
              <Text style={local.backBtnText}>Go Back & Edit</Text>
            </TouchableOpacity>
          </View>

          {/* Terms */}
          <Text
            style={[
              styles.termsText,
              { marginTop: 16, width: "85%", textAlign: "center" },
            ]}
          >
            By submitting, you agree to our{" "}
            <Text style={styles.link}>Terms of Service</Text> and{" "}
            <Text style={styles.link}>HIPAA Policies</Text>.
          </Text>

          {/* Footer */}
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
    </View>
  );
};

const local = StyleSheet.create({
  heroBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    borderRadius: 14,
    padding: 18,
    width: "93%",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },
  heroTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1E3A8A",
    marginBottom: 3,
  },
  heroSub: {
    fontSize: 13,
    color: "#3B82F6",
    lineHeight: 18,
  },
  profileCard: {
    minWidth: "93%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#BFDBFE",
    marginBottom: 12,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  profileSub: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 10,
  },
  profileBadge: {
    backgroundColor: "#FEF3C7",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#FDE68A",
  },
  profileBadgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#92400E",
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2563EB",
    letterSpacing: 0.8,
    marginBottom: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginTop: 2,
  },
  rowLabel: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 2,
  },
  rowValue: {
    fontSize: 15,
    color: "#111827",
    fontWeight: "500",
  },
  docRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    gap: 10,
  },
  docBadge: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
  },
  docBadgeSuccess: {
    backgroundColor: "#F0FDF4",
    borderColor: "#BBF7D0",
  },
  docBadgeMissing: {
    backgroundColor: "#FEF2F2",
    borderColor: "#FECACA",
  },
  docBadgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  bioBox: {
    marginTop: 12,
  },
  bioText: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    marginTop: 4,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1.5,
    borderColor: "#2563EB",
    borderRadius: 10,
    paddingVertical: 13,
    backgroundColor: "#FFFFFF",
  },
  backBtnText: {
    color: "#2563EB",
    fontWeight: "600",
    fontSize: 15,
  },
});

export default Preview;
