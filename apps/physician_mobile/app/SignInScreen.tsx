import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Eye, EyeOff, Shield, ArrowRight, } from "lucide-react-native";
import { styles } from "@caresync/mobile-ui";
import { SignUpForm, InitialSignUpForm } from "@caresync/shared";
import { router } from "expo-router";


const DoctorSignInScreen: React.FC = () => {
  const [form, setForm] = useState<SignUpForm>(InitialSignUpForm);
  const [showPassword, setShowPassword] = useState(false);

  const update = (field: keyof SignUpForm, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSignIn = (): void => {};

  return (
    <SafeAreaView style={local.screen}>
      {/* Logo + Branding */}
      <View style={local.brandSection}>
        <View style={local.logoWrap}>
          <Text style={local.logoIcon}>✚</Text>
        </View>
        <Text style={local.brandName}>CareSync</Text>
        <Text style={local.brandSub}>Practitioner Access Portal</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={local.title}>Sign In</Text>

        {/* Email */}
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.InputWrapper}>
          <TextInput
            placeholder="dr.smith@caresync.com"
            placeholderTextColor="#9CA3AF"
            style={styles.InputField}
            value={form.email}
            onChangeText={(v) => update("email", v)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={styles.passwordRow}>
          <Text style={styles.label}>Password</Text>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.InputWrapper}>
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

        {/* Sign In Button */}
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <View style={styles.ButtonContent}>
            <Text style={styles.buttonText}>Sign In</Text>
            <ArrowRight size={18} color="#FFFFFF" />
          </View>
        </TouchableOpacity>

        {/* Divider */}
        <View style={local.divider} />

        {/* Register Link */}
        <Text style={local.registerText}>
          New to CareSync?{" "}
          <Text
            style={styles.link}
            onPress={() => router.replace("/SignUpScreen")}
          >
            Register Clinic
          </Text>
        </Text>
      </View>

      {/* HIPAA Badge */}
      <View style={local.hipaaBadge}>
        <Shield size={16} color="#6B7280" />
        <Text style={local.hipaaText}>
          Secure HIPAA-compliant authentication
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.BottomFooter}>
        <Text style={styles.CopyrightText}>
          © 2024 CareSync Medical Systems. All rights reserved.
        </Text>
        <View style={styles.FooterLinksRow}>
          <Text style={styles.FooterLink}>Privacy Policy</Text>
          <Text style={styles.FooterLink}>Terms of Service</Text>
          <Text style={styles.FooterLink}>HIPAA Compliance</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const local = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#EAECF0",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  brandSection: {
    alignItems: "center",
    marginBottom: 28,
  },
  logoWrap: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#2563EB",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  logoIcon: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  brandName: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2563EB",
    marginBottom: 4,
  },
  brandSub: {
    fontSize: 14,
    color: "#6B7280",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 20,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 20,
  },
  registerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#6B7280",
  },
  hipaaBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 16,
    width: "93%",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  hipaaText: {
    fontSize: 13,
    color: "#6B7280",
  },
});

export default DoctorSignInScreen;
