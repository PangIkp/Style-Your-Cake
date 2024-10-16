import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useHiddenAccount } from "../mainStore";
import axios from 'axios';

interface LoginProps {
  onLogin: () => void; // เพิ่ม callback สำหรับแจ้งเมื่อ login สำเร็จ
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userNameOrEmail: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const setIsLoggedIn = useHiddenAccount((state) => state.setIsLoggedIn);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true); // Set loading to true on form submission

    try {
      const response = await axios.post('http://localhost:3001/api/v1/auth/login', formData);
      setSuccess(response.data.message);
      setIsLoggedIn(true);
      console.log(response)
      
      // Store the login status in localStorage
      localStorage.setItem('username', response.data.user.username); // Assuming the API returns username
      localStorage.setItem('isLoggedIn', 'true');
      
      // Navigate to the home page after login
      navigate('/');  // เพิ่มบรรทัดนี้เพื่อนำทางไปหน้าโฮมเพจหลังจาก login สำเร็จ
      // Call the onLogin callback to update the state in NavBar
      // onLogin();


    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
       setError(err.response.data.message)
      } else {
      
      }
    } finally {
      setLoading(false); // Reset loading state
      // navigate('/'); 
    }
};


  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
        <NavBar onSearch={() => {}} />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-[480px]">
          <p className="mt-10 mb-[10px] text-[26px] font-semibold ">
            Welcome back
          </p>

          <p className="text-[13px] font-light text-[#666666]">
            Don't miss out on sweet deals! Log in now to order your favorite cakes and
          </p>

          <p className="mb-[40px] text-[13px] font-light text-[#666666]">
            unlock exclusive offers.
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

        <form className="space-y-6 w-[480px]" onSubmit={handleSubmit}>
          <div className="relative w-[480px]">
            <input
              name="userNameOrEmail"
              type="text"
              placeholder="Username"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"
              value={formData.userNameOrEmail}
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

          <div className="flex justify-between items-center">
            <label className="space-x-4 flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-[15px] w-[15px]" />
              <span className="text-[14px]">
                Remember me
              </span>
            </label>

            <Link to="/password" className="text-[#D63484] text-[14px] hover:text-[#D63484] cursor-pointer">
              Forgot password?
            </Link>
          </div>

          <button 
            type="submit" 
            className={`mt-6 mb-6 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[45px] w-[480px] ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="text-center space-x-2 mb-20">
          <span className="text-[14px]">
            Not registered yet?
          </span>

          <Link to="/signup" className="text-[#D63484] text-[14px] hover:text-[#D63484] cursor-pointer">
            Create an account
          </Link>
        </div>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
}

export default Login;
