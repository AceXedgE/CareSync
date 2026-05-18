import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Shield, CircleHelp } from "lucide-react-native";
import { router } from "expo-router";


export function Header({navigation}: {navigation: string}) {
  return (
    <View style={styles.container}>
      <View style={styles.BrandRow}>
        <Shield size={20} color="#2563EB" />
        <Text style={styles.logo}>CareSync</Text>
      </View>

      <TouchableOpacity>
        {navigation === "signup" ? (
          <Pressable onPress={()=> router.replace("/SignInScreen")} >
            <Text style={styles.loginBtn}> Login </Text>
          </Pressable>
        ) : (
          <CircleHelp size={22} color="#64748B" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2563EB",
  },
  BrandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  container: {
    paddingTop: 30,
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    backgroundColor: "#fff",
  },
  loginBtn: {
    fontSize: 22,
    color: "#2563EB",
    fontWeight: "600",
    fontStyle: "italic",
  },
});
