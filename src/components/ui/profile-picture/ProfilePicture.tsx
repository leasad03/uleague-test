import Image from "next/image"

interface Props {
  imgUrl: string;
}

export const ProfilePicture = ({ imgUrl }:Props) => {
  return (
    <Image
      className="rounded-full" 
      src={ imgUrl }
      alt="profile-picture"
      width={50}
      height={50}
    />
  )
}
