import { useState } from "react"
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from "react-icons/hi"


const Header = () => {
  const [profileBar , setProfileBar] = useState(false)
  const [messageBar , setMessageBar] = useState(false)
  const [notificationBar , setNotificationBar] = useState(false)

  const headerManager = (currentBar) => {
    switch (currentBar) {
      case "notification":
        setNotificationBar(!notificationBar)
        setMessageBar(false)
        setProfileBar(false)
        break;

      case "profile" :  
      setNotificationBar(false)
      setMessageBar(false)
      setProfileBar(!profileBar)
      break;

      case "message" :  
      setNotificationBar(false)
      setMessageBar(!messageBar)
      setProfileBar(false)
      break;
  
    }

  }
  return (
    <div className=" py-1 sm:py-0 h-15 sm:h-16 bg-white sm:w-full flex flex-col sm:flex-row  justify-between items-center px-3">

      <div className=" relative pb-1 sm:pb-0">
        <HiOutlineSearch fontSize={20} className=" absolute text-gray-300 top-1 left-1 sm:left-2 sm:top-3 "/>
        <input type="text" placeholder = "...search" className=" w-full h-6 sm:h-10 border border-gray-300 pl-8 pr-4 sm:w-[24rem] focus:outline-none " />
      </div>

      <div className=" flex flex-row gap-10 sm:gap-4 mr-1 sm:mr-3 relative sm:items-center">
       

        <button onClick  ={()=>{
          headerManager("message")
          }}>
          <HiOutlineBell className=" ml-2 text-[24px] " />
        </button>

        <button onClick  ={()=>{
          headerManager("notification")
          }}>
        <HiOutlineChatAlt className="text-[24px] " />
        </button>
       
        <button onClick ={()=>{
         headerManager("profile")
        }}> 
        <img src="./profile.jpg" alt="" className=" w-10 h-10 sm:w-10 sm:h-10 rounded-full"/>
        </button>

        <div className={profileBar ? " visible text-sm absolute border border-gray-300 bg-white top-10 right-5 w-full sm:w-28 py-5 text-center rounded-lg": " invisible absolute"}>
          <p >Your Profile</p>
          <p className=" py-1">Settings</p>
          <p>Logout</p>
        </div>

        <div className={notificationBar? " visible text-sm absolute border border-gray-300 bg-white rounded-lg top-10 right-1  sm:top-8 sm:right-16 w-full sm:w-[20rem] py-5 text-center": " invisible absolute"}>
          <p >Notifications</p>
          <p className=" py-1">This is notification panel</p>
        </div>

        <div className={messageBar? " visible text-sm absolute border border-gray-300 bg-white rounded-lg top-10 right-1 sm:top-8 sm:right-28 w-full sm:w-[16rem] py-5 text-center": " invisible absolute"}>
          <p >Your Messages</p>
          <p className=" py-1">This is Message panel</p>
        </div>
      </div>
    </div>
  )
}

export default Header
