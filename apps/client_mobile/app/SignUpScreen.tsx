import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mail, Lock, Eye, EyeOff, User, RefreshCw, } from "lucide-react-native";
import { styles } from "@caresync/mobile-ui";
import { Header } from "../components/Header";
import { ClientSignUpForm, initSignUpForm } from "@caresync/shared";

const SignUpScreen: React.FC = () => {
  const [signUpForm, setSignUpForm] =
    useState<ClientSignUpForm>(initSignUpForm);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleCreateAccount = (): void => {
    console.log("First Name:", signUpForm.fname);
    console.log("Last Name:", signUpForm.lname);
    console.log("Other Name:", signUpForm.othername);
    console.log("Email:", signUpForm.email);
    console.log("Username:", signUpForm.username);
    console.log("Password:", signUpForm.password);
    console.log("Confirm Password:", signUpForm.confirmPassword);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F7FB" }}>
      <Header navigation={"signup"} />
      <KeyboardAvoidingView
        style={{ backgroundColor: "transparent" }}
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
            {/* Card */}
            <View style={styles.card}>
              {/* Title */}
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>
                Join the professional healthcare network.
              </Text>

              {/* First Name & Last Name */}
              <View style={styles.row}>
                <View style={{ flex: 1, marginRight: 8 }}>
                  <Text style={styles.label}>First Name</Text>
                  <View style={[styles.InputWrapper, { marginBottom: 18 }]}>
                    <TextInput
                      placeholder="John"
                      placeholderTextColor="#9CA3AF"
                      style={styles.InputField}
                      value={signUpForm.fname}
                      onChangeText={(fname) => {setSignUpForm((prev) => ({...prev, fname}))}}
                      autoCapitalize="words"
                    />
                  </View>
                </View>

                <View style={{ flex: 1, marginLeft: 8 }}>
                  <Text style={styles.label}>Last Name</Text>
                  <View style={[styles.InputWrapper, { marginBottom: 18 }]}>
                    <TextInput
                      placeholder="Doe"
                      placeholderTextColor="#9CA3AF"
                      style={styles.InputField}
                      value={signUpForm.lname}
                      onChangeText={(lname)=> {setSignUpForm((prev) =>({...prev, lname}))}}
                      autoCapitalize="words"
                    />
                  </View>
                </View>
              </View>

              {/* Other Name */}
              <Text style={styles.label}>
                Other Name <Text style={styles.optionalLabel}>(Optional)</Text>
              </Text>
              <View style={styles.InputWrapper}>
                <TextInput
                  placeholder="Kwame"
                  placeholderTextColor="#9CA3AF"
                  style={styles.InputField}
                  value={signUpForm.othername}
                  onChangeText={(othername)=> {setSignUpForm((prev)=> ({...prev, othername}))}}
                  autoCapitalize="words"
                />
              </View>

              {/* Email Address */}
              <Text style={styles.label}>Email Address</Text>
              <View style={styles.InputWrapper}>
                <Mail size={20} color="#6B7280" />
                <TextInput
                  placeholder="name@example.com"
                  placeholderTextColor="#9CA3AF"
                  style={styles.InputField}
                  value={signUpForm.email}
                  onChangeText={(email)=> {setSignUpForm((prev)=> ({...prev, email}))}}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Username */}
              <Text style={styles.label}>Username</Text>
              <View style={styles.InputWrapper}>
                <User size={20} color="#6B7280" />
                <TextInput
                  placeholder="johndoe24"
                  placeholderTextColor="#9CA3AF"
                  style={styles.InputField}
                  value={signUpForm.username}
                  onChangeText={(username)=> {setSignUpForm((prev) =>({...prev, username}))}}
                  autoCapitalize="none"
                />
              </View>

              {/* Password */}
              <Text style={styles.label}>Password</Text>
              <View style={styles.InputWrapper}>
                <Lock size={20} color="#6B7280" />
                <TextInput
                  placeholder="••••••••"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showPassword}
                  style={styles.InputField}
                  value={signUpForm.password}
                  onChangeText={(password)=> {setSignUpForm((prev)=> ({...prev, password}))}}
                />
                <TouchableOpacity onPress={() => setShowPassword((v) => !v)}>
                  {showPassword ? (
                    <EyeOff size={20} color="#6B7280" />
                  ) : (
                    <Eye size={20} color="#6B7280" />
                  )}
                </TouchableOpacity>
              </View>

              {/* Confirm Password */}
              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.InputWrapper}>
                <RefreshCw size={20} color="#6B7280" />
                <TextInput
                  placeholder="••••••••"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showConfirmPassword}
                  style={styles.InputField}
                  value={signUpForm.confirmPassword}
                  onChangeText={(confirmPassword)=> {setSignUpForm((prev)=> ({...prev, confirmPassword}))}}
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword((v) => !v)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} color="#6B7280" />
                  ) : (
                    <Eye size={20} color="#6B7280" />
                  )}
                </TouchableOpacity>
              </View>

              {/* Create Account Button */}
              <TouchableOpacity
                style={[styles.button, { marginTop: 10 }]}
                onPress={handleCreateAccount}
              >
                <Text style={styles.buttonText}>Create Account</Text>
              </TouchableOpacity>

              {/* Terms */}
              <Text style={styles.termsText}>
                By signing up, you agree to our{" "}
                <Text style={styles.link}>Terms of Service</Text> and{" "}
                <Text style={styles.link}>Privacy Policy</Text>.
              </Text>
            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUpScreen;