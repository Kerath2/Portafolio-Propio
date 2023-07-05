import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center space-y-10'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
      contacto 
      </h3>
      <div className=' flex flex-col space-y-10 text-center'>
        <h4 className='text-4xl font-semibold text-center'>
          Si tengo algo que te ayude.{" "}
          <span className='decoration-[#F7AB0A]/50 underline '> Hablemos </span>
        </h4>

        <div className='flex flex-col space-y-10 items-center justify-items-center'>
          <div className='flex items-center '>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl '>+51 123456789</p>
          </div>

          <div className='flex items-center '>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl '>gerardo.tacay@pucp.edu.pe</p>
          </div>

          <div className='flex items-center '>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl '>San Miguel - Lima</p>
          </div>
        </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'> 
            <input className="contactInput"type='text' />
            <input className="contactInput" type='text' />
          </div>
            <input  className="contactInput" type='text' />

            <textarea className="contactInput"/>
            <button>Enviar</button>
        </form>

      </div>
    </div>
  )
}
