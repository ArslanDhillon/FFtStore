import React from 'react'
import ProductsList from '../ui/components/collections/ProductsList'

function page() {
  return (
    <div className='w-full flex flex-row items-center pt-[50px]'>
      <div className='flex w-3/12 border'>
        Filters

      </div>

      <div className='w-9/12 flex'>
        <ProductsList />
      </div>
      
    </div>
  )
}

export default page