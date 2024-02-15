"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Banner from './Banner'
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Fotos",
    href: "/fotos",
    description:
      "Feed de fotos sempre atualizados do Nihon",
  },
  {
    title: "Vídeos",
    href: "/videos",
    description:
      "Feed de videos sempre atualizados do Nihon",
  },

]

export function NavigationMenuMain({ visible, isNavbarAtTop }: any) {


  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter()
  const pathname = usePathname()


  const navigation = [
    {
      name: 'Inicio', href: 'inicio', subnav: [
        { name: 'Sobre', href: 'sobre' },
        { name: 'Avaliações', href: 'avaliacoes' },
        { name: 'Nossas Marcas', href: 'nossas-marcas' },
        { name: 'Fale Conosco', href: 'fale-conosco' },
      ],
    },
    { name: 'Cursos', href: '/cursos' },
    { name: 'Feed', href: '/fotos', subnav: [
      { name: 'Fotos', href: '/fotos' },
      { name: 'Vídeos', href: '/videos' },
    ], },
    { name: 'Nossa Historia', href: '/nossahistoria' },
    { name: 'Reserve', href: 'https://wa.me/55991362855/?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20fazer%20uma%20reserva' },
  ]


  function handlePath(item: any) {
    if (pathname === '/') {
      const element = document.getElementById(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    } else {
      // Se não estamos na mesma rota, redirecionar com o ID da seção
      router.push(`/?section=${item.name.toLowerCase().replace(' ', '-')}`);
    }
  }

  return (
    <Disclosure as="nav" className={`w-full bg-[#1d1d19] fixed top-0 border-b border-black duration-200 transition-all z-50 ${visible && !isOpen || isOpen ? '-translate-y-0' : '-translate-y-40'} ${isNavbarAtTop && !isOpen ? 'bg-opacity-40 hover:bg-opacity-100' : 'bg-opacity-100'}`}>
      {({ open }) => (
        <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }}>
          <Banner />
          <div className="mx-auto px-2 py-4 container">
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
                  <NavigationMenu>
                    <NavigationMenuList>

                      <NavigationMenuItem>
                        <NavigationMenuTrigger className='bg-inherit text-white hover:text-white hover:bg-[#1d1d19]'>Página incial</NavigationMenuTrigger>
                        <NavigationMenuContent className='bg-[#1d1d19] text-white'>
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-4">
                              <NavigationMenuLink asChild>
                                <button
                                  className="flex h-full w-full select-none flex-col justify-end items-center rounded-md bg-gradient-to-b from-muted-foreground/50 to-muted-foreground p-6 no-underline outline-none focus:shadow-md"
                                  onClick={() => {
                                    router.push('/')
                                  }}
                                >
                                  <Image src={'/nihonlogo.png'} width={100} height={100} alt='logonihon' className='h-12 md:h-20 w-auto' />
                                  <h1 className='fontnihon text-2xl lg:text-5xl mb-2 mt-4 font-medium'>NIHON</h1>
                                  <p className="text-sm leading-tight text-gray-300">
                                    Aqui começam tradições. Há 12 anos em Aquidauana, temos orgulhos de fazer parte da vida de tantas familias e suas tradições.
                                  </p>
                                </button>
                              </NavigationMenuLink>
                            </li>
                            <ListItem title="Sobre" qparams={'sobre'} handlePath={handlePath}>
                              Conheça um pouco da historia Nihon.
                            </ListItem>
                            <ListItem title="Avaliações" qparams={'avaliacoes'} handlePath={handlePath}>
                              Veja as avaliações de nosso clientes.
                            </ListItem>
                            <ListItem title="Nossas Marcas" qparams={'nossas-marcas'} handlePath={handlePath}>
                              Conheça os parceiros Nihon
                            </ListItem>
                            <ListItem title="Fale Conosco" qparams={'fale-conosco'} handlePath={handlePath}>
                              Envie dúvidas, reclamações, sugestões e outros
                            </ListItem>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem className=''>
                        <Link href="/nossahistoria" legacyBehavior passHref>
                          <NavigationMenuLink className={"bg-inherit text-white hover:text-white hover:bg-[#1d1d19] group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 disabled:pointer-events-none disabled:opacity-50"}>
                            Nossa Historia
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem className=''>
                        <Link href="/cursos" legacyBehavior passHref>
                          <NavigationMenuLink className={"bg-inherit text-white hover:text-white hover:bg-[#1d1d19] group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 disabled:pointer-events-none disabled:opacity-50 "}>
                            Cursos
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuTrigger className='bg-inherit text-white hover:text-white hover:bg-[#1d1d19]'>Feed</NavigationMenuTrigger>
                        <NavigationMenuContent className='bg-[#1d1d19] text-white'>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                              <Link href={component.href} key={component.title} passHref legacyBehavior>
                                <NavigationMenuLink
                                  asChild
                                >
                                  <button className='block w-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground' >
                                    <div className="text-sm font-medium leading-none">{component.title}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {component.description}
                                    </p>
                                  </button>
                                </NavigationMenuLink>
                              </Link>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem className=''>
                        <Link href="https://wa.me/55991362855/?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20fazer%20uma%20reserva" legacyBehavior passHref>
                          <NavigationMenuLink className={"bg-inherit text-white hover:text-white hover:bg-[#1d1d19] group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 disabled:pointer-events-none disabled:opacity-50 "}>
                            Reserve
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className={`space-y-1 px-2 pb-3 pt-2`}>
              {navigation.map((item) => (
                <div key={item.name}>
                  <Disclosure.Button
                    onClick={() => {
                      if (item.name !== 'Inicio') {
                        router.push(item.href);
                      } else {
                        handlePath(item)
                      }
                      setIsOpen(false);
                    }}
                    className={classNames(
                      'text-gray-200 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                  {item.subnav && (
                    <Disclosure.Panel>
                      <div className="px-4 py-2 space-y-1">
                        {item.subnav.map((subItem) => (
                          <Disclosure.Button
                            key={subItem.name}
                            onClick={() => {
                              if(item.name === 'Inicio') {
                                handlePath(subItem)
                              } else {
                                router.push(subItem.href)
                              }
                              setIsOpen(false);
                            }}
                            className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white rounded-md"
                          >
                            {subItem.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </motion.div>
      )}
    </Disclosure>

  )
}

const ListItem = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button"> & { title: string; qparams: string | undefined, handlePath: any }
>(({ className, title, children, qparams, handlePath, ...props }, ref) => {

  const item = { name: title, href: qparams }

  return (
    <li>
      <NavigationMenuLink asChild>
        <button
          ref={ref}
          onClick={() => {
            handlePath(item)
          }}
          className={cn(
            "block w-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </button>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
