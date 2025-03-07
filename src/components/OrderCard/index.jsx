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
        <button
          className="bg-black/80 text-white w-4 h-4 rounded-full cursor-pointer text-xs mx-1"
        >
          X
        </button>
      </div>
    </div>
  )
}

export default OrderCard