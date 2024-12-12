import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiDaisyui, SiReactrouter, SiHeadlessui, SiVite, SiJinja } from "react-icons/si";
import { CodeXml } from 'lucide-react';
import { motion as m } from "framer-motion";


export function Frontend() {
  
const frontend = [
  {
    icon: <FaHtml5 size={60} />,
    title: "Html5",
  },
  {
    icon: <FaCss3Alt size={60} />,
    title: "Css3",
  },
  {
    icon: <RiJavascriptFill size={60} />,
    title: "JavaScript",
  },
  {
    icon: <FaReact size={60} />,
    title: "React",
  },
  {
    icon: <RiTailwindCssFill size={60} />,
    title: "Tailwind Css",
  },
  {
    icon: <TbBrandFramerMotion size={60} />,
    title: "Framer Motion",
  },
  {
    icon: <SiDaisyui size={60} />,
    title: "DaisyUI",
  },
  {
    icon: <SiReactrouter size={60} />,
    title: "React Router",
  },
  {
    icon: <SiHeadlessui size={60} />,
    title: "Headless UI",
  },
  {
    icon: <SiVite size={60} />,
    title: "Vite",
  },
  {
    icon: <SiJinja size={60} />,
    title: "Jinja",
  },
]

    return (

    <div  className=" dark:bg-gray-700 rounded-lg shadow-lg bg-[#CEAB93]  shadow-[#AD8B73] p-6 transition-transform duration-300 hover:scale-105 h-auto w-auto">
        <div className="text-[#FFFBE9] dark:text-blue-600 mb-6">
            <CodeXml size={60}/>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Desarrollo Frontend</h3>
        <div className='grid  grid-cols-3'>
        {frontend.map((frontend, index) => (
            <ul key={index} className="mx-2">
                <li className="my-4">
                    <button className="group text-[#FFFBE9] dark:text-gray-300 transition-all flex items-center flex-col">{frontend.icon}
                        <h3 className='bg-[#FFFBE9] mt-16 text-[#CEAB93] font-semibold rounded-md absolute invisible transition-all group-hover:translate-y-1 group-hover:scale-105 duration-75 delay-150 group-hover:visible px-2'>{frontend.title}</h3>
                    </button>

                </li>
            </ul>
        ))}
        </div>
    </div>
    )
}