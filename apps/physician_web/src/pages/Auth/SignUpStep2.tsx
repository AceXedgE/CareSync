import { NavLink, useOutletContext } from "react-router";
import type { SignUpOutletContext } from "../../AuthHandles/handles";
import WebcamModal from "./(modals)/WebcamModal";
import { useState } from "react";
import { handleDragOver, handleDrop, handleDragLeave, useFileChooser } from "../../AuthHandles/fileUpload";
import { dataURLtoFile } from "@caresync/shared";

function SignUpStep2() {
  const { formData, setFormData } = useOutletContext<SignUpOutletContext>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setIsDragging] = useState(false);

  const { handleChooseFile, fileInputProps } = useFileChooser((file) => {
    console.log("GhanaCard image uploaded:", file.name);
    setFormData({
      ...formData, proofOfCertification: file,
    });
  });
  const { handleChooseFile:handleGhanaCardImg, fileInputProps: GhanaCardImgProps } = useFileChooser((file) => {
    console.log("GhanaCard image uploaded:", file.name);
    setFormData({
      ...formData,
      ghanacardImg: file,
    });
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveImage = (imageSrc: string) => {
    setFormData({
      ...formData,
      profileImg: dataURLtoFile(
        imageSrc, `${formData.fname}${formData.lname}${formData.email}.jpg`,
      ),
    });
    setIsModalOpen(false);
  };

  return (
    <div className="SignUpFormSection">
      <div className="SignUpFormTitle">Professional Verification</div>
      <div className="SignUpFormSubtitle">
        Please upload your credentials to verify your identity and medical
        license.
      </div>

      <form className="SignUpForm">
        <div className="SignUpFormField">
          <label>Profile Picture</label>
          <div className="ProfileUploadContainer">
            <div
              className="ProfileUploadCircle"
              style={{ overflow: "hidden", position: "relative" }}
            >
              {formData.profileImg ? (
                <img
                  className="ProfilePreviewImg"
                  src={URL.createObjectURL(formData.profileImg)}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <span className="ProfileIcon">👤</span>
              )}
            </div>
            <div className="ProfileUploadText">
              {" "}
              Upload a clear, professional portrait. This will be visible to
              your patients and colleagues.
              <div className="UploadLink" onClick={handleOpenModal}>
                {" "}
                Choose image or Take Photo{" "}
              </div>
            </div>
          </div>
        </div>

        <WebcamModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveImage}
        />

        {/* Certificate Upload */}
        <div className="SignUpFormField">
          <label>Medical Certificate / License</label>
          <div className="UploadBox">
            {formData.proofOfCertification ? (
              <div>
                <div className="UploadIcon">📄</div>
                <div className="UploadText">File Uploaded</div>
                <div
                  style={{
                    color: "blue",
                    fontSize: "15px",
                    fontWeight: 600,
                    marginTop: 2,
                  }}
                >
                  {formData.proofOfCertification.name}{" "}
                </div>
                <input {...fileInputProps} />
                <div className="UploadLink" onClick={handleChooseFile}>
                  {" "}
                  change files?
                </div>
              </div>
            ) : (
              <div
                onDragOver={(e) => handleDragOver(e, setIsDragging)}
                onDragLeave={(e) => handleDragLeave(e, setIsDragging)}
                onDrop={(e) =>
                  handleDrop(e, setIsDragging, (file) => {
                    setFormData((prev) => ({
                      ...prev,
                      proofOfCertification: file,
                    }));
                  })
                }
              >
                <div className="UploadIcon">📄</div>
                <div className="UploadText">
                  Drag and drop your certificate here <br />
                  <span className="UploadSubText">
                    PDF, PNG, or JPG (max. 10MB)
                  </span>
                </div>
                <input {...fileInputProps} accept="*" />
                <div className="UploadLink" onClick={handleChooseFile}>
                  or browse files
                </div>
              </div>
            )}
          </div>
          <div className="HelperText">
            Proof of registration as a doctor or pharmacist.
          </div>
        </div>

        {/* Ghana Card */}
        <div className="SignUpFormField">
          <label>Ghana Card (National ID)</label>
          <div className="SignUpFormRow">
            <input {...GhanaCardImgProps} />
            {formData.ghanacardImg ? (
              <div className="GhanaCardUpload" onClick={handleGhanaCardImg}>
                <img
                  style={{ width: "100px" }}
                  src={URL.createObjectURL(formData.ghanacardImg)}
                />
                <span style={{ color: "blue", cursor: "pointer" }}>
                  click to change Image
                </span>
              </div>
            ) : (
              <button
                className="UploadButton"
                type="button"
                onClick={handleGhanaCardImg}
              >
                🪪 Click Upload Image
              </button>
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="InfoBox">
          ℹ️ Verification typically takes 24–48 business hours. You will be
          notified once your account is activated.
        </div>

        {/* Actions */}
        <div className="SignUpFormRow" style={{ marginTop: 10 }}>
          <NavLink to="../" className="link" state={{ currentStep: 1 }}>
            <button type="button" className="BackButton btn">
              ← Back
            </button>
          </NavLink>
          <NavLink className="link" to="../step3" state={{ currentStep: 3 }}>
            <button
              className="SignUpButton btn"
              type="submit"
              style={{ maxWidth: 200 }}
            >
              Continue →
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default SignUpStep2;
