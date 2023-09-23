import Link from 'next/link'
import React from 'react'
import {TbGridDots} from 'react-icons/tb'

export default function HomeHeader() {
  return (
    <header className='flex justify-end text-sm p-5'>
        <div className='flex space-x-4 items-center'>
            <Link href='https://mail.google.com/'>
                Gmail
            </Link>
            <Link href='https://image.google.com/'>
                Images
            </Link>
            <TbGridDots className='bg-transparent transition hover:bg-gray-200 p-2  rounded-full text-4xl'/>
            <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md'>Sign In</button>
        </div>
    </header>
  )
}
