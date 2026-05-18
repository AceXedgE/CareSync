import { Link, NavLink } from "react-router";
import { useOutletContext } from "react-router";
import type { SignUpOutletContext } from "@caresync/shared";
import { handleDragOver, handleDrop, handleDragLeave, useFileChooser } from "../../AuthHandles/fileUpload";
import { useState } from "react";


function SignUpStep3() {
  const { formData, setFormData } = useOutletContext<SignUpOutletContext>();
  const [,setIsDragging] = useState<boolean>(false)

  const {handleChooseFile, fileInputProps} = useFileChooser((file) => {setFormData({...formData, placeImg: file})})

  return (
    <div className="SignUpFormSection">
      <div className="SectionHeader"> 🏥 Workplace Information</div>
      <form className="SignUpForm">
        <div className="SignUpFormRow">
          <div className="SignUpFormField">
            <label>Hospital / Pharmacy Name</label>
            <input
              className="SignUpInput"
              placeholder="e.g. Central Health Medical"
              value={formData.placeName}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  placeName: e.target.value,
                }));
              }}
            />
          </div>

          <div className="SignUpFormField">
            <label>Location</label>
            <input
              className="SignUpInput"
              placeholder="📍 City, State"
              value={formData.placeLocation}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  placeLocation: e.target.value,
                }));
              }}
            />
          </div>
        </div>

        <div className="SignUpFormField">
          <label>Picture of Location</label>
          <div className="UploadBox">
            {formData.placeImg ? (
              <div>
                <div className="UploadIcon">☁️</div>
                <img
                  className="placeImageOverlay"
                  src={URL.createObjectURL(formData.placeImg)}
                  alt="default"
                />
                <input {...fileInputProps} />
                <div className="UploadLink" onClick={handleChooseFile}>
                  Click to change image
                </div>
              </div>
            ) : (
              <>
                <input {...fileInputProps} />
                <div
                  onClick={handleChooseFile}
                  onDragOver={(e) => {
                    handleDragOver(e, setIsDragging);
                  }}
                  onDragLeave={(e) => {
                    handleDragLeave(e, setIsDragging);
                  }}
                  onDrop={(e) => {
                    handleDrop(e, setIsDragging, (file) => {
                      setFormData((prev) => ({ ...prev, placeImg: file }));
                    });
                  }}
                >
                  <div className="UploadIcon">☁️</div>
                  <div className="UploadText">
                    Click to upload or drag and drop
                  </div>
                  <div className="UploadSubText">
                    SVG, PNG, JPG or GIF (max. 5MB)
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="FormDivider"></div>

        <div className="SectionHeader">👤 Professional Summary</div>

        <div className="SignUpFormField">
          <label>Bio / Professional Summary</label>
          <textarea
            className="SignUpTextarea"
            placeholder="Briefly describe your medical expertise and professional background..."
            value={formData.biography}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, biography: e.target.value }));
            }}
          />
          <div className="HelperText">
            Minimum 150 characters. Professional use only.
          </div>
        </div>

        {/* Actions */}
        <div className="SignUpFormRow" style={{ marginTop: 20 }}>
          <NavLink to="../step2" className="link" state={{ currentStep: 2 }}>
            <button type="button" className="BackButton btn">
              ← Back
            </button>
          </NavLink>

          <Link to="../preview" state={{ currentStep: 4 }}>
            <button type="submit" className="PrimaryWideButton">
              Complete Registration ✓
            </button>
          </Link>
        </div>

        {/* Footer note */}
        <div className="SecureNote">
          Secure 256-bit SSL encrypted registration.
        </div>
      </form>
    </div>
  );
}

export default SignUpStep3;
