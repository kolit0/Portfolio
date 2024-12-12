import { BookOpenCheck, Terminal } from 'lucide-react';
import { FaNpm, FaGitAlt, FaCpanel } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";

const others = [

    {
        icon: <FaGitAlt size={60} />,
        title: "Git",
    },
    {
        icon: <FaGithub size={60} />,
        title: "GitHub",
    },
    {
        icon: <Terminal size={60} className='bg-[#FFFBE9] text-[#CEAB93] rounded-lg' />,
        title: "Terminal",
    },
    {
        icon: <IoLogoVercel size={60} />,
        title: "Vercel",
    },
    {
        icon: <FaCpanel size={60} />,
        title: "Cpanel Hosting",
    },
    {
        icon: <FaNpm size={60} />,
        title: "Node Package Manager",
    },
  ]

export function Others() {
  return (
    <div  className=" dark:bg-gray-700 rounded-lg shadow-lg bg-[#CEAB93] shadow-[#AD8B73] p-6 transition-transform duration-300 hover:scale-105 w-auto h-auto">
    <div className="text-[#FFFBE9] dark:text-blue-600 mb-6">
        <BookOpenCheck size={60}/>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Otras...</h3>
    <div className='grid grid-cols-3'>
    {others.map((others, index) => (
    <ul key={index} className='mx-2'>
        <li className='my-4'>
            <button className="group text-[#FFFBE9] dark:text-gray-300 transition-all flex items-center flex-col">{others.icon}
                <h3 className='bg-[#FFFBE9] mt-16 text-[#CEAB93] font-semibold rounded-md absolute invisible transition-all group-hover:translate-y-1 group-hover:scale-105 duration-75 delay-150 group-hover:visible px-2'>{others.title}</h3>
            </button>

        </li>
    </ul>
    ))}
    </div>
</div>
  )
}
