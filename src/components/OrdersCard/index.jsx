import { FaChevronRight } from "react-icons/fa"
import { HiCalendarDateRange } from "react-icons/hi2"
import { HiShoppingBag } from "react-icons/hi"
import { dateTime } from "../../utils"
const OrdersCard = (props) => {
  const {
    totalPrice,
    totalProducts
  } = props
  return (
    <div className="flex items-center shadow-lg rounded-lg p-3 border-1 overflow-auto w-100 mb-4">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="flex items-center">
            <HiCalendarDateRange className="text-black w-4 h-4 cursor-pointer mx-1" />
            <span className="font-normal">{dateTime()}</span>
          </p>
          <p className="flex items-center">
            <HiShoppingBag className="text-black w-4 h-4 cursor-pointer mx-1" />
            <span className="font-normal">{totalProducts} Articles</span>
          </p>
        </div>
        <p className="flex items-center">
          <span className="font-medium text-xl text-center">${totalPrice}</span>
          <FaChevronRight className="text-black/80 w-6 h-6 cursor-pointer mx-1" />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard