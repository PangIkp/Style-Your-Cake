import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

const Password = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/auth/forgot-password', { email });
      alert(response.data.message); // Show success message
      navigate("/reset-password", { state: { email } }); // Navigate to ResetPassword with email
    } catch (error) {
      alert((error as any).response.data.message || "An error occurred.");
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
            Forgot password?
          </p>

          <p className="text-[13px] font-light text-[#666666]">
            No worries! Just enter your email address below, and we'll send you a link to
          </p>

          <p className="mb-[40px] text-[13px] font-light text-[#666666]">
            reset it.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative w-[485px]">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"
            />
          </div>
        </div>

        <button onClick={handleSubmit} className="mt-6 mb-20 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[45px] w-[485px]">
          Reset Password
        </button>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
}

export default Password;
