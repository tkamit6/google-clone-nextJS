'use client'

import { BsFillMicFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react';

export default function SearchBox() {
  const router =useRouter()
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search');
  const [term, setTerm] = useState(searchTerm || '');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!term.trim()) return;
    router.push(`/search/web?search=${term}`)
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center space-x-2 px-6 py-2 ml-10 lr-5 flex-grow max-w-3xl shadow-lg rounded-full border'>
      <input type="search" value={term} onChange={(e)=> setTerm(e.target.value)} className='w-full focus:outline-none ' />
      <BsFillMicFill className='text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 cursor-pointer hidden sm:inline-flex' />
      <AiOutlineSearch onClick={handleSubmit} className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer' />

    </form>
  )
}
