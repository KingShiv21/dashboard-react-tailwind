import { Outlet } from "react-router-dom"
import Sidebar from "../shared/Sidebar"
import Header from "../shared/Header"


const Layout = () => {

  return (
    <div className="bg-neutral-200 h-screen w-screen flex flex-row overflow-hidden text-black">

      <div>{<Sidebar />}</div>

      <div className=" w-full overflow-y-auto sm:overflow-y-scroll">
        <div className=" sticky w-full top-0  z-50">{<Header />}</div>
        <div>{<Outlet />}</div>
      </div>

    </div>
  )
}

export default Layout
