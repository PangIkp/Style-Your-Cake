import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar/>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="w-[480px]">
            <p className="mt-10 mb-[10px] text-[26px] font-semibold">
                Password reset
            </p>

            <p className="mb-[40px] text-[13px] font-light text-[#666666]">
                We sent a code to Saralee.yees@bumail.net
            </p>
        </div>

        <div className="space-x-8 flex justify-between">
            <div>
                <input
                className="border rounded-[6px] px-5 py-4 w-[70px] text-[23px] font-semibold text-center"/>
            </div>

            <div>
                <input
                className="border rounded-[6px] px-5 py-4 w-[70px] text-[23px] font-semibold text-center"/>
            </div>

            <div>
                <input
                className="border rounded-[6px] px-5 py-4 w-[70px] text-[23px] font-semibold text-center"/>
            </div>

            <div>
                <input
                className="border rounded-[6px] px-5 py-4 w-[70px] text-[23px] font-semibold text-center"/>
            </div>

            <div>
                <input
                className="border rounded-[6px] px-5 py-4 w-[70px] text-[23px] font-semibold text-center"/>
            </div>
        </div>

        <Link to="/newpassword">
                <button className="mt-6 mb-20 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[45px] w-[480px]">
                Continue
                </button>
        </Link>


      </div>

      <Footer/>
      <Copyright/>
    </div>
  )
}

export default ResetPassword