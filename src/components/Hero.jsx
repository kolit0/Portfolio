import { motion as m} from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="py-20 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <m.h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white" 
            initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1}}
            transition={{duration: 2, ease: [0.85, 0.95, 0.99, 1], delay:0.5}} >
            Otniel Jimenez
          </m.h2>
          <m.p className="text-xl text-gray-600 dark:text-gray-300 mb-6"             
            initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1}}
            transition={{duration: 2, ease: [0.85, 0.95, 0.99, 1], delay: 0.7}} >
            Soy un desarrollador web full-stack junior con una gran pasión por crear soluciones digitales innovadoras. Mi portafolio presenta una variedad de proyectos que he desarrollado utilizando tecnologías como React, Node.js y Django. Estos proyectos demuestran mi capacidad para construir interfaces de usuario intuitivas, implementar lógica de backend eficiente, y asegurar la calidad del código. Estoy constantemente buscando oportunidades para aprender nuevas tecnologías y mejorar mis habilidades como desarrollador
          </m.p>
          <a href="./Contact" className="bg-[#AD8B73] hover:scale-105 duration-300 transition-all cursor-pointer hover:bg-[#795f4e] text-white font-bold py-2 px-4 rounded-full ">
            Contactar!
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#AD8B73] dark:border-blue-400">
          </div>
        </div>  
      </div>
    </section>
  )
}

