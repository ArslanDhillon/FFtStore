import React from 'react'
import HomeBanners from './HomeBanners'
import ShopCategories from './ShopCategories'

function Home() {
  return (
    <div className='flex flex-col gap-1 bg-white overflow-hidden'>
      <div>
        <HomeBanners />
      </div>
      <div>
        <ShopCategories />
      </div>

    </div>
  )
}

export default Home