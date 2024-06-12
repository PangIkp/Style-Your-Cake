import React from 'react'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import ProductCard from '../components/ProductCard'
import { dbConnect } from '../db/dbConnect'

const Landing = () => {
  // const connect = async () => {
  //   try {
  //       await dbConnect()
  //   }
  //   catch(error) {
  //       console.log(error)
  //   }}
  //   connect();
  return (
    <div>
      <div className='mt-[140px]'>
        <div className='fixed top-0 z-10 w-full '>
        <NavBar/>
        </div>
        <Main/>
        {/* https://drive.google.com/file/d/1vczaMaQuJzFoZxzGLWx5GR7zXLaRsVeF/view?usp=sharing */}
        <p className='text-[26px] font-semibold flex items-center justify-center mt-[60px]'>Top Selling</p>
        <p className='text-[#666666] flex items-center justify-center'>Discover our top-selling creations.</p>
        <ProductCard
        name="Product Name"
        price={100}
        detail="This is a product detail."
        imgUrl="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
        
      </div>
    </div>
  )
}

export default Landing