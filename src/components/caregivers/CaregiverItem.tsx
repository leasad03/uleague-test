'use client';

import { useState } from "react";
import { Caregiver } from "@/interfaces"
import { ProfilePicture } from "@/components"
import { IoStar } from "react-icons/io5";
import { MdChevronRight, MdEarbuds } from "react-icons/md";
import { useCaregiverStore } from "@/store";

interface Props {
  caregiver: Caregiver;
  updateText: () => void;
}

export const CaregiverItem = ({caregiver, updateText}: Props) => {
  const [isChecked, setIsChecked] = useState(true);

  const selectedCaregivers = useCaregiverStore(state => state.selectedCaregivers);
  const setSelectedCaregivers = useCaregiverStore(state => state.setSelectedCaregivers);

  const updateSelectedCaregivers = () => {
    setIsChecked((state) => !state)
    if (isChecked) {
      selectedCaregivers.push(caregiver);
    } else {
      const i = selectedCaregivers.findIndex((el) => el.id === caregiver.id);
      selectedCaregivers.splice(i, 1);
    }
    setSelectedCaregivers(selectedCaregivers);
    updateText();
  }
  
  return (
    <div className="flex">
      <div className="flex">
        <input 
          type="checkbox"
          className="border-blue-600 bg-white checked:bg-white"
          checked={isChecked}
          onChange={updateSelectedCaregivers}
        />
      </div>
      <div className="grow flex flex-row">
        <div className="mx-4">
          <ProfilePicture imgUrl={ `/imgs/${caregiver.profileImage}` } />
        </div>
        <div className="text-sm">
          <p className="font-bold mb-1">{ caregiver.fullName }</p>
          <div className="inline-flex items-center mb-1">
            <IoStar className="text-yellow-500 mr-1" />
            <p className="align-text-top">
              {caregiver.rating} <span className="text-gray-400">{`(${caregiver.totalReviews})`}</span>
            </p>
          </div>
          <div className="inline-flex items-center lg:ml-2">
            <MdEarbuds className="align-text-bottom" />
            <span className="font-semibold ml-1">0.9 miles away</span>
          </div>
          <div className="hidden text-blue-600 font-semibold lg:flex lg:items-center">
            View Profile
            <MdChevronRight />
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-sm">${ caregiver.cost }</p>
        <p className="text-gray-400 text-xs">per night</p>
        <div className="flex items-center text-blue-600 text-sm font-semibold lg:hidden mt-3">
          Profile
          <MdChevronRight size={24}/>
        </div>
      </div>
    </div>
  )
}
