"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}

      className=' flex flex-col relative  h-screen text-center md:text-left 
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Sobre Mi
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        // viewport={{ once: true }}
        className='mt-40'
      >
        <Image
          className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
          md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
          src="/perro.jpeg"
          width={300}
          height={300}
          alt="Perro"
        />
      </motion.div>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]/50'> litle</span> background
        </h4>
        <p className='text-sm'>
          Somos un grupo de desarrollo fronted que empezo a operar a inicios del 2023.
          <br />Nuestro primer
          proyecto fue realizar una calculadora. Ahora nuestro segundo <br /> proyecto <br /> es realizar un
          portafolio de todo el grupo.
        </p>
      </div>

    </motion.div >
  )
}
