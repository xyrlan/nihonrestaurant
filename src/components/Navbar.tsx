'use client'
import Image from 'next/image'
import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

  const navigation = [
    { name: 'SOBRE', href: '#', current: true },
    { name: 'CARDÁPIOS', href: '#', current: false },
    { name: 'RESERVE', href: '#', current: false },
    { name: 'ENTRE EM CONTATO', href: '#entreemcontato', current: false },
  ]

  return (
    <Disclosure as="nav" className='w-full bg-[#292824] fixed top-0 bg-opacity-40 py-4 hover:bg-opacity-80 duration-200'>
      {({ open }) => (
        <>
          <div className="mx-auto px-2 container">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white bg-[#292824] bg-opacity-80 hover:bg-opacity-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' text-white border-b-2 border-white' : 'text-gray-300 hover:text-white',
                          'px-3 py-2 font-medium text-lg duration-200'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-[#292824] text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
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