import '../../styles/auth.css'
import  { Outlet, useLocation } from 'react-router'
import { useState } from 'react';

import type { SignUpForm } from '@caresync/shared';
import { InitialSignUpForm } from '@caresync/shared';

function SignUp() {
    const location = useLocation()
    const currentStep = location.state?.currentStep || 1;

    const [formData , setFormData] = useState<SignUpForm>(InitialSignUpForm);

    return (
        <div className="signingRoot">
            <div className='signingDiv'>
                <div className="SignUpCard">
                    <div className="SignUpStepper">
                        <div className={`SignUpStep 
                            ${currentStep == 1 || currentStep == 2 || currentStep == 3 || currentStep == 4? "SignUpStepActive" : "" } `} >
                            <span className="SignUpStepCircle" >1</span>
                            <span className="SignUpStepLabel">Account</span>
                        </div>
                        <div className='line' />
                        <div className={`SignUpStep 
                            ${currentStep == 2 || currentStep == 3 || currentStep == 4? "SignUpStepActive" : "" } `}>
                            <span className="SignUpStepCircle">2</span>
                            <span className="SignUpStepLabel">Verification</span>
                        </div>
                        <div className='line' />
                        <div className={`SignUpStep ${currentStep == 3 || currentStep == 4? "SignUpStepActive" : "" } `}>
                            <span className="SignUpStepCircle">3</span>
                            <span className="SignUpStepLabel">Clinic</span>
                        </div>
                        <div className='line' />
                        <div className={`SignUpStep ${currentStep == 4 ? "SignUpStepActive" : "" } `}>
                            <span className="SignUpStepCircle">4</span>
                            <span className="SignUpStepLabel">Profile</span>
                        </div>
                    </div>
                    < Outlet context={{formData, setFormData}} />
                </div>
            </div>
        </div>
    );
}

export default SignUp;