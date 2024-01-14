import React from 'react'

const MailList = () => {
  return (
    <div className='mail w-full mt-[50px] bg-[#003580] text-white flex flex-col items-center gap-5 p-[50px]'>
      <h1 className="mailTitle">Save time,save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" name="" id="" placeholder='Your Email' className='w-[300px] h-[30px] p-[10px] border-none mr-[10px] rounded-[5px]'/>
        <button className='h-[50px] bg-[#0071c2] text-white font-medium border-none rounded-[5px] cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
