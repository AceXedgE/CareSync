import '../../styles/auth.css'
import { Outlet } from "react-router"

export default function AuthLayout() {
    return(
        <div className="AuthLayout">
            <div className="leftContainer">
                <div className="lContainer">
                    <div className="mainLTitle">Empowering Healthcare Professionals.</div>
                    <div className="subLTitle">Advanced clinical management tools designed for clarity, security, and exceptional patient care.</div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}