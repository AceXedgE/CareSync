import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "../components/styles/AuthStyles";

const SignUpScreen: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [otherName, setOtherName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = () => {
        // Handle sign up logic
        console.log({
            firstName, lastName, otherName, email, username, location, password, confirmPassword
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            {/* Header */}
            <View style={styles.headerRow}>
                <Text style={styles.logo}>CareSync</Text>
                <TouchableOpacity>
                    <Text style={styles.loginLink}>Log In</Text>
                </TouchableOpacity>
            </View>

            {/* Card */}
            <View style={styles.card}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Join the professional healthcare network.</Text>

                {/* Name Fields */}
                <View style={styles.row}>
                    <View style={{ flex: 1, marginRight: 8 }}>
                        <Text style={styles.label}>First Name</Text>
                        <TextInput
                            placeholder="John"
                            style={styles.input}
                            value={firstName}
                            onChangeText={setFirstName}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                        <Text style={styles.label}>Last Name</Text>
                        <TextInput
                            placeholder="Doe"
                            style={styles.input}
                            value={lastName}
                            onChangeText={setLastName}
                        />
                    </View>
                </View>

                <Text style={styles.label}>Other Name <Text style={styles.optionalLabel}>(Optional)</Text></Text>
                <TextInput
                    placeholder="Kwame"
                    style={styles.input}
                    value={otherName}
                    onChangeText={setOtherName}
                />

                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    placeholder="name@example.com"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Username</Text>
                <TextInput
                    placeholder="johndoe24"
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                    placeholder="••••••••"
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                />

                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    placeholder="••••••••"
                    secureTextEntry
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>

                <Text style={styles.termsText}>
                    By signing up, you agree to our <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>.
                </Text>
            </View>
        </ScrollView>
    );
};

export default SignUpScreen;