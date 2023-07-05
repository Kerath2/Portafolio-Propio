import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
type Props = {}

export default function ExperienceCard3({ }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 
      flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center 
      bg-[#292929] p-10  hover:opacity-100 opacity-80 transition-opacity duration-200
      overflow-hidden' >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      >
        <Image className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center '
          width={100}
          height={100}
          src="/linux.png"
          alt='conejo'
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Hobbys</h4>
        <p className='font-bold text-2xl mt-1 '> </p>
        <div className='flex space-x-2 my-2 '>
          <img
            className='h-10 w-10 rounded-full'
            src="/solidity.png"
          />
        </div>
        <p className='uppercase py-5 text-gray-300'
        >Todo el tiempo </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Cloud compunting en AWS</li>
          <li>Smart contracts usando solidity</li>
          <li>lua-nvim</li>
          <li>Linux</li>
        </ul>
      </div>
    </article>
  )
}
