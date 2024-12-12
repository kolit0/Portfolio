import { Backend } from './Backend';
import { Others } from './Others';
import { Frontend } from './Frontend';


export function Skills() {
  return (
    <section id="skills" className="py-20 dark:bg-gray-800">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Mis Habilidades</h2>
        <ul className="flex flex-col gap-8 items-center justify-center lg:flex-row mx-5">
          <li className='lg:w-[30%] w-full'><Frontend /></li>
          <li className='lg:w-[30%] w-full'><Backend /></li>
          <li className='lg:w-[30%] w-full'><Others /></li>
        </ul>
      </div>
    </section>
  )
}
