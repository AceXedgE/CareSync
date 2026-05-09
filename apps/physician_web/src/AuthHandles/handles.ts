export type SignUpForm = {
    fname: string
    lname: string
    othername: string
    email: string
    phoneNumber:string
    password: string
    confirmPassword: string

    profileImg: File | null
    proofOfCertification: File | null
    ghanacardImg: File | null
    placeName: string
    placeLocation: string
    placeImg: File | null
    biography: string
}
export const InitialSignUpForm: SignUpForm = {
    fname: "",
    lname: "",
    othername: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",

    profileImg: null,
    proofOfCertification: null,
    ghanacardImg: null,
    placeName: "",
    placeLocation: "",
    placeImg: null,
    biography: "",
}

export type SignUpOutletContext = {
  formData: SignUpForm
  setFormData: React.Dispatch<React.SetStateAction<SignUpForm>>
}


export const dataURLtoFile = ( dataUrl: string, fileName: string): File => {
  const arr = dataUrl.split(",")
  const mime = arr[0].match(/:(.*?);/)?.[1]

  if (!mime) {
    throw new Error("Invalid mime type")
  }

  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File( [u8arr], fileName, { type: mime })
}