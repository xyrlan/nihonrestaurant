import Image from 'next/image'
import React from 'react'

const SobreSection = () => {
  return (
    <section className='w-full bg-[#292824] py-20'>
      <div className='container text-white sm:flex sm:gap-20 space-y-20'>
        <div className='sm:w-1/2 '>
          <h2 className='text-3xl mb-8 text-[#b93531] font-semibold'>
            Lorem ipsum dolor sit amet
          </h2>
          <p className='sm:text-lg mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque atque officiis dolore ab iure quasi explicabo architecto quidem eius veritatis minus illum fugit consequuntur accusamus, quod perferendis adipisci? Fugiat?</p>
          <p className='sm:text-lg mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, enim distinctio! Error voluptate labore, facilis voluptates laborum aliquam. Ut sit atque veniam laudantium laboriosam nihil magni necessitatibus vitae consequatur earum?</p>
          <p className='sm:text-lg mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, enim distinctio! Error voluptate labore, facilis voluptates laborum aliquam. Ut sit atque veniam laudantium laboriosam nihil magni necessitatibus vitae consequatur earum?</p>
        </div>
        <Image src={'/nihonprato.jpg'} width={500} height={333} alt='fotopratonihon' className='sm:w-[40%] h-auto object-contain' />
      </div>
    </section>
  )
}

export default SobreSection