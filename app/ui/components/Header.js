import Image from "next/image";
import { Search, } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { User } from "lucide-react";
import { Menu } from "lucide-react";


export default function Header() {

  return (
    <div className="px-4 lg:px-6 py-2 flex flex-row justify-between items-center bg-black">

      <button>
       <Menu className="w-6 h-6 text-white" />
      </button>
      <Image
        src={'/icons/logo.png'}
        height={50} width={50} alt="*"
      // style={{backgroundColor:'red'}}
      />

      <div className="flex flex-row items-center gap-3">


        <button className="">
          <Search className="w-6 h-6 text-white" />
        </button>
        <button className="">
          <ShoppingBag className="w-6 h-6 text-white" />
        </button>

        <button>
          <User className="w-6 h-6 text-white" />
        </button>

      </div>
    </div>
  );
}
