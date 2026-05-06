import { NavLink } from 'react-router'

function SignUpStep3() {
    return (
        <div className="SignUpFormSection">

            {/* Workplace Info */}
            <div className="SectionHeader">
                🏥 Workplace Information
            </div>

            <form className="SignUpForm">

                <div className="SignUpFormRow">
                    <div className="SignUpFormField">
                        <label>Hospital / Pharmacy Name</label>
                        <input
                            className="SignUpInput"
                            placeholder="e.g. Central Health Medical"
                        />
                    </div>

                    <div className="SignUpFormField">
                        <label>Location</label>
                        <input
                            className="SignUpInput"
                            placeholder="📍 City, State"
                        />
                    </div>
                </div>

                {/* Location Image Upload */}
                <div className="SignUpFormField">
                    <label>Picture of Location</label>

                    <div className="UploadBox">
                        <div className="UploadIcon">☁️</div>

                        <div className="UploadText">
                            Click to upload or drag and drop
                        </div>

                        <div className="UploadSubText">
                            SVG, PNG, JPG or GIF (max. 5MB)
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="FormDivider"></div>

                {/* Professional Summary */}
                <div className="SectionHeader">
                    👤 Professional Summary
                </div>

                <div className="SignUpFormField">
                    <label>Bio / Professional Summary</label>

                    <textarea
                        className="SignUpTextarea"
                        placeholder="Briefly describe your medical expertise and professional background..."
                    />
                    
                    <div className="HelperText">
                        Minimum 150 characters. Professional use only.
                    </div>
                </div>

                {/* Actions */}
                <div className="SignUpFormRow" style={{ justifyContent: "space-between", marginTop: 20 }}>
                    <NavLink to="../step2" className="link" state={{ currentStep: 2 }} >
                        <button type="button" className="BackButton">
                            ← Back
                        </button>
                    </NavLink>

                    <button type="submit" className="PrimaryWideButton">
                        Complete Registration ✓
                    </button>
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