"use client";

import Image from "next/image";
import { Search, } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { User } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";

import { useRouter } from "next/navigation";
import MenuDrawer from "./MenueDrawer";
import CartDrawer from "./cart/CartDrawer";



export default function Header() {

  let router = useRouter()

  const [openDrawer, setOpenDrawer] = useState(false)
  const [openCartDrawer, setOpenCartDrawer] = useState(false)

  return (
    <div className="px-4 lg:px-6 py-2 bg-black">
      <div className="flex flex-row justify-between items-center w-full">

        <button
          onClick={() => {
            setOpenDrawer(true)
          }}
        >
          <Menu className="w-6 h-6 text-white cursor-pointer" />
        </button>
        <Image
          src={'/icons/logo.png'}
          height={50} width={50} alt="*"
        // style={{backgroundColor:'red'}}
        />

        <div className="flex flex-row items-center gap-5">


          <button className="cursor-pointer">
            <Search className="w-6 h-6 text-white" />
          </button>

          <button className="cursor-pointer"
            onClick={() => {
              router.push("/auth/login")
            }}
          >
            <User className="w-6 h-6 text-white" />
          </button>

          <button className="cursor-pointer"
            onClick={()=>{
              setOpenCartDrawer(true)
            }}
          >
            <ShoppingBag className="w-6 h-6 text-white" />
          </button>
        </div>

      </div>

      <MenuDrawer open={openDrawer}
        handleClose={() => {
          setOpenDrawer(false)
        }}

        handleOnClick={(value) => {
          console.log('value', value)
        }}
      />

      <CartDrawer open={openCartDrawer}
        handleClose={() => {
          setOpenCartDrawer(false)
        }}

        handleOnClick={(value) => {
          console.log('value', value)
        }}
      />

    </div>

  );
}
