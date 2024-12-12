import { useEffect, useState } from 'react';
import Image2 from '../../images/quimica/quimica3.png';
import Image3 from '../../images/quimica/quimicanouma2.png';
import Image4 from '../../images/quimicanouma.png'
import { AnimatePresence, motion as m } from 'motion/react';
import { Link } from 'lucide-react';

const slides = [Image4, Image2, Image3];


export function Quimica() {

  const [active, setActive] = useState(0)
  useEffect(() => {
    const timeout = setTimeout(() => {
    setActive((prev) => (prev + 1) % slides.length)
  }, 5000) 
  return() => clearTimeout(timeout)
},  [active])

  return (
    <div>
      <AnimatePresence initial={false} mode='wait'>
        <m.div key={`${slides[active]}-container`} className='bg-[#FFFBE9] w-full relative overflow-hidden flex flex-col md:px-20 lg:px-40 '>
          <m.img 
          key={`${slides[active]}-image`}
          initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', scale: 1.01, opacity: 0}}
          animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1, scale: 1, x: 0}}
          exit={{ opacity:0}}
          transition={{duration: 1, ease: [0.85, 0.15, 0.35, 1]}}
          src={slides[active]} className='object-cover z-10'/>
          <m.div className='flex gap-4 text-sm md:text-base  items-center justify-center bg-[#AD8B73] md:py-2 z-0'>
            {slides.map((slide, index) =>(
              <m.button
              key={slide}
              initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', scale: 1.1, opacity: 0}}
              animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1, scale: 1}}
              exit={{ opacity:0}}
              transition={{duration: 1, ease: [0.85, 0.85, 0.85, 1]}}
              className='text-[#FFFBE9] font-semibold' onClick={()=>setActive(index)}>
                {index + 1}
              </m.button>
            ))}

          </m.div>
          <div className='flex mt-2  gap-3 sm:px-5'>
            <ul className='flex w-full gap-3 text-[#AD8B73] font-semibold text-base md:text-2xl justify-center sm:justify-start'>
              <li>
                <h3>Html5</h3>
              </li>
              <li>
                <h3>React</h3>
              </li>
              <li>
                <h3>Tailwind CSS</h3>
              </li>
              <li>
                <h3>JavaScript</h3>
              </li>
              <li>
                <h3>Framer Motion</h3>
              </li>
            </ul>

          </div>
          <div className='flex mt-2 flex-col sm:flex-row gap-3 sm:px-5'>
            <ul className='flex w-full gap-3 text-[#AD8B73] font-semibold text-base md:text-2xl justify-center sm:justify-start'>
              <li>
                <h3>HeadlessUI</h3>
              </li>
            </ul>
            <a href='https://www.quimicanouma.com' target='_blank' className='flex items-center justify-center gap-2'>
            <h3 className='text-xl text-[#AD8B73] font-semibold'>Visitar</h3>
              <Link  className='size-6 text-[#AD8B73]'/>
            </a>
          </div>
        </m.div>
      </AnimatePresence>
    </div>
  )
}

