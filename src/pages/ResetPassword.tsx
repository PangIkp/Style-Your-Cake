import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useState } from "react";
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation for accessing passed state

const ResetPassword = () => {
  const location = useLocation(); // Get the current location
  const email = location.state?.email; // Access email from the location state
  const [otp, setOtp] = useState(Array(6).fill('')); // Store OTP digits
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleOtpChange = (index: number, value: string) => {
    if (typeof value === 'string' && !isNaN(Number(value)) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus on the next input field
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    try {
      const response = await axios.post('/api/v1/auth/reset-password', { email, otp: otpString });
      
      // Assuming your API returns a property `success` to indicate valid OTP
      if (response.data.success) { 
        navigate("/newpassword"); // Navigate to NewPassword page if OTP is valid
      } else {
        alert("Invalid OTP. Please try again."); // Alert user about invalid OTP
      }
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
        <div className="w-[480px]">
          <p className="mt-10 mb-[10px] text-[26px] font-semibold">
            Password reset
          </p>
          
          <p className="mb-[40px] text-[13px] font-light text-[#666666]">
            An email with a 6-digit OTP has been sent to {email}. Please enter the OTP below.
          </p>
        </div>

        <div className="space-x-8 flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="border rounded-[6px] px-5 py-4 w-[70px] text-[23px] font-semibold text-center"
              maxLength={1}
            />
          ))}
        </div>

        <button onClick={handleSubmit} className="mt-6 mb-20 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[45px] w-[480px]">
          Continue
        </button>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
}

export default ResetPassword;
