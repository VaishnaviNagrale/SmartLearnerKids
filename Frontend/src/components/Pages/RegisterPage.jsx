import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../widgets/Spinner";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Form submit handler
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_APP_API_URL}/register`, values);
      message.success("Registration Successful");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  // Prevent registration for logged-in users
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen" style={{ background: "linear-gradient(to bottom right, #ffffff, #fa9490, #85e7f8)", animation: "gradientAnimation 30s infinite" }}>
    {loading && <Spinner />}
    <Form layout="vertical" onFinish={submitHandler} className="bg-white shadow-md rounded-lg px-8 py-6 sm:px-10 sm:py-8 lg:px-12 lg:py-10 max-w-md w-full">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800">Register</h1>
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
        <Input className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500" />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
        <Input type="email" className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500" />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
        <Input.Password className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500" />
      </Form.Item>
      <div className="flex flex-col items-center">
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg focus:outline-none hover:bg-blue-700 mb-4 w-full">
          Register
        </button>
        <div className="text-center">
          <Link to="/login" className="text-blue-500 hover:underline">
            Already Registered? Click Here to Login
          </Link>
        </div>
      </div>
    </Form>
  </div>
  
  );
};

export default Register;
