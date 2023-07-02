import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
type Props = {}

export default function ExperienceCard1({ }: Props) {
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
          src="/pixel.png"
          alt='conejo'
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>PIXEL</h4>
        <p className='font-bold text-2xl mt-1 '> </p>
        <div className='flex space-x-2 my-2 '>
          <img
            className='h-10 w-10 rounded-full'
            src="/html.png"
          />
          <img
            className='h-10 w-10 rounded-full'
            src="/css.png"
          />
          <img
            className='h-10 w-10 rounded-full'
            src="/javaScript.png"
          />
          <img
            className='h-10 w-10 rounded-full'
            src="/ts.png"
          />
          <img
            className='h-10 w-10 rounded-full'
            src="/react.png"
          />
        </div>
        <p className='uppercase py-5 text-gray-300'
        >Enero 2023 - Ahora</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Grupo de estudio enfocado en el desarollo de aplicaciones
            web y mobile.
          </li>
          <li>Uso de tecnologias frontend: React Nextjs Tailwind</li>
        </ul>
      </div>
    </article>
  )
}
