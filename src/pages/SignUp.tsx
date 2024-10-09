import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Copyright from '../components/Copyright';
import axios from 'axios';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [userCount, setUserCount] = useState<number>(0);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fetch user count on component mount to generate unique ID
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/auth/usercount'); // Ensure this endpoint exists
        setUserCount(response.data.count); // Assume the response returns { count: number }
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchUserCount();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Basic client-side validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const newUser = {
        id: userCount + 1, // Generate unique ID
        ...formData, // Spread the form data
      };
      
      const response = await axios.post('http://localhost:3001/api/v1/auth/signup', newUser);
      setSuccess(response.data.message);
      
      // Optionally, redirect to login after successful registration
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar onSearch={() => {}}/>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="w-[480px]">
          <p className="mt-10 mb-[10px] text-[26px] font-semibold">
            Create your account
          </p>

          <p className="text-[13px] font-light text-[#666666]">
            Don't miss out on exclusive deals and updates! Register now on our cake
          </p>

          <p className="mb-[40px] text-[13px] font-light text-[#666666]">
            ordering website to sweeten up your experience.
          </p>
        </div>

        {error && (
          <div className="w-[480px] bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="w-[480px] bg-green-100 text-green-700 p-3 rounded mb-4">
            {success}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative w-[480px]">
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative w-[480px]">
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative w-[480px]">
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative w-[480px]">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative w-[480px]">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative w-[480px]">
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 mb-6 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[45px] w-[480px]"
          >
            Sign up
          </button>
        </form>
        
        <div className="text-center space-x-2 mb-20">
          <span className="text-[14px]">
            Already have an account?
          </span>

          <Link to="/login" className="text-[#D63484] text-[14px] hover:text-[#D63484] cursor-pointer">
            Login here
          </Link>
        </div>
      </div>

      <Footer/>
      <Copyright/>
    </div>
  );
};

export default SignUp;
