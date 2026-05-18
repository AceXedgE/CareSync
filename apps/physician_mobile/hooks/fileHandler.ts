import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { File as ExpoFile } from "expo-file-system";
import { mobileDataURLtoFile } from "@caresync/shared";

export const useDoctorDocumentUpload = () => {

  const pickCertificate = async (): Promise<File | null> => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["application/pdf", "image/jpeg", "image/png"],
      copyToCacheDirectory: true,
      multiple: false,
    });

    if (result.canceled) return null;
    const asset = result.assets[0];

    const expoFile = new ExpoFile(asset.uri);
    const base64 = await expoFile.base64();

    return mobileDataURLtoFile(base64, asset.name ?? "certificate", asset.mimeType ?? "application/pdf");
  };

  const pickGhanaCard = async (): Promise<File | null> => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return null;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      base64: true,
      quality: 0.8,
      allowsMultipleSelection: false,
    });

    if (result.canceled) return null;
    const asset = result.assets[0];

    if (!asset.base64) return null;
    return mobileDataURLtoFile(asset.base64, "ghana_card.jpg", "image/jpeg");
  };

  const pickProfileImage = async (): Promise<File | null> => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return null;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
      quality: 0.8,
      allowsMultipleSelection: false,
    });

    if (result.canceled) return null;
    const asset = result.assets[0];

    if (!asset.base64) return null;
    return mobileDataURLtoFile(asset.base64, "profile_picture.jpg", "image/jpeg");
  };

  return { pickCertificate, pickGhanaCard, pickProfileImage };
};