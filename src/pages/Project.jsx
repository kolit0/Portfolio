import { Header } from '../components/Header';
import { motion as m } from 'motion/react';
import { MainProjects } from '../components/Project/MainProjects';

export function Project() {
  return (
    <m.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.75, ease: "easeOut"}}
    className='min-h-screen  bg-[#FFFBE9] dark:bg-gray-900'>
        <Header />
        <main>
          <MainProjects />
        </main>
    </m.div>
  )
}
