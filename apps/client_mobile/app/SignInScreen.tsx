import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from "react-native";
import {SafeAreaView } from "react-native-safe-area-context"
import { Mail, Lock, Eye, Shield, ArrowRight,} from "lucide-react-native";
import { styles, GoogleImg, } from "@caresync/mobile-ui";
import { Header} from "../components/Header"
import { router } from "expo-router";
import {ClientSignUpForm, initSignUpForm} from "@caresync/shared"

const SignInScreen: React.FC = () => {
  const [signInForm, SetSignInForm] =
    useState<ClientSignUpForm>(initSignUpForm);

  const handleLogin = (): void => {
    console.log("Email:", signInForm?.email);
    console.log("Password:", signInForm?.password);
  };

  return (
    <View>
      <Header navigation={""} />
      <SafeAreaView style={styles.container}>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Welcome Back</Text>

          <Text style={styles.subtitle}>
            Sign in to access your medical records and care schedule.
          </Text>

          {/* Email */}
          <Text style={styles.label}>Email Address</Text>

          <View style={styles.InputWrapper}>
            <Mail size={20} color="#6B7280" />
            <TextInput
              placeholder="name@example.com"
              placeholderTextColor="#9CA3AF"
              style={styles.InputField}
              value={signInForm.email}
              onChangeText={(text) => {SetSignInForm((prev) => ({...prev, email: text }))} }
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
            <Lock size={20} color="#6B7280" />

            <TextInput
              placeholder="••••••••"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              style={styles.InputField}
              value={signInForm.password}
              onChangeText={(password) => {SetSignInForm((prev)=> ({...prev, password}))}}
              />

            <TouchableOpacity>
              <Eye size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <View style={styles.ButtonContent}>
              <Text style={styles.buttonText}>Sign In</Text>
              <ArrowRight size={18} color="#FFFFFF" />
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.DividerRow}>
            <View style={styles.DividerLine} />
            <Text style={styles.DividerText}>Or continue with</Text>
            <View style={styles.DividerLine} />
          </View>

          {/* Social Buttons */}
          <View style={styles.SocialRow}>
            <TouchableOpacity style={styles.SocialButton}>
              <Image source={GoogleImg} style={{ width: 20, height: 20 }} />
              <Text style={styles.SocialButtonText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.SocialButton}>
              <Text style={styles.AppleIcon}></Text>
              <Text style={styles.SocialButtonText}>Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <Text style={styles.footerText}>
            Don&apos;t have an account?{" "}
            <Pressable onPress={() => router.replace("/SignUpScreen")}>
              <Text style={styles.link}>Create Account</Text>
            </Pressable>
          </Text>
        </View>

        {/* Bottom Security */}
        <View style={styles.SecuritySection}>
          <View style={styles.SecurityIconsRow}>
            <Shield size={20} color="#6B7280" />
            <Shield size={20} color="#6B7280" />
            <Lock size={20} color="#6B7280" />
          </View>

          <Text style={styles.SecurityText}>
            HIPAA COMPLIANT • SECURE 256-BIT ENCRYPTION
          </Text>
        </View>

        {/* Footer Links */}
        <View style={styles.BottomFooter}>
          <Text style={styles.CopyrightText}>
            © 2024 CareSync Medical Systems. All rights reserved.
          </Text>

          <View style={styles.FooterLinksRow}>
            <Text style={styles.FooterLink}>Privacy Policy</Text>
            <Text style={styles.FooterLink}>Terms of Service</Text>
            <Text style={styles.FooterLink}>Support</Text>
            <Text style={styles.FooterLink}>HIPAA Compliance</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignInScreen;
