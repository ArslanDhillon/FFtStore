import React from 'react'
import HomeBanners from './HomeBanners'
import ShopCategories from './ShopCategories'

function Home() {
  return (
    <div className='flex flex-col gap-2 bg-red overflow-hidden pb-2'>
      <div>
        <HomeBanners />
      </div>
      <div>
        <ShopCategories />
      </div>

      <div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[50vh] object-cover"
        >
          <source src="/homeVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>

    </div>
  )
}

export default Home