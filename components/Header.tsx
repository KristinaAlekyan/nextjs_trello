"use client"

import Image from 'next/image'
import React from 'react'
import trello_logo from '@/public/trello-logo.webp';
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import { useBoardStore } from '@/store/BoardStore';

function Header() {
    const [searchString, setSearchString] = useBoardStore((state) => [state.searchString, state.setSearchString])

    return (
        <header>
            <div className='flex flex-col md:flex-row items-center p5 bg-gray-500/10 rounded-b-2xl '>
                <div
                    className='
          absolute
          top-0
          lefr-0
          w-full
          h-96
          bg-gradient-to-br
          from-pink-300
          to-[#0055D1]
          rounded-md
          filter
          blur-3xl
          opasity-50
          -z-50


        '
                />
                <Image
                    priority={true}
                    src={trello_logo}
                    alt="trello logo"
                    width={300}
                    height={100}
                    className='w-44 md:w-56 ph-10 md:ph-0 object-contain'
                />

                <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
                    <form action="" className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                        <MagnifyingGlassIcon className='h-6 w-6 test-gray-400' />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchString}
                            onChange={e => setSearchString(e.target.value)}
                            className='flex-1 autline-none p-2'
                        />
                        <button type='submit' hidden>Search</button>
                    </form>
                </div>
            </div>
            <div className='flex items-center justify-center px-5 py-2 md:py-5'>
                <p className='flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]'>
                    <UserCircleIcon className='inline-block h-10 w-10 text-[#0055D1] mr-1' />
                    GPT is summerising your tasks for the day
                </p>
            </div>
        </header>
    )
}

export default Header
