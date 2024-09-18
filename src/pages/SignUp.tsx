import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Copyright from '../components/Copyright';

const SignUp = () => {
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

      <div className="space-y-6">
          <div className="relative w-[480px]">
            <input
              placeholder="Username"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"/>
          </div>

          <div className="relative w-[480px]">
            <input
              placeholder="First name"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"/>
          </div>

          <div className="relative w-[480px]">
            <input
              placeholder="Last name"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"/>
          </div>

          <div className="relative w-[480px]">
            <input
              placeholder="Email"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"/>
          </div>

          <div className="relative w-[480px]">
            <input
              placeholder="Password"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"/>
          </div>

          <div className="relative w-[480px]">
            <input
              placeholder="Confirm password"
              className="border rounded-[10px] px-4 py-3 w-full text-[14px]"/>
          </div>

         <Link to="/login">
            <button className="mt-6 mb-6 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[45px] w-[480px]">
              Sign up
            </button>
         </Link>
      </div>
      
      <div className="text-center space-x-2 mb-20">
          <a  className="text-[14px]">
              Already have an account ?
          </a>

          <a  href="/login" className="text-[#D63484] text-[14px] hover:text-[#D63484] cursor-pointer">
              Login here
          </a>
      </div>

      {/* <div className="pl-[482px] pr-[482px] flex justify-between items-center space-x-2">
        <div className="border border-[0.5px] border-solid border-black w-full h-[0.5px]"> </div>
        <a>Or</a>
        <div className="border border-[0.5px] border-solid border-black w-full h-[0.5px]"> </div>
      </div> */}

      </div>

      <Footer/>
      <Copyright/>
    </div>
  )
}

export default SignUp