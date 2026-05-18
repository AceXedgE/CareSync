import { Link } from "react-router"
import { useOutletContext } from "react-router"
import type { SignUpOutletContext } from '@caresync/shared';



function SignUpStep1 (){
    const {formData, setFormData} = useOutletContext<SignUpOutletContext>()

    return (
      <div className="SignUpFormSection">
        <div className="SignUpFormTitle">Personal Information</div>
        <div className="SignUpFormSubtitle">
          Step 1: Let's start with your basic profile details.
        </div>
        <form className="SignUpForm">
          <div className="SignUpFormRow">
            <div className="SignUpFormField">
              <label>First Name</label>
              <input
                className="SignUpInput"
                type="string"
                placeholder="Enter first name"
                value={formData.fname}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, fname: e.target.value }));
                }}
              />
            </div>
            <div className="SignUpFormField">
              <label>Last Name</label>
              <input
                className="SignUpInput"
                type="text"
                placeholder="Enter last name"
                value={formData.lname}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, lname: e.target.value }));
                }}
              />
            </div>
          </div>
          <div className="SignUpFormRow">
            <div className="SignUpFormField" style={{ width: "100%" }}>
              <label>Other Name (optional)</label>
              <input
                className="SignUpInput"
                type="text"
                placeholder="Enter middle name or title"
                value={formData.othername}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    othername: e.target.value,
                  }));
                }}
              />
            </div>
          </div>
          <div className="SignUpFormRow">
            <div className="SignUpFormField">
              <label>Email Address</label>
              <input
                className="SignUpInput"
                type="email"
                placeholder="doctor@clinic.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                }}
              />
            </div>
            <div className="SignUpFormField">
              <label>Phone Number</label>
              <input
                className="SignUpInput"
                type="number"
                placeholder="+1 (555) 000-0000"
                value={formData.phoneNumber}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }));
                }}
              />
            </div>
          </div>
          <div className="SignUpFormRow">
            <div className="SignUpFormField">
              <label>Password</label>
              <input
                className="SignUpInput"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="SignUpFormField">
              <label>Confirm Password</label>
              <input
                className="SignUpInput"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }));
                }}
              />
            </div>
          </div>
          <Link to="step2" className="link" state={{ currentStep: 2 }}>
            <button className="SignUpButton btn"
              type="submit"
              style={{ marginTop: "18px" }}
            >
              Continue <span style={{ marginLeft: 8 }}>→</span>
            </button>
          </Link>
        </form>
        <div className="SignUpFooter">
          Already have an account?
          <Link to="../" className="link">
            <span className="SignUpFooterLink">Sign In</span>
          </Link>
        </div>
      </div>
    );
}

export default SignUpStep1