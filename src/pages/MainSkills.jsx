import { Header } from '../components/Header';
import { Skills } from '../components/Skills/Skills';

import { motion as m } from 'motion/react';
export function MainSkills() {
  return (
    <m.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.75, ease: "easeOut"}}
    className='min-h-screen bg-[#E3CAA5] dark:bg-gray-900'>
        <Header />
        <main>
          <Skills />
        </main>
    </m.div>
  )
}
