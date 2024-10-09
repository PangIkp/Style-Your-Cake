import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('/api/v1/auth/set-new-password', { password });
      alert(response.data.message); // Show success message
      navigate("/login"); // Redirect to login page after successful password reset
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message || "An error occurred.");
      } else {
        alert("An error occurred.");
      }
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
        <div className="w-[485px]">
          <p className="mt-10 mb-[10px] text-[26px] font-semibold">
            Set a new password
          </p>

          <p className="text-[13px] font-light text-[#666666]">
            Please enter your new password below.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative w-[485px]">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"
            />
          </div>

          <div className="relative w-[485px]">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"
            />
          </div>
        </div>

        <button onClick={handleSubmit} className="mt-6 mb-20 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[45px] w-[485px]">
          Set New Password
        </button>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
}

export default NewPassword;
