// tsrfc
"use client";
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link';

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className='sticky top-0  p-5 flex justify-between max-w-7xl mx-auto
      z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.2,
        }}
        className='flex flex-row items-center'>
        {/* Social icons */}
        <SocialIcon
          url='https://www.youtube.com/@gerardotacayterrazos3020/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.facebook.com/gerardo.tacayterrazos/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://twitter.com/kerathsiwo'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/gerardo-tacay-terrazos-a0564b1b8/'
          fgColor='gray'
          bgColor='transparent'
        />

        <SocialIcon
          url='https://www.instagram.com/gkerath/'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.2,
        }}
        className='flex  flex-row  items-center text-gray-300  cursor-pointer'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <Link href="#contact"> 
         <p className='uppercase hidden md:inline-flex text-sm text-gray-400' >
         Contacto 
        </p>
        </Link>
      </motion.div>
    </header >
  )
}


