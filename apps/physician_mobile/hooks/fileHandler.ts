import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import {File as ExpoFile} from "expo-file-system";
import { mobileDataURLtoFile } from "@caresync/shared";

export const useDoctorDocumentUpload = () => {

  const pickCertificate = async (): Promise< {uri: string; name: string } | null> => {
  const result = await DocumentPicker.getDocumentAsync({
    type: ["application/pdf", "image/jpeg", "image/png"],
    copyToCacheDirectory: true,
    multiple: false,
  });

  if (result.canceled) return null;

  const asset = result.assets[0];
  return { uri: asset.uri, name: asset.name ?? "certificate" };
};

  return { pickCertificate };
};

export const useImagePickers = () => {
  const pickImage = async (): Promise<string | null> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.8,
      allowsEditing: true
    });

    if (result.canceled) return null;

    return result.assets[0].uri;
  };

  return { pickImage };
};

export const useUriToFile = () => {
  const uriToFile = async (
    uri: string,
    fileName: string,
    mimeType: string
  ) => {
    const expoFile = new ExpoFile(uri);
    const base64 = await expoFile.base64();

    return mobileDataURLtoFile(base64, fileName, mimeType);
  };

  return { uriToFile };
};