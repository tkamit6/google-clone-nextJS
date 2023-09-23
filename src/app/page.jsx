import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
      <HomeHeader />
      
      {/* body */}
      <div className='flex flex-col items-center mt-24'>
        <Image
          width='300'
          height='100'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
          alt='google'
        />
        <HomeSearch />
      </div>
    </>
  )
}
