"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ExperienceCard1 from './ExperienceCard1'
import ExperienceCard2 from './ExperienceCard2'
import ExperienceCard3 from './ExperienceCard3'
type Props = {}

export default function WorkExperience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
      max-w-full px-10 justify-evenly mx-auto  items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experiencia
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-28 md:mt-52'>
        <ExperienceCard1 />
        <ExperienceCard2 />
        <ExperienceCard3 />
      </div>
    </motion.div>
  )
}
