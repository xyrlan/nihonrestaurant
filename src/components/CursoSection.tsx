import Image from 'next/image'
import React from 'react'

const CursoSection = () => {
  return (
    <section className="flex min-h-screen items-center justify-center p-12 px-6 sm:p-24 max-sm:bg-center bg-cover bg-[url('/nihoncursos.jpg')]">
      <div className="mx-auto max-w-screen-xl px-8 py-16 sm:px-8 lg:px-12 bg-[#292824] text-gray-100">
        <h2 className='text-[#b93531] font-semibold text-3xl mb-8'>Conheça nossos cursos e consultorias</h2>
        <div className='space-y-10'>
          <div className='flex gap-10 max-sm:flex-col items-center justify-center'>
            <p className='max-w-md sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis asperiores et beatae? Dolor ipsum consectetur esse quam perferendis hic labore, deleniti velit dignissimos, maiores provident. Adipisci reiciendis repellat nihil?</p>
            <Image src={'/thiagonihon2.jpg'} width={200} height={355} alt='cursonihon' />
          </div>
          <div className='flex max-sm:flex-col items-center justify-center gap-10'>
            <Image src={'/thiagonihon.jpg'} width={200} height={355} alt='cursonihon' />
            <p className='max-w-md sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis asperiores et beatae? Dolor ipsum consectetur esse quam perferendis hic labore, deleniti velit dignissimos, maiores provident. Adipisci reiciendis repellat nihil?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CursoSection