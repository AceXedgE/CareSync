import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Shield, CircleHelp } from "lucide-react-native";


export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.BrandRow}>
        <Shield size={20} color="#2563EB" />
        <Text style={styles.logo}>CareSync</Text>
      </View>

      <TouchableOpacity>
        <CircleHelp size={22} color="#64748B" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 22,
    fontWeight: "600",
    color: "#2563EB",
    marginBottom: 20,
  },
  BrandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  container: {
    marginTop: 0,
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
});
