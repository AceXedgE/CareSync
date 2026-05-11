import { StyleSheet } from "react-native";

const AuthStyles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: "#F5F7FB",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    minHeight: '100%'
  },

  headerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  loginLink: {
    color: '#2563EB',
    fontWeight: '500',
    fontSize: 15,
  },

  logo: {
    fontSize: 22,
    fontWeight: "600",
    color: "#2563EB",
    marginBottom: 20,
  },

  card: {
    width: "93%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 35,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 10,
    marginBottom: 20,
    margin: 30
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  toggleButtonActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  toggleButtonText: {
    color: '#374151',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
  },
  toggleButtonTextActive: {
    color: '#fff',
    fontWeight: '700',
  },

  row: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 0,
  },

  optionalLabel: {
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: '400',
  },
  termsText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 18,
    marginBottom: -8,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 5,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#F9FAFB",
    fontSize: 16,
  },

  passwordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  forgot: {
    fontSize: 12,
    color: "#2563EB",
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  footerText: {
    textAlign: "center",
    marginTop: 15,
    color: "#6B7280",
  },

  link: {
    color: "#2563EB",
    fontWeight: "600",
  },
});

export default AuthStyles;