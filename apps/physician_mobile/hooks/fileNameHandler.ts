const sanitize = (str: string) =>
  str.trim().toLowerCase().replace(/\s+/g, "_");

export const buildFileName = (
  fname: string,
  lname: string,
  email: string,
  type: "ghana_card" | "certificate" | "profile" | "place",
  mimeType: string
) => {
  const base = `${sanitize(fname)}_${sanitize(lname)}_${sanitize(email)}`;

  const extension =
    mimeType === "application/pdf"
      ? "pdf"
      : mimeType.includes("png")
      ? "png"
      : "jpg";

  return `${base}_${type}.${extension}`;
};