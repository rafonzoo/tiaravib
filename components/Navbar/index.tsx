'use client'

import type { FC } from 'react'
import { site } from '@/config'
import Anchor from '@/components/Anchor'

const Navigation: FC = () => {
  return (
    <nav>
      <div className='relative flex justify-between border-b border-gray-300'>
        <button className='flex h-14 w-12 items-center justify-center'>
          <div className='mx-auto flex flex-col items-center justify-center'>
            <div className='h-[1px] w-4 bg-black' />
            <div className='my-1.5 h-[1px] w-4 bg-black' />
            <div className='h-[1px] w-4 bg-black' />
          </div>
          <span className='sr-only'>Toggle Navigation</span>
        </button>
        <Anchor
          href='/'
          className='flex items-center justify-center text-brand font-medium tracking-brand'
        >
          {site.name.toUpperCase()}
        </Anchor>
        <div className='flex h-14 w-12 items-center justify-center' />
      </div>
    </nav>
  )
}

export default Navigation
