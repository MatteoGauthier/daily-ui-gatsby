import React from "react"

const Card = ({ item: { title, day } }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      {/* <img
        className="w-full"
        src="/img/card-top.jpg"
        alt="Sunset in the mountains"
      /> */}
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">
          #{day} - {title}
        </div>
        <p className="text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #photography
        </span>
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #travel
        </span>
        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #winter
        </span>
      </div>
    </div>
  )
}

export default Card