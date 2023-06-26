"use client"
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function BackgroundCircles({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 1.5,
      }}
      className='relative flex justify-center items-center' >
      <div className=' absolute border [#3333333] rounded-full h-[250px] w-[250px]
        mt-52 animate-ping' />
      <div className='rounded-full border border-[#3333333] h-[300px] w-[300px] absolute 
        mt-52 opacity-20' />
      <div className='rounded-full border border-[#3333333] h-[600px] w-[600px] absolute
        mt-52 opacity-40' />
    </motion.div >
  )
}


