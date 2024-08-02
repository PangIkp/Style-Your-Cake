import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <NavBar/>

      <div className="flex flex-col items-center">

      <div className="w-[480px]">
        <p className="mt-10 mb-[10px] text-[26px] font-semibold ">
          Welcome back
        </p>

        <p className="text-[13px] font-light text-[#666666]">
          Don't miss out on sweet deals! Log in now to order your favorite cakes and
        </p>

        <p className="mb-[40px]  text-[13px] font-light text-[#666666]">
          unlock exclusive offers.
        </p>
      </div>

      <div className="space-y-6 w-[480px]">
          <div className="relative w-[480px]">
            <input
              placeholder="Username"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"/>
          </div>

          <div className="relative w-[480px]">
            <input
              placeholder="Password"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"/>
          </div>

          <div className="flex justify-between items-center">
            <label className="space-x-4 flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-[15px] w-[15px]"/>
                <span className="text-[14px]">
                  Remember me
                </span>
            </label>

            <a  href="/password" className="text-[#D63484] text-[14px] hover:text-[#D63484] cursor-pointer">
              Forgot password ?
            </a>
         </div>

         <Link to="/">
            <button className="mt-6 mb-6 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[45px] w-[480px]">
              Login
            </button>
         </Link>
      </div>
      
      <div className="text-center space-x-2 mb-20">
          <a  className="text-[14px]">
              Not registered yet ?
          </a>

          <a  href="/signup" className="text-[#D63484] text-[14px] hover:text-[#D63484] cursor-pointer">
              Create an account
          </a>
      </div>

      {/* <div className="pl-[482px] pr-[482px] flex justify-between items-center space-x-2">
        <div className="border border-[0.5px] border-solid border-black w-full h-[0.5px]"> </div>
        <a>Or</a>
        <div className="border border-[0.5px] border-solid border-black w-full h-[0.5px]"> </div>
      </div> */}

      </div>

      <Footer/>
    </div>  
  )
}

export default Login