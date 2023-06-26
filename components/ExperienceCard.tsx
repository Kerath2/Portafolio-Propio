import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
type Props = {}

export default function ExperienceCard({ }: Props) {
  return (
    <article>
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
          src="/conejo.jpeg"
          alt='conejo'
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'> CEO of Algo</h4>
        <p className='font-bold text-2xl mt-1 '> </p>
        <div className='flex space-x-2 my-2 '>
          {/* Tecnologia */}
          {/* Tecnologia */}
          {/* Tecnologia */}
        </div>
        <p>Started work .... Ended ....</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Sumary points</li>
          <li>Sumary points</li>
          <li>Sumary points</li>
          <li>Sumary points</li>
        </ul>
      </div>
    </article>
  )
}
