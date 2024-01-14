import React from 'react'

const Navbar = () => {
  return (
    <div className="h-[50px] bg-[#003580] flex justify-center">
        <div className="w-full max-w-[1024px] text-white flex items-center justify-between">
            <span className="font-medium">Booking</span>
            <div className="navItems">
               <button className='ml-5 border px-[10px] py-[5px] cursor-pointer bg-white text-black'>Register</button>
               <button className='ml-5 border px-[10px] py-[5px] cursor-pointer bg-white text-black'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
