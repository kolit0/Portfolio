import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { motion as m } from 'motion/react';

export function Home() {
  return (
    <m.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.75, ease: "easeOut"}}
    className='min-h-screen relative bg-[#FFFBE9] dark:bg-gray-900'>
        <Header />
        <main>
          <Hero />
        </main>
    </m.div>
  )
}
