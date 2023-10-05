import { FcBullish } from "react-icons/fc"
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "../lib/SidebarLinks"
import { Link } from "react-router-dom"
import { HiOutlineLogout } from "react-icons/hi"
import { useState } from "react"


const Sidebar = () => {

  let logo = Number(screen.width)

  return (

    <div className=" w-8 h-full bg-neutral-900 sm:flex sm:flex-col sm:p-3 sm:w-60 sm:h-full sm:visible">

      {logo <= 640 ? <FcBullish fontSize={24} /> :


        <div className=" flex flex-row px-1 py-3">
          <FcBullish fontSize={24} />
          <span className=" invisible sm:font-bold sm:ml-1 sm:text-lg sm:text-white sm:visible">Open Shop</span>
        </div>
      }

      <div className="  flex flex-col flex-1 pt-5">
        {DASHBOARD_SIDEBAR_LINKS.map((items) => (

          <Link to={items.path} key={items.key} >
            <div className=" flex flex-row my-1 py-1 rounded-md pl-2 hover:bg-neutral-700">
              <span className=" text-xl text-blue-600">{items.icon}</span>
              <span className=" invisible sm:visible text-sm text-blue-400 ml-1">{items.label}</span>
            </div>
          </Link>

        ))}
      </div>

      <hr className=" mt-20  mb-2 sm:mt-0" />
      <div className="  flex flex-col">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((items) => (

          <Link to={items.path} key={items.key} >
            <div className=" flex flex-row my-1 py-1 rounded-md pl-2 hover:bg-neutral-700">
              <span className=" text-xl text-blue-600">{items.icon}</span>
              <span className=" invisible sm:visible text-sm text-blue-400 ml-1">{items.label}</span>
            </div>
          </Link>

        ))}
        <button>
          <div className=" flex flex-row my-1 py-1 rounded-md pl-2 hover:bg-neutral-700">
            <span className=" text-xl text-red-600"><HiOutlineLogout /></span>
            <span className=" invisible sm:visible text-sm text-red-400 ml-1">Logout</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
