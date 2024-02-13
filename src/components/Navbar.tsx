'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({ visible, isNavbarAtTop }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("INICIO");
  const router = useRouter()
  const observer = useRef<IntersectionObserver | null>(null);

  const navigation = [
    { name: 'INICIO', href: '#' },
    { name: 'SOBRE', href: '#' },
    { name: 'CURSOS', href: '#' },
    // { name: 'CARDÁPIOS', href: '/cardapios' },
    { name: 'ENTRE EM CONTATO', href: '#' },
    { name: 'RESERVE', href: 'https://api.whatsapp.com/send/?phone=55991362855' },
  ]

  return (
    <Disclosure as="nav" className={`w-full bg-[#1d1d19] fixed top-0 border-b border-black py-4 duration-200 transition-all ${visible && !isOpen || isOpen ? '-translate-y-0' : '-translate-y-28'} ${isNavbarAtTop && !isOpen ? 'bg-opacity-20' : 'bg-opacity-100'}`}>
      {({ open }) => (
        <>
          <div className="mx-auto px-2 container">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button onClick={() => setIsOpen(!isOpen)} className="relative inline-flex items-center justify-center rounded-md p-2 text-white bg-[#292824] bg-opacity-80 hover:bg-opacity-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center sm:items-center sm:justify-between">
                <Link href={'/'} className="flex gap-4 text-white justify-center items-center">
                  <div>
                    <Image src={'/nihonlogo.png'} width={100} height={100} alt='logonihon' className='h-12 md:h-20 w-auto' />
                  </div>
                  <h1 className='fontnihon text-2xl lg:text-5xl'>NIHON</h1>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          document.getElementById(`${item.name}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                          if (item.name === 'RESERVE') {
                            router.push(item.href)
                          }
                        }}
                        className={classNames(
                          'text-gray-200 hover:brightness-110 hover:text-white',
                          'px-3 py-2 font-medium text-lg duration-200'
                        )}

                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className={`space-y-1 px-2 pb-3 pt-2`}>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  onClick={() => {
                    document.getElementById(`${item.name}`)?.scrollIntoView({ behavior: 'smooth' })
                    if (item.name === 'RESERVE') {
                      router.push(item.href)
                    }
                    setIsOpen(false)
                  }}
                  className={classNames(
                    'text-gray-200 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}

                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar