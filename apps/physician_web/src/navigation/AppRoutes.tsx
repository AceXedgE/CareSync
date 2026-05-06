import { Routes, Route } from "react-router"

import SignUp from '../pages/Auth/SignUp'
import SignIn from '../pages/Auth/SignIn'
import SignUpStep1 from "../pages/Auth/SignUpStep1"
import SignUpStep2 from "../pages/Auth/SignUpStep2"
import SignUpStep3 from "../pages/Auth/SignUpStep3"
import AuthLayout from '../pages/Auth/AuthLayout'


function AppRoutes () {
  return(
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={"signup"} element={<SignUp />}>
          <Route index element={<SignUpStep1 />} />
          <Route path="step2" element={<SignUpStep2 />} />
          <Route path="step3" element={<SignUpStep3 />} />
        </Route>
        <Route index element={<SignIn />} />
      </Route>
   
    </Routes>
  )
}

export default AppRoutes