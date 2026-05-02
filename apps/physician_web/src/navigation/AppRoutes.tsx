import { Routes, Route } from "react-router"
import SignUp from '../pages/Auth/SignUp'
import SignIn from '../pages/Auth/SignIn'
import AuthLayout from '../pages/Auth/AuthLayout'


function AppRoutes () {
  return(
    <Routes>
      <Route element={<AuthLayout />}>
       <Route path={"signup"} element={<SignUp />} />
       <Route index element={<SignIn />} />
      </Route>
   
    </Routes>
  )
}

export default AppRoutes