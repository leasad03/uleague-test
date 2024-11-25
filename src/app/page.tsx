import { Card, Caregivers } from "@/components";
import { initialData } from "@/seed/seed";

const caregivers = initialData.caregivers;

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <p className="font-bold text-xl md:text-4xl">Share your request <br /> with similar Caregivers!</p>
        <p className="mt-5 text-sm max-w-prose">If [name] does not respond withing [X] hours, wel'll match you with the fastest available Caregiver below to ensure your pet is taken care of.</p>
        <p className="mt-5 text-sm font-bold">🔥 95% of pet parents select at least 3 extra caregivers </p>
      </div>
      <Card>
        <p className="font-bold mb-7">Preferred Caregivers near you</p>
        <Caregivers caregivers={caregivers} />
      </Card>
    </div>
  );
}
