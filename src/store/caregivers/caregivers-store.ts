import { Caregiver } from '@/interfaces';
import { create } from 'zustand';
import { initialData } from "@/seed/seed";

interface State {
  selectedCaregivers: Caregiver[];

  setSelectedCaregivers: (caregivers: Caregiver[]) => void;
}

export const useCaregiverStore = create<State>()((set) => ({
  selectedCaregivers: initialData.caregivers,
  setSelectedCaregivers: (caregivers: Caregiver[]) => set({ selectedCaregivers: caregivers}),
}));