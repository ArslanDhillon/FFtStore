'use client'

import React from "react";
import ProductsList from "../ui/components/collections/ProductsList";
import FiltersComponent from "../ui/components/filters/FiltersComponent";

export default function Page() {

  
  return (
    <div className="flex h-full min-h-[90vh] pt-10 " style={{
      overflowY:'hidden'
    }}
      
    >
      {/* Sidebar (filters) */}
      <aside className="w-3/12"
      // style={{backgroundColor:'red'}}
      >
        <div className="sticky top-0">
          <FiltersComponent />
        </div>
      </aside>

      {/* Main area (products) */}
      <section
        className="w-9/12 overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <ProductsList />
      </section>
    </div>
  );
}
