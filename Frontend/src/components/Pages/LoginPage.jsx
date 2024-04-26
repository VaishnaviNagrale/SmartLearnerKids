import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../widgets/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Form submit handler
  const submitHandler = async (values) => {
    try {
      console.log(import.meta.env.VITE_APP_API_URL);
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_APP_API_URL}/login`, values);
      message.success("Login Successful");
      setLoading(false);
      navigate("/home")
      // Redirect or perform other actions on successful login
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // The request was made, but the server responded with a status code
        // outside the range of 2xx
        console.error("Server Error:", error.response.data);
        message.error("Invalid credentials. Please try again.");
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No Response from Server");
        message.error("No response from the server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Request Error:", error.message);
        message.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  

  // Prevent login for authenticated user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen" style={{ background: "linear-gradient(to bottom right, #ffffff, #fa9490, #85e7f8)", animation: "gradientAnimation 30s infinite" }}>
  {loading && <Spinner />}
  <Form layout="vertical" onFinish={submitHandler} className="bg-white shadow-md rounded-lg px-8 py-6 sm:px-10 sm:py-8 lg:px-12 lg:py-10 max-w-md w-full">
    <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800">Login</h1>
    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
      <Input type="email" className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500" />
    </Form.Item>
    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
      <Input.Password className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500" />
    </Form.Item>
    <div className="flex flex-col items-center">
      <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg focus:outline-none hover:bg-blue-700 mb-4 w-full">
        Login
      </button>
      <div className="text-center">
        <Link to="/register" className="text-blue-500 hover:underline">
          Not a user? Click Here to register
        </Link>
      </div>
    </div>
  </Form>
</div>
  );
};

export default Login;
