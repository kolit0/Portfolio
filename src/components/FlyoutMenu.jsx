import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";


export function FlyoutMenu(){

    const [open, setOpen] = useState(false);
    const Menu = [
    {title: 'Inicio', href: './'},
    {title: 'Habilidades', href: './Skills'},
    {title: 'Proyectos', href: './Projects'},
    {title: 'Contacto', href: './Contact'},
    ]

    return (
    <nav className='my-auto text-black font-bold md:hidden visible'>
      <div className="size-12 rounded-full px-1 cursor-pointer hover:bg-[#795f4e] duration-200 bg-[#AD8B73] grid grid-rows-2 items-center " onClick={() => setOpen(!open)}>
        {!open ? 
          <motion.span 
          transition={{duration: 0.2, ease: "easeInOut", type: "spring", stiffness: 200, damping: 30}}
          animate={{}} 
          className={`h-[0.1rem] bg-[#FFFBE9] w-10 -mb-4 rounded-md`} /> :
          <motion.span 
          transition={{duration: 0.3, ease: "easeInOut"}}
          animate={{rotate: -45 }} 
          className={`h-[0.1rem] bg-[#FFFBE9] w-10 -mb-6  rounded-md`} />}
        {!open ? 
          <motion.span 
          transition={{duration: 0.2, ease: "easeInOut", type: "spring", stiffness: 200, damping: 30}}
          className={`h-[0.1rem] bg-[#FFFBE9] w-10 -mt-4  rounded-md`} /> : 
          <motion.span 
            transition={{duration: 0.3, ease: "easeInOut"}}
            animate={{rotate: 45 }}
           className={`h-[0.1rem] bg-[#FFFBE9] w-10 -mt-6  rounded-md`} />}
      </div>
        <nav>
        <AnimatePresence>
          {open ? (    
            <motion.ul 
              exit={{ opacity: 0, scale: 0.1, y: [0, -5, -10] }}
              initial={{ opacity: 1, scale: 0.1 }}
              animate={{ opacity: [0, 0.5, 1], scale: 1, y: [-10, -5, 0]}}
              transition={{
                duration: 0.5,
                ease: [0.5, 0.1, 0.5, 0.8],
              }}
              className={` ${!open ? "hidden": "w-[60%] mt-4 absolute rounded-xl bg-[#AD8B73]"}`}>
              {Menu.map((menu, index) =>(
                <li key={index} className="hover:bg-[#CEAB93] hover:text-white duration-200 rounded-lg font-medium flex items-center gap-x-4 cursor-pointer p-2">
                  <a href={menu.href}>{menu.title}</a>
                </li>
              ))}
            </motion.ul>
          ): null}
        </AnimatePresence>
        </nav>
    </nav>
    )
}