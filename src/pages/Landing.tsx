import React from 'react'
import NavBar from '../components/NavBar'
import Main from '../components/Main'

const Landing = () => {
  return (
    <div>
      <div className='mt-[140px]'>
        <div className='fixed top-0 z-10 w-full '>
        <NavBar/>
        </div>
        <Main/>
        <p className='text-[26px] font-semibold flex items-center justify-center mt-[60px]'>Top Selling</p>
        <p className='text-[#666666] flex items-center justify-center'>Discover our top-selling creations.</p>
      </div>
    </div>
  )
}

export default Landing