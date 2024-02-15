
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import React from 'react'

const Footer = () => {
  const pathname = usePathname()
  const router = useRouter()

  function handlePath(item: any) {
    if (pathname === '/') {
      const element = document.getElementById(item);
      if (element) {
        element.scrollIntoView({ behavior: 'instant' });
      }
    } else {
      // Se não estamos na mesma rota, redirecionar com o ID da seção
      router.push(`/?section=${item}`);
    }
  }
  return (
    <footer className="bg-[#292824] border-t border-black/50">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-teal-600">
            <Link href={'/'} className="flex gap-4 text-white justify-center items-center">
              <div>
                <Image src={'/nihonlogo.png'} width={100} height={100} alt='logonihon' className='h-12 md:h-20 w-auto' />
              </div>
              <h1 className='fontnihon text-2xl lg:text-5xl'>NIHON</h1>
            </Link>
          </div>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 sm:justify-end">
            <li>
              <Link
                href="https://www.facebook.com/NihonRestauranteJaponesAquidauana/?locale=pt_BR"
                rel="noreferrer"
                target="_blank"
                className="text-gray-200 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>

                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/nihon_restaurante/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-200 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>

                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="grid grid-cols-1 max-sm:text-center gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16"
        >
          <div>
            <p className="font-medium text-[#b93531]">Navegação</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <button onClick={() => {
                  router.push('/')
                }} className="text-gray-200 transition hover:opacity-75"> Inicio </button>
              </li>
              <li>
                <button onClick={() => {
                  handlePath('sobre')
                }} className="text-gray-200 transition hover:opacity-75"> Sobre </button>
              </li>
              <li>
                <button onClick={() => {
                  handlePath('avaliacoes')
                }} className="text-gray-200 transition hover:opacity-75"> Avaliações </button>
              </li>
              <li>
                <button onClick={() => {
                  handlePath('nossas-marcas')
                }} className="text-gray-200 transition hover:opacity-75"> Nossas marcas </button>
              </li>

              <li>
                {/* <Link href="#" className="text-gray-200 transition hover:opacity-75"> Cardápios </Link> */}
              </li>

              <li>
                <button onClick={() => {
                  handlePath('fale-conosco')
                }} className="text-gray-200 transition hover:opacity-75"> Fale conosco </button>
              </li>
              <li>
                <Link href="/nossahistoria" className="text-gray-200 transition hover:opacity-75"> Nossa História </Link>
              </li>


            </ul>
          </div>

          <div>
            <p className="font-medium text-[#b93531]">Nossas Marcas</p>

            <ul className="mt-6 space-y-4 text-sm">

              <li>
                <Link href="https://www.instagram.com/aquidaclass_marketing/" target='_blank' className="text-gray-200 transition hover:opacity-75"> AquidaClass Marketing </Link>
              </li>

              <li>
                <Link href="https://www.instagram.com/finos_paladares_restaurante" target='_blank' className="text-gray-200 transition hover:opacity-75"> Finos Paladares </Link>
              </li>

              <li>
                <Link href="https://www.saudesystem.com.br" className="text-gray-200 transition hover:opacity-75"> Saude System </Link>
              </li>
              <li>
                <Link href="https://aquidacred.com.br" className="text-gray-200 transition hover:opacity-75"> AquidaCred </Link>
              </li>
              <li>
                <Link href="https://www.pesqueiro110.com.br" className="text-gray-200 transition hover:opacity-75"> Pesqueiro 110 </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-[#b93531]">Conecte-se</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link href="https://www.instagram.com/nihon_restaurante/"
                  className="text-gray-200 transition hover:opacity-75"> Instagram </Link>
              </li>

              <li>
                <Link href="https://www.facebook.com/NihonRestauranteJaponesAquidauana/?locale=pt_BR"
                  className="text-gray-200 transition hover:opacity-75"> Facebook </Link>
              </li>

              <li>
                <Link href="/fotos" className="text-gray-200 transition hover:opacity-75">Fotos</Link>
              </li>
              <li>
                <Link href="/videos" className="text-gray-200 transition hover:opacity-75">Vídeos</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-[#b93531]">Peça pelo aplicativo</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link href={'https://instadelivery.com.br/nihonsushi'} target='_blank' className="text-gray-200 transition hover:opacity-75"> Instadelivery </Link>
              </li>
              <li>
                <Link href={'https://www.ifood.com.br/delivery/aquidauana-ms/nihon-sushi-bar-e-restaurante-japones-guanandy/7c088da1-b638-489f-93a0-b7b756121dfe'} target='_blank' className="text-gray-200 transition hover:opacity-75"> Ifood </Link>
              </li>
              <li>
                <Link href="https://wa.me/55991362855/?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20fazer%20uma%20reserva" target='_blank' className="text-gray-200 transition hover:opacity-75"> Faça sua reserva </Link>
              </li>
            </ul>
          </div>
        </div>

        <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3737.6438410048913!2d-55.788799!3d-20.4798165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947de646b7af2113%3A0x1b605c7d8eddb972!2sNIHON%20RESTAURANTE!5e0!3m2!1spt-BR!2sbr!4v1707907902379!5m2!1spt-BR!2sbr" width="600" height="300" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <p className="text-xs text-gray-500">&copy; 2015. Nihon. Todos os direitos reservados.</p>
        <Link href={'https://xyrlan.vercel.app/'} ><p className='text-xs text-gray-500 mt-4'>Desenvolvido por <span className='text-[#b93531] underline'>xyrlan</span></p></Link>
      </div>
    </footer>
  )
}

export default Footer