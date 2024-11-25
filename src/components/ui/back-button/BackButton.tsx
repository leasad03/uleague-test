'use client';

import { IoChevronBack } from "react-icons/io5"

export const BackButton = () => {
  return (
    <div className="hidden md:block">
      <button 
        type="button"
        className="flex bg-transparent rounded-full hover:bg-gray-200 px-5 py-2 border border-blue-600 text-blue-600"
        onClick={() => history.back()}
      >
        <IoChevronBack size={23} className="inline-block align-middle" />
        <span className="font-bold ml-2 inline-block align-middle">Back</span>
      </button>
    </div>
  )
}
