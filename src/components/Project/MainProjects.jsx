import { motion as m } from "motion/react";
import { useAnimate } from "motion/react";
import { Grupo as GrupoMain } from './Grupo';
import { Quimica as QuimicaMain } from './Quimica';
import { Trading as TradingMain } from './Trading';
import { Vencatalyst as VencatalystMain } from './Vencatalyst';
import { Carnet as CarnetMain } from './Carnet';
import Grupo from "../../images/gruponouma.png";
import Quimica from "../../images/quimicanouma.png";
import Trading from "../../images/noumatrading.png";
import Carnet from "../../images/CarnetOfi.png";
import Vencatalyst from "../../images/vencatalyst.png";


export const MainProjects = () => {
  return (
    <div className=" flex items-center justify-center h-auto place-content-center">
      <Basic />
    </div>
  )
}

const Basic = () => {

  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    animate("#target2", { y:0, visibility: 'hidden' });
    animate("#target3", { y:0, visibility: 'hidden' });
    animate("#target4", { y:0, visibility: 'hidden' });
    animate("#target5", { y:0, visibility: 'hidden' });
    animate("#target", { y:50, visibility: 'visible' });
  }
  const handleAnimate2 = async () => {
     animate("#target", { y:0, visibility: 'hidden' });
    animate("#target3", { y:0, visibility: 'hidden' });
    animate("#target4", { y:0, visibility: 'hidden' });
    animate("#target5", { y:0, visibility: 'hidden' });
    animate("#target2", { y:50, visibility: 'visible'});
  }
  const handleAnimate3 = async () => {
      animate("#target", {y:0, visibility: 'hidden' });
    animate("#target2", { y:0, visibility: 'hidden' });
    animate("#target4", { y:0, visibility: 'hidden' });
    animate("#target5", { y:0, visibility: 'hidden' });
    animate("#target3", { y:50, visibility: 'visible' });
  }
  const handleAnimate4 = async () => {
      animate("#target", {y:0, visibility: 'hidden' });
    animate("#target2", { y:0, visibility: 'hidden' });
    animate("#target3", { y:0, visibility: 'hidden' });
    animate("#target5", { y:0, visibility: 'hidden' });
    animate("#target4", { y:50, visibility: 'visible' });
  }
  const handleAnimate5 = async () => {
     animate("#target", { y:0, visibility: 'hidden' });
    animate("#target2", { y:0, visibility: 'hidden' });
    animate("#target3", { y:0, visibility: 'hidden' });
    animate("#target4", { y:0, visibility: 'hidden' });
    animate("#target5", { y:50, visibility: 'visible' });
  }
  return (
  <div ref={scope} className="flex flex-col h-auto">

  <div className="flex flex-col md:grid md:grid-cols-3 md:mr-3 gap-5  mb-6">
      {/* Grupo Nouma */}
      <div className="flex flex-col items-center md:hover:scale-105 duration-300">
        <m.div
        animate={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -50}}
        transition={{delay: 0.3, type: "spring", ease: "easeInOut", stiffness: 150, damping: 50, mass: 5}}
        className="h-auto w-[80%] p-4 flex flex-col bg-[#AD8B73] shadow-[#CEAB93] shadow-lg ">
          <m.h2 
            initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1}}
            transition={{duration: 1, ease: [0.85, 0.85, 0.85, 1], delay: 1}} 
            className="text-[#FFFBE9] text-center text-2xl font-semibold">Grupo Nouma</m.h2>
          <m.p 
            initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1}}
            transition={{duration: 2, ease: [0.85, 0.95, 0.99, 1], delay: 1.5}} 
            className="text-[#FFFBE9]">Esta es una página web dedicada a la comunicación y difusión de información sobre el grupo Nouma</m.p>
          <img src={Grupo}/>
          <a href="#Info" onClick={() => handleAnimate()} className="flex justify-center items-center mt-4 rounded-full bg-[#FFFBE9] px-4 py-2 w-full text-black font-semibold md:hover:scale-105 duration-100 transition-all cursor-pointer">Más Información</a>
        </m.div>
      </div>

      {/* Quimica */}
      <div className="flex flex-col items-center md:hover:scale-105 duration-300">
        <m.div
        animate={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -50}}
        transition={{delay: 0.6, type: "spring", ease: "easeInOut", stiffness: 150, damping: 50, mass: 5}}
        className="h-auto w-[80%] p-4 flex flex-col bg-[#AD8B73]  shadow-[#CEAB93] shadow-lg ">
          <m.h2 
            initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1}}
            transition={{duration: 1, ease: [0.85, 0.95, 0.99, 1], delay: 1.5}} 
            className="text-[#FFFBE9] text-center text-2xl font-semibold">Quimica Nouma</m.h2>
          <m.p
            initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1}}
            transition={{duration: 2, ease: [0.85, 0.95, 0.99, 1], delay: 1.5}} 
            className="text-[#FFFBE9]">Esta es una página web dedicada a la comunicación y difusión de información sobre el grupo Nouma</m.p>
          <img src={Quimica}/>
          <a href="#Info" onClick={() => handleAnimate2()} className="flex justify-center items-center mt-4 rounded-full bg-[#FFFBE9] px-4 py-2 w-full text-black font-semibold md:hover:scale-105 duration-100 transition-all cursor-pointer">Más Información</a>
        </m.div>
      </div>

      {/* Trading */}
      <div className="flex flex-col m-1 items-center md:hover:scale-105 duration-300">
        <m.div
        animate={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -50}}
        transition={{delay: 0.9, type: "spring", ease: "easeInOut", stiffness: 150, damping: 50, mass: 5}}
        className="h-auto w-[80%] p-4 flex flex-col bg-[#AD8B73]  shadow-[#CEAB93] shadow-lg ">
          <m.h2 
            initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1}}
            transition={{duration: 1, ease: [0.85, 0.95, 0.99, 1], delay: 1.5}} 
            className="text-[#FFFBE9] text-center text-2xl font-semibold">Nouma Trading</m.h2>
          <m.p
            initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1}}
            transition={{duration: 2, ease: [0.85, 0.95, 0.99, 1], delay: 1.5}} 
            className="text-[#FFFBE9]">Esta es una página web dedicada a la comunicación y difusión de información sobre el grupo Nouma</m.p>
          <img src={Trading}/>
          <a href="#Info" onClick={() => handleAnimate3()} className="flex justify-center items-center mt-4 rounded-full bg-[#FFFBE9] px-4 py-2 w-full text-black font-semibold md:hover:scale-105 duration-100 transition-all cursor-pointer">Más Información</a>
        </m.div>
      </div>

      {/* Carnet*/}
      <div className="flex flex-col items-center md:hover:scale-105 duration-300">
        <m.div
        animate={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -50}}
        transition={{delay: 0.3, type: "spring", ease: "easeInOut", stiffness: 150, damping: 50, mass: 5}}
        className="h-auto w-[80%] p-4 flex flex-col items-center bg-[#AD8B73]  shadow-[#CEAB93] shadow-lg ">
          <m.h2 
            initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1}}
            transition={{duration: 1, ease: [0.85, 0.95, 0.99, 1], delay: 1.5}} 
            className="text-[#FFFBE9] text-center text-2xl font-semibold">Grupo Nouma - Carnets</m.h2>
          <m.p
            initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1}}
            transition={{duration: 2, ease: [0.85, 0.95, 0.99, 1], delay: 1.5}} 
              className="text-[#FFFBE9]">Esta es una página web dedicada a la comunicación y difusión de información sobre el grupo Nouma</m.p>
          <img src={Carnet}/>
          <a href="#Info" onClick={() => handleAnimate4()} className="flex justify-center items-center mt-4 rounded-full bg-[#FFFBE9] px-4 py-2 w-full text-black font-semibold md:hover:scale-105 duration-100 transition-all cursor-pointer">Más Información</a>
        </m.div>
      </div>

      {/* Vencatalyst*/}
      <div className="flex flex-col items-center md:hover:scale-105 duration-300">
        <m.div
        animate={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -50}}
        transition={{delay: 0.6, type: "spring", ease: "easeInOut", stiffness: 150, damping: 50, mass: 5}}
        className="h-auto w-[80%] p-4 flex flex-col items-center bg-[#AD8B73]  shadow-[#CEAB93] shadow-lg ">
          <m.h2 
            initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1}}
            transition={{duration: 1, ease: [0.85, 0.95, 0.99, 1], delay: 1.5}} 
            className="text-[#FFFBE9] text-center text-2xl font-semibold">Vencatalyst</m.h2>
          <m.p
            initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1}}
            transition={{duration: 2, ease: [0.85, 0.95, 0.99, 1], delay: 1.5}} 
              className="text-[#FFFBE9]">Esta es una página web dedicada a la comunicación y difusión de información sobre el grupo Nouma</m.p>
          <img src={Vencatalyst}/>
          <a href="#Info" onClick={() => handleAnimate5()} className="flex justify-center items-center mt-4 rounded-full bg-[#FFFBE9] px-4 py-2 w-full text-black font-semibold md:hover:scale-105 duration-100 transition-all cursor-pointer">Más Información</a>
        </m.div>
      </div>

    </div>
    <div id="Info" className="flex justify-center h-[50vh] md:h-screen dark:bg-gray-900 w-full bg-[#FFFBE9]">
      <m.div animate={{visibility: 'hidden' }} transition={{ delay:1}}  id='target' className="absolute">
        <GrupoMain />
      </m.div>
      <m.div animate={{visibility: 'hidden' }} transition={{ delay:1}}  id='target2' className="absolute">
        <QuimicaMain />
      </m.div>
      <m.div animate={{visibility: 'hidden' }} transition={{ delay:1}}  id='target3' className="absolute">
        <TradingMain />
      </m.div>
      <m.div animate={{visibility: 'hidden' }} transition={{ delay:1}}  id='target4' className="absolute">
        <CarnetMain />
      </m.div>
      <m.div animate={{visibility: 'hidden' }} transition={{ delay:1}}  id='target5' className="absolute">
        <VencatalystMain />
      </m.div>
    </div>
  </div>
  )
}


