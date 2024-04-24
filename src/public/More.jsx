import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GetAppIcon from '@mui/icons-material/GetApp';
import ThreeDot from "../Images/dot.png"
import { Link } from 'react-router-dom';
const More = () => {
  let [isOpen , setIsOpen] = useState(false)
  return (
    <>
    <div className="relative"  onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}>

    <div>
     <Link><img src={ThreeDot} className='w-6 h-5 flex items-center justify-center hover:text-white hover:bg-blue-500'/></Link>
    </div>
    {isOpen && (
     <div className="absolute top-full left-0 mt-1 w-72 mr-40 bg-white shadow-md p-4 ">
          <ul>
            <li className="mb-2 text-sm">
            <Link className='flex'>
            <NotificationsIcon/>
            Notifications Prefrences
               </Link>
            </li>
           
            <li className="mb-2 hover:bg-gray-100 p-1 text-sm" title='24X7 CustomerCare'>
              <Link className='flex'><HeadsetMicIcon/>
              24x7 CustomerCare
              </Link>
            </li>
            <li className='mb-2 text-sm'>
              <Link className='flex'><TrendingUpIcon/>
              Advertise
              </Link>
             
            </li>
            <li>
              <Link className='flex text-sm'><GetAppIcon/>
              Download App
              </Link>
             
            </li>
            </ul>

    </div>
  )}
  </div>
  </>
)
}

export default More