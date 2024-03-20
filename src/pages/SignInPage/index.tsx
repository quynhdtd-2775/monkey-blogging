import React, { useState } from "react";
import styled from "styled-components";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase-app/firebase-config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignInPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;

  .logo {
    margin: 0 auto 20px;
  }

  .field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
  }

  .label {
    color: ${(props) => props.theme.grayDark};
    font-weight: 600;
    cursor: pointer;
  }

  .input {
    width: 100%;
    padding: 20px;
  }
`;

const SignInPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const cred = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      navigate("/");
    } catch (error) {
      console.log("");
    }
  };

  return (
    <SignInPageStyles>
      <div className="container">
        <img srcSet="/logo.png 4x" alt="monkey-blogging" className="logo" />

        <h1 className="heading" style={{ color: "#2EBAC1" }}>
          Monkey Blogging
        </h1>

        <div>
          <div className="field">
            <label htmlFor="emailAdress" className="label">
              Email address
            </label>
            <input
              name="email"
              style={{
                padding: "20px",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid #00B4AA ",
              }}
              onChange={handleInputChange}
              type="text"
              className="input:text"
              placeholder="Enter your email address"
            />

            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              name="password"
              onChange={handleInputChange}
              style={{
                padding: "20px",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid #00B4AA ",
              }}
              type="text"
              className="input:text"
              placeholder="Enter your password"
            />
          </div>

          <button
            style={{
              padding: "20px",
              marginTop: "40px",
              width: "343px",
              height: "80px",
              fontSize: "24px",
              color: "#FFFFFF",
              background:
                "linear-gradient(107.61deg, #00A7B4 15.59%, #A4D96C 87.25%)",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </SignInPageStyles>
  );
};

export default SignInPage;
