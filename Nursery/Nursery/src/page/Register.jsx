import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Col } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useSetLoggedIn } from "../component/Wrapper";

const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 84vh; /* Ensure the LoginCard covers the entire viewport height */
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #27374d;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #dde6ed;
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FormInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const FormButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #dde6ed;
  color: #27374d;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #aab8cc;
  }
`;

const Register = () => {
  const setLoggedIn = useSetLoggedIn();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (formData.username === "") {
      return toast.error("Username cannot be empty!");
    }
    if (formData.email === "") {
      return toast.error("Email cannot be empty!");
    }
    if (formData.password === "" || formData.cpassword === "") {
      return toast.error("Password cannot be empty!");
    }
    if (formData.password != formData.cpassword) {
      return toast.error("Password and confirm password do not match!");
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:6500/api/v1/register",
        formData
      );
      localStorage.setItem("jwt", response.data.token);
      toast.success("Login successful!");
      setLoggedIn(true);
      setTimeout(() => {
        navigate("/shop");
      }, 500);
      console.log("Login successful:", response.data);
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <LoginPage>
      <LoginCard>
        <Title className="mt-5 mb-5 w-100">Register</Title>
        <Col md={12} sm={12}>
          <LoginForm onSubmit={handleLogin}>
            <FormInput
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <FormInput
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <FormInput
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              value={formData.cpassword}
              onChange={handleInputChange}
            />
            <FormButton type="submit">Register</FormButton>
          </LoginForm>
        </Col>
      </LoginCard>
    </LoginPage>
  );
};

export default Register;
