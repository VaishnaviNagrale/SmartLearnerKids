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
      await axios.post("http://localhost:8000/api/v1/users/register", values);
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
    <div className="flex items-center justify-center h-screen bg-slate-500">
      {loading && <Spinner />}
      <Form layout="vertical" onFinish={submitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        <Form.Item label="Name" name="name">
          <Input className="w-full mb-4 px-3 py-2 border rounded" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" className="w-full mb-4 px-3 py-2 border rounded" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" className="w-full mb-6 px-3 py-2 border rounded" />
        </Form.Item>
        <div className="flex items-center justify-between">
          <Link to="/login" className="text-blue-500 hover:underline">
            Already Registered? Click Here to Login
          </Link>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700">
            Register
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
