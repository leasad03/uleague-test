'use client';

import { Button } from "@/components";
import { Caregiver } from "@/interfaces"
import { CaregiverItem } from "./CaregiverItem";
import { MdChevronRight } from "react-icons/md";
import { useCaregiverStore } from "@/store";
import { useState } from "react";

interface Props {
  caregivers: Caregiver[];
}

export const Caregivers = ({caregivers}: Props) => {
  const selectedCaregivers = useCaregiverStore(state => state.selectedCaregivers);
  const [btnText, setBtnText] = useState("Send to all");

  const updateText = () => {
    if (selectedCaregivers.length === caregivers.length) setBtnText("Send to all");
    setBtnText("Send to selected");

  }
  
  return (
    <>
      {
        caregivers.map( caregiver => (
          <div key={ caregiver.id } className="block w-full mb-3 p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <CaregiverItem caregiver={ caregiver } updateText={updateText}/>
          </div>
        ))
      }
      <div className="mt-10">
        <Button variant="primary" text={btnText} rightIcon={<MdChevronRight size={20} />} onClick={() => console.log('send to selected')} />
        <Button variant="ghost" text="Continue without" rightIcon={<MdChevronRight size={20} />} onClick={() => console.log('continue without')} />
      </div>
    </>
  )
}
