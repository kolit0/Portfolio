import { Header } from '../components/Header';
import { motion as m } from 'motion/react';
import { Form } from '../components/Form';

export function Contact() {
  return (
    <m.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.75, ease: "easeOut"}}
    className='min-h-screen bg-[#E3CAA5] dark:bg-gray-900'>
        <Header />
        <main>
          <Form />
        </main>
    </m.div>
  )
}
