import {Pie} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"

const dataSet = [
	{ name: 'Male', value: 540 },
	{ name: 'Female', value: 620 },
	{ name: 'Others', value: 210 }
]

const userData = {
    labels: dataSet.map((e)=>e.name) ,
    datasets :[ {
        label : "Users" , 
        data : dataSet.map((e)=>e.value) ,
        backgroundColor : ["blue" ,"pink" , "black"]
    } , 
]
}


const AltPieChart = () => {
  return (
    <div className=" w-full sm:w-[20rem] h-[22rem] bg-white p-1 sm:p-4 rounded-sm border border-gray-200 flex flex-col">
    <strong className="text-gray-700 font-medium text-center ">Buyer Profile</strong>
    <div className='w-full sm:w-[18rem] h-[300px] '>

      <Pie data={userData} className=" mx-auto sm:mx-0" />
    </div>
    </div>
  )
}

export default AltPieChart
