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

  /*  ***************************************************** */

  TopBar: {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 20,
  paddingVertical: 16,
  backgroundColor: "#FFFFFF",
  borderBottomWidth: 1,
  borderBottomColor: "#E5E7EB",
},

InputWrapper: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#D1D5DB",
  borderRadius: 10,
  paddingHorizontal: 14,
  backgroundColor: "#F9FAFB",
  marginBottom: 18,
},

InputField: {
  flex: 1,
  paddingVertical: 12,
  paddingHorizontal: 10,
  fontSize: 16,
  color: "#111827",
},

ButtonContent: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
},

DividerRow: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 24,
  marginBottom: 22,
},

DividerLine: {
  flex: 1,
  height: 1,
  backgroundColor: "#D1D5DB",
},

DividerText: {
  marginHorizontal: 10,
  color: "#6B7280",
  fontSize: 13,
},

SocialRow: {
  flexDirection: "row",
  gap: 12,
  marginBottom: 22,
},

SocialButton: {
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#D1D5DB",
  borderRadius: 10,
  paddingVertical: 12,
  backgroundColor: "#FFFFFF",
  gap: 8,
},

SocialButtonText: {
  fontSize: 15,
  color: "#374151",
  fontWeight: "500",
},

AppleIcon: {
  fontSize: 18,
  color: "#111827",
  fontWeight: "700",
},

SecuritySection: {
  alignItems: "center",
  marginBottom: 25,
},

SecurityIconsRow: {
  flexDirection: "row",
  gap: 20,
  marginBottom: 10,
},

SecurityText: {
  fontSize: 11,
  color: "#9CA3AF",
  letterSpacing: 1,
  textAlign: "center",
},

BottomFooter: {
  width: "100%",
  paddingTop: 20,
  paddingBottom: 10,
  borderTopWidth: 1,
  borderTopColor: "#E5E7EB",
  alignItems: "center",
},

CopyrightText: {
  fontSize: 12,
  color: "#6B7280",
  marginBottom: 16,
  textAlign: "center",
},

FooterLinksRow: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 14,
  paddingHorizontal: 20,
},

FooterLink: {
  color: "#64748B",
  fontSize: 12,
  textDecorationLine: "underline",
},
});

export default AuthStyles;








export const phyAuthStyles = StyleSheet.create({
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "93%",
    marginBottom: 20,
    marginTop: 6,
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  stepCircleActive: {
    backgroundColor: "#2563EB",
  },
  stepNumber: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
  stepLabel: {
    fontSize: 13,
    color: "#9CA3AF",
    marginRight: 8,
  },
  stepLabelActive: {
    color: "#2563EB",
    fontWeight: "600",
  },
  stepLine: {
    width: 28,
    height: 1,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 6,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 15,
    color: "#6B7280",
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2563EB",
    letterSpacing: 0.8,
    marginBottom: 16,
  },
  uploadRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#F9FAFB",
    gap: 10,
  },
  uploadIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
  uploadHint: {
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 2,
  },
  uploadBtn: {
    borderWidth: 1,
    borderColor: "#2563EB",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  uploadBtnText: {
    color: "#2563EB",
    fontWeight: "600",
    fontSize: 13,
  },
  avatarWrap: {
    position: "relative",
    marginBottom: 8,
  },
  avatarPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#BFDBFE",
  },
  avatarIconBg: {
    justifyContent: "center",
    alignItems: "center",
  },
  cameraBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  avatarLabel: {
    fontSize: 13,
    color: "#6B7280",
  },
  bioHint: {
    fontSize: 12,
    color: "#9CA3AF",
    fontStyle: "italic",
    marginBottom: 0,
  },
});