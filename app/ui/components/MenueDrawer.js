'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Drawer } from '@mui/material';

export default function MenuDrawer({
    open,
    handleClose,
    handleOnClick 
}) {

  return (
    <>
     <Drawer
        anchor="left"
        open={open}
        onClose={() => {
          handleClose()
        }}
        PaperProps={{
          sx: {
            width: "35%", // Adjust width as needed
            boxShadow: 3, // Light shadow
           
            backgroundColor: "white", // Ensure it's visible
            height: "100%",
            overflow: "hidden",
            scrollbarWidth: "none",
          },
        }}
        BackdropProps={{
          timeout: 100,
          sx: {
            backgroundColor: "#ffffff80",
            // //backdropFilter: "blur(20px)",
          },
        }}
      >
      <div
        className={"w-full"}
      >
        <div className="p-4 flex w-full flex flex-col items-center gap-3">
          
          <button onClick={handleClose}
            style={{alignSelf:'flex-end'}}
          >
            <X size={24} />
          </button>

          <Image src="/icons/mainLogo.png" alt="logo" width={120} height={60} />
        </div>

        <div className="flex flex-col gap-4 px-4 py-6">
          <div className="flex flex-row gap-6 text-sm font-medium border-t border-b w-full py-3">
            <Link href="/collections" className="hover:text-orange-500">MEN</Link>
            <Link href="/collections" className="hover:text-orange-500">WOMEN</Link>
            <Link href="/collections" className="font-bold">KIDS</Link>
            <Link href="/collections" className="hover:text-orange-500">SILENT LUXURY</Link>
          </div>

          {/* <hr className="my-2" /> */}

          <div className="flex flex-col gap-2 text-[15px] font-semibold text-zinc-700">
            <div className="flex justify-between items-center">
             NEW ARRIVALS  {/* <span className="bg-orange-400 text-white text-xs px-2 py-0.5 rounded-md">UPTO 50% OFF</span> */}
            </div>
            <Link href="#">BOYS</Link>
            <Link href="#">GIRLS</Link>
            <Link href="#">EASTERN WEAR</Link>
          </div>
        </div>
      </div>
      </Drawer>
    </>
  );
}
