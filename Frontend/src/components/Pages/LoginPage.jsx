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
      setLoading(true);
      await axios.post("http://localhost:8000/api/v1/users/login", values);
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
    <div className="flex items-center justify-center h-screen bg-slate-600">
      {loading && <Spinner />}
      <Form layout="vertical" onFinish={submitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
          <Input type="email" className="w-full mb-4 px-3 py-2 border rounded" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
          <Input type="password" className="w-full mb-6 px-3 py-2 border rounded" />
        </Form.Item>
        <div className="flex items-center justify-between">
          <Link to="/register" className="text-blue-500 hover:underline">
            Not a user? Click Here to register
          </Link>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
