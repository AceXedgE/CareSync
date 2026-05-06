import React, { useState } from "react";
import "../../styles/auth.css";
import logo from '../../assets/Overlay.png'
import { Link } from "react-router";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, ] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Add sign-in logic here
    setTimeout(() => setIsLoading(false), 1200);
  };

  return (
    <div className="signingRoot">
      <div className="signingDiv">
        <div className="signInDiv">
            <div className="titleImg">
                <img src={logo} alt="" />
            </div>
            <div className="signinTitle">Doctor Sign In</div>
            <div className="signinDesc">
              Access your clinical dashboard and patient records.
            </div>
            <form onSubmit={handleSubmit}>
                <label> Email Address </label>
                <input className="text-input"
                  type="email"
                  placeholder="dr.smith@caresync.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  style={{ width: "100%", marginBottom: 18 }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={{ marginBottom: 6 }}> Password </label>
                    <a className="forgot-link" style={{ fontSize: 13, color: "#2563eb", cursor: "pointer" }}>
                      Forgot password?
                    </a>
                </div>
                <input className="text-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  style={{ width: "100%", marginBottom: 10 }}
                />
                <div style={{ marginBottom: 16, marginTop: 12 }}>
                  <label style={{ fontSize: 16, cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={keepSignedIn}
                      onChange={() => setKeepSignedIn(v => !v)}
                      style={{ marginRight: 8 }}
                    />
                    Keep me signed in
                  </label>
                </div>
                <button className="signinBtn"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="spinner" />
                  ) : (
                    <>
                      Sign In
                      <span style={{ fontSize: 18, marginLeft: 4 }}>→</span>
                    </>
                  )}
                </button>
            </form>
            <div className="divider" />
            <div className="assist-text" style={{ textAlign: "center", fontSize: 14 }}> Need assistance?{" "}
              <a className="assist-link" style={{ color: "#2563eb", fontWeight: 600, cursor: "pointer" }}>
                Contact Administrator
              </a>
            </div>
            <div className="assist-text" style={{ textAlign: "center", fontSize: 14 }}> Don't have an account?{" "}
              <span className="assist-link" style={{ color: "#2563eb", fontWeight: 600 }}>
                <Link className="link" to="signup">SignUp</Link>
              </span>
            </div>
        </div>
        <div className="signinMeta" style={{ justifyContent: "center" }}>
          <span>Help</span>
          <span>Security</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;