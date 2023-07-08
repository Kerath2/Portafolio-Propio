"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "<Estudiante de Ing. Informática/>",
      "</en la PUCP/>",
      "<Interesado en cloud computing/>"
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='flex-grow pt-9'>
      <div className='h-screen flex flex-col space-y-9 items-center justify-center
        text-center overflow-hidden mt-9' >
        <BackgroundCircles />
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover'
          src='/images/gerardo.jpeg'
          width={500}
          height={500}
          alt="Imagen de pixel"
        />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500  pb-2 tracking-[15px]'> Gerardo Tacay </h2>
          <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10 '>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
          </h1>
          <div className='pt-5'>
            <Link href="#about">
              <button className='heroButton'>Sobre mi </button>
            </Link>
            <Link href="#experience">

              <button className='heroButton'>Experiencia</button>
            </Link>
            <Link href="#skills">

              <button className='heroButton'>Habilidades</button>
            </Link>
            <Link href="#contact">

              <button className='heroButton'>Contacto</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
