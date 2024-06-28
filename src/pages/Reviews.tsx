import React from 'react'
import ReviewCard from "../components/ReviewCard";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

const Reviews = () => {
  return (
    <div>
      <NavBar/>
      <p className="mt-10 ml-20 text-[26px] font-semibold">
        Reviews
      </p>

      <p className="ml-20 mb-10 text-[13px] font-light">
        Here are some of our Reviews!
      </p>

      <div className="flex flex-wrap ml-20">
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
      </div>

      <div className="mt-20">
         <Footer/>
         <Copyright/>
      </div>
    </div>
  )
}

export default Reviews