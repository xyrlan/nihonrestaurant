'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from "sonner"
import { motion } from "framer-motion"


const FaleConoscoSection = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e: any) {
    e.preventDefault()
    if (name === '' || message === '' || phone === '' || email === '') {
      console.log('fail')
      return
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      phone: phone
    }
    emailjs.send("service_528j4w8", "template_fwxhga2", templateParams, "OR9NOXgMcSID8jV2N")
      .then((response) => {
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
        toast("Email enviado com sucesso!")
      }, (err) => {
        console.log(err)
        toast("Algo deu errado, nao conseguimos enviar o email")
      })
  }

  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} id='ENTRE EM CONTATO' className="flex min-h-screen items-center justify-center p-12 px-6 sm:p-24 max-sm:bg-center bg-cover bg-[url('/faleconoscohero.jpg')]">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mx-auto max-w-screen-xl px-8 py-16 sm:px-8 lg:px-12 bg-[#292824]">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12 text-gray-100">
            <h2 className='text-[#b93531] font-semibold text-3xl mb-8'>Fale Conosco</h2>
            <p className="max-w-xl sm:text-lg mb-4">
              Para dúvidas, reclamações, sugestões e outros, utilize o formulário ao lado. Responderemos o mais breve possível.
            </p>
            <p className="max-w-xl sm:text-lg">
              Para tirar dúvidas de maior urgência, sugerimos que entrem em contato através dos números:
            </p>

            <div className="mt-8 text-gray-100 hover:text-gray-400 duration-200 cursor-pointer">
              <Link href="https://api.whatsapp.com/send/?phone=55991362855" target='_blank' className="text-xl font-semibold flex gap-2 items-center  "> (67) 99136-2855
                <svg className='h-5 w-auto' stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
              </Link>
            </div>
          </div>

          <div className="rounded-lg sm:p-8 shadow-lg lg:col-span-3 lg:p-12 text-gray-100">
            <form onSubmit={sendEmail} className="space-y-4 ">
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  className="w-full bg-[#292824] border-b border-gray-200 p-3 text-sm ring-offset-0 ring-0 outline-none select-none focus:border-[#b93531]"
                  placeholder="Nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full bg-[#292824] border-b border-gray-200 p-3 text-sm ring-offset-0 ring-0 outline-none select-none focus:border-[#b93531]"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    id="email"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input
                    className="w-full bg-[#292824] border-b border-gray-200 p-3 text-sm ring-offset-0 ring-0 outline-none select-none focus:border-[#b93531]"
                    placeholder="Telefone/Celular"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type="tel"
                    id="phone"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">Message</label>

                <textarea
                  className="w-full bg-[#292824] border rounded border-gray-200 p-3 text-sm ring-offset-0 ring-0 outline-none select-none focus:border-[#b93531]"
                  placeholder="Mensagem"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  rows={8}
                  id="message"
                  required
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded duration-200 bg-gray-100 px-5 py-3 font-medium text-[#b93531] hover:bg-gray-400 sm:w-auto"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default FaleConoscoSection