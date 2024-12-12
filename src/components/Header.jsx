import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { FlyoutMenu } from './FlyoutMenu';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <header className="sticky top-0 z-10 dark:bg-gray-800/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <FlyoutMenu />
        <nav className='md:visible invisible overflow-hidden'>
          <ul className="flex space-x-6">
            <li className='flex items-center'><a href="./" className="text-gray-800 font-semibold hover:text-[#AD8B73] dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Inicio</a></li>
            <li className='flex items-center'><a href="./Skills" className="text-gray-800 font-semibold hover:text-[#AD8B73] dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Habilidades</a></li>
            <li className='flex items-center'><a href="./Projects" className="text-gray-800 font-semibold hover:text-[#AD8B73] dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Proyectos</a></li>
            <li className='flex items-center'><a href="./Contact" className="text-gray-800 font-semibold hover:text-[#AD8B73] dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Contacto</a></li>

          </ul>
        </nav>
        <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="p-2 rounded-full hover:bg-[#AD8B73] dark:hover:bg-gray-700 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

      </div>
    </header>
  )
}