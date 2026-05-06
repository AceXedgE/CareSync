import { NavLink } from "react-router";

function SignUpStep2() {
    return (
        <div className="SignUpFormSection">
            <div className="SignUpFormTitle">Professional Verification</div>
            <div className="SignUpFormSubtitle">
                Please upload your credentials to verify your identity and medical license.
            </div>

            <form className="SignUpForm">

                {/* Profile Picture */}
                <div className="SignUpFormField">
                    <label>Profile Picture</label>
                    <div className="ProfileUploadContainer">
                        <div className="ProfileUploadCircle">
                            <span className="ProfileIcon">👤</span>
                            <span className="CameraIcon">📷</span>
                        </div>
                        <div className="ProfileUploadText">
                            Upload a clear, professional portrait. This will be visible to your patients and colleagues.
                            <div className="UploadLink">Choose image</div>
                        </div>
                    </div>
                </div>

                {/* Certificate Upload */}
                <div className="SignUpFormField">
                    <label>Medical Certificate / License</label>
                    <div className="UploadBox">
                        <div className="UploadIcon">📄</div>
                        <div className="UploadText">
                            Drag and drop your certificate here <br />
                            <span className="UploadSubText">
                                PDF, PNG, or JPG (max. 10MB)
                            </span>
                        </div>
                        <div className="UploadLink">or browse files</div>
                    </div>
                    <div className="HelperText">
                        Proof of registration as a doctor or pharmacist.
                    </div>
                </div>

                {/* Ghana Card */}
                <div className="SignUpFormField">
                    <label>Ghana Card (National ID)</label>
                    <div className="SignUpFormRow">
                        <button type="button" className="UploadButton">
                            🪪 Upload Front
                        </button>
                        <button type="button" className="UploadButton">
                            🪪 Upload Back
                        </button>
                    </div>
                </div>

                {/* Info Box */}
                <div className="InfoBox">
                    ℹ️ Verification typically takes 24–48 business hours. You will be notified once your account is activated.
                </div>

                {/* Actions */}
                <div className="SignUpFormRow" style={{ justifyContent: "space-between", marginTop: 10 }}>
                    <NavLink to="../" className="link" state={{ currentStep: 1 }} >
                        <button type="button" className="BackButton">
                            ← Back
                        </button>
                    </NavLink>
                    <NavLink className="link" to="../step3" state={{ currentStep: 3 }}>
                        <button type="submit" className="SignUpButton" style={{ maxWidth: 200 }}>
                            Continue → 
                        </button>
                    </NavLink>
                </div>

            </form>
        </div>
    );
}

export default SignUpStep2;