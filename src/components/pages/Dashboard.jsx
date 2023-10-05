import AltPieChart from "../dashboard/AltPieChart"
import BuyerProfilePieChart from "../dashboard/BuyerProfilePieChart"
import PopularProducts from "../dashboard/PopularProducts"
import RecentOrders from "../dashboard/RecentOrders"
import TransactionChart from "../dashboard/TransactionChart"
import UpperGrid from "../dashboard/UpperGrid"

const Dashboard = () => {
  return (
    <div className=" bg-neutral-200 flex flex-col gap-1 sm:gap-2 mt-1 sm:mt-2">
    <UpperGrid/>

    <div className=" flex flex-col sm:flex-row gap-1 px-1">
      <TransactionChart/>
      <AltPieChart/>
    </div>

    <div className=" flex flex-col sm:flex-row gap-1 px-1">
      <RecentOrders/>
      <PopularProducts/>

    </div>


    </div>
  )
}

export default Dashboard
