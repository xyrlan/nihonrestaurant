import React from 'react'

const HeroSection = () => {
  return (
    <section id='INICIO' className="flex min-h-screen items-center justify-center sm:p-24 max-sm:bg-center bg-cover bg-[url('/nihon-hero.jpg')]">
      <div className='border-4 border-white bg-black bg-opacity-30 p-10 max-w-lg'>
        <h2 className='text-3xl md:text-5xl text-white font-bold mb-4 tracking-wider '>Lorem ipsum dolor.</h2>
        <p className='text-gray-200 text-base sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam possimus perspiciatis molestias, neque excepturi. Possimus unde pariatur minus saepe, enim quae. Incidunt, molestiae dolor aut atque dolore facere dolores?</p>
      </div>
    </section>
  )
}

export default HeroSection