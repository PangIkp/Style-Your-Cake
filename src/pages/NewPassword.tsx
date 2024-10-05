import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";

const Password = () => {
  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar onSearch={() => {}}/>
        </div>
      </div>
       <div className="flex flex-col items-center">
         
            <div className="w-[485px]">
                <p className="mt-10 mb-[10px] text-[26px] font-semibold">
                    Set a new password ?
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
                    placeholder="Password"
                    className="border rounded-[10px] px-4 py-3 w-full text-[14px]"/>
                </div>

                <div className="relative w-[485px]">
                    <input
                    placeholder="Confirm password"
                    className="border rounded-[10px] px-4 py-3 w-full text-[14px]"/>
                </div>
            </div>

            <Link to="/login">
                    <button className="mt-6 mb-20 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[45px] w-[485px]">
                    Reset Password
                    </button>
            </Link>
      </div>

      <Footer/>
      <Copyright/>
    </div>
  )
}

export default Password