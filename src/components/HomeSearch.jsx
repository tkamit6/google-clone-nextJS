'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import Footer from './Footer'

export default function HomeSearch() {
    const [input, setinput] = useState('');
    const [randomSearchloading, setrandomSearchloading] = useState(false)
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!input.trim())
            return;
        router.push(`search/web?search=${input}`)
    }
    const randomSearch = async() => {
        setrandomSearchloading(true)
        const response = await fetch('https://random-word-api.herokuapp.com/word').then((res)=>res.json())
        .then((data)=>data[0])
        if(!response) return;
        router.push(`search/web?search=${response}`)
        setrandomSearchloading(false)
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='flex w-full mt-5 max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-lg mx-auto'>
                <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
                <input onChange={(e) => setinput(e.target.value)} value={input} type="text" className='flex-grow focus:outline-none' />
                <BsFillMicFill className='text-lg' />
            </form>
            <div className='flex flex-col sm:flex-row mt-8 space-y-2 sm:space-y-0 sm:space-x-4 justify-center'>
                <button onClick={handleSubmit} className='btn'>Google Searchh</button>
                <button disabled={randomSearchloading} onClick={randomSearch} className='btn disabled:opacity-50 flex items-center justify-center'> {randomSearchloading ? ( <img src="spinner.svg" alt="loading ..." className='h-6 text-center' /> ) : "I'm feeling lucky"} </button>
            </div>
        </>
    )
}
