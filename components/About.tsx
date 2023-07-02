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
          src="/gerardo-aws.jpeg"
          width={300}
          height={300}
          alt="gerardo-aws"
        />
      </motion.div>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Hola 👋🏻 soy <span className='underline decoration-[#F7AB0A]/50'> Gerardo </span>
        </h4>
        <p className='text-sm '>
          Estudiante del octavo ciclo de  Ingeniería Informática en la
          <a className='font-bold'
            href="https://www.pucp.edu.pe"> Pontificia Universidad Católica del Perú</a>
          <br />
          interesado en cloud computing, linux y desarrollo de software.
          <br />
          Me considero una persona empática, orientada a resultados y a la mejora continua, con capacidad de liderazgo
          y trabajo en equipo.
          <br />
          Me encanta leer , la música, el deporte, ánimes y novelas
        </p>
      </div>

    </motion.div >
  )
}
