import Image from "next/image"
import Link from "next/link"
import { IoBasketOutline } from "react-icons/io5";

export const TopMenu = () => {
  const totalCart = 250;
  return (
    <nav className="flex pl-8 pr-14 py-5 justify-between items-center w-full shadow-sm">
      <div>
        <Link href="/">
          <Image src="/imgs/wag_logo.webp" alt="wag-logo" width={60} height={80} />
        </Link>        
      </div>
      <div className="flex font-bold">
        <span>
          ${ totalCart.toFixed(2) }
        </span>
        <IoBasketOutline size={20} className="ml-2"/>
      </div>
    </nav>
  )
}


