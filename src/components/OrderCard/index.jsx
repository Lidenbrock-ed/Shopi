import { IoCloseCircle } from "react-icons/io5"

const OrderCard = (props) => {
  const {
    title,
    imageUrl, 
    price
  } = props
  return (
    <div className="flex justify-between items-center shadow-lg rounded-lg p-2 mb-2 overflow-auto">
      <div className="flex items-center gap-2">
        <figure className="w-16 h-16 object-contain">
          <img className="w-full h-full rounded-lg" src={imageUrl} alt={title} />
        </figure>
        <p className="flex max-w-32 text-xs font-ligh">
          {title}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-md font-medium">
          ${price}
        </p>
        <IoCloseCircle
          className="text-black w-6 h-6 cursor-pointer mx-1"
        />
      </div>
    </div>
  )
}

export default OrderCard