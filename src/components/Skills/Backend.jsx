import { Server } from 'lucide-react';
import { FaPython, FaNodeJs  } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const backend = [
    {
      icon: <FaPython size={60} />,
      title: "Python",
    },
    {
        icon: <TbBrandDjango size={60} />,
        title: "Django",
      },
      {
        icon: <BiLogoPostgresql size={60} />,
        title: "PostgreSQL",
      },
      {
        icon: <FaNodeJs size={60} />,
        title: "Node.js",
      },
  ]

export function Backend() {
  return (
    <div  className=" dark:bg-gray-700 rounded-lg  shadow-lg bg-[#CEAB93] shadow-[#AD8B73] p-6 transition-transform duration-300 hover:scale-105  w-auto h-auto">
    <div className="text-[#FFFBE9] dark:text-blue-600 mb-6">
        <Server size={60}/>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Backend</h3>
    <div className='grid grid-cols-3'>
    {backend.map((backend, index) => (
    <ul key={index} className='mx-2'>
        <li className='my-4'>
            <button className="group gap-2 text-[#FFFBE9] dark:text-gray-300 transition-all flex flex-col  items-center">{backend.icon}
                <h3 className='bg-[#FFFBE9] absolute mt-16 text-[#CEAB93] font-semibold rounded-md px-2 invisible transition-all group-hover:translate-y-1 group-hover:scale-105 duration-75 delay-150 group-hover:visible'>{backend.title}</h3>
            </button>

        </li>
    </ul>
    ))}
    </div>
</div>
  )
}
