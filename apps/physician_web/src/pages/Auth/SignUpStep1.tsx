import { Link } from "react-router"

function SignUpStep1 (){
    return (
        <div className="SignUpFormSection">
            <div className="SignUpFormTitle">Personal Information</div>
            <div className="SignUpFormSubtitle">Step 1: Let's start with your basic profile details.</div>
            <form className="SignUpForm">
                <div className="SignUpFormRow">
                    <div className="SignUpFormField">
                        <label>First Name</label>
                        <input className="SignUpInput" placeholder="Enter first name" />
                    </div>
                    <div className="SignUpFormField">
                        <label>Last Name</label>
                        <input className="SignUpInput" placeholder="Enter last name" />
                    </div>
                </div>
                <div className="SignUpFormRow">
                    <div className="SignUpFormField" style={{ width: '100%' }}>
                        <label>Other Name (optional)</label>
                        <input className="SignUpInput" placeholder="Enter middle name or title" />
                    </div>
                </div>
                <div className="SignUpFormRow">
                    <div className="SignUpFormField">
                        <label>Email Address</label>
                        <input className="SignUpInput" placeholder="doctor@clinic.com" />
                    </div>
                    <div className="SignUpFormField">
                        <label>Phone Number</label>
                        <input className="SignUpInput" placeholder="+1 (555) 000-0000" />
                    </div>
                </div>
                <div className="SignUpFormRow">
                    <div className="SignUpFormField">
                        <label>Password</label>
                        <input className="SignUpInput" type="password" placeholder="••••••••" />
                    </div>
                    <div className="SignUpFormField">
                        <label>Confirm Password</label>
                        <input className="SignUpInput" type="password" placeholder="••••••••" />
                    </div>
                </div>
                <Link to="step2" className="link" state={{ currentStep: 2 }}>
                <button className="SignUpButton" type="submit">
                   Continue <span style={{ marginLeft: 8 }}>→</span>
                </button>
                </Link>
                
            </form>
            <div className="SignUpFooter">
                Already have an account? <a className="SignUpFooterLink">Sign In</a>
            </div>
        </div>
    )
}

export default SignUpStep1