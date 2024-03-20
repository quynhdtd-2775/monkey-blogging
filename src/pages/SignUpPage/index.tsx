import React, { useState } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase-app/firebase-config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUpPageStyles = styled.div`
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

const SignUpPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      console.log(user);
      toast.success("Create user successfully");
      await updateProfile(auth?.currentUser as any, {
        displayName: values.fullname,
      });
      navigate("/sign-in");
    } catch (error) {
      console.log("Login errors");
    }
  };

  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 4x" alt="monkey-blogging" className="logo" />

        <h1 className="heading" style={{ color: "#2EBAC1" }}>
          Monkey Blogging
        </h1>

        <div>
          <div className="field">
            <label htmlFor="fullname" className="label">
              Full name
            </label>
            <input
              name="fullname"
              style={{
                padding: "20px",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid #00B4AA ",
              }}
              type="text"
              className="input:text"
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />

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
            onClick={handleSignUp}
          >
            Sign up
          </button>
        </div>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
