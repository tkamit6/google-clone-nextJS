import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import Link from 'next/link'
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
        <Link href='https://www.instagram.com/theguyinfitch/'>
          <h1 className='text-center mx-auto text-2xl'> Follow - theguyinfitch</h1>
        </Link>
        <HomeSearch />
      </div>
    </>
  )
}
