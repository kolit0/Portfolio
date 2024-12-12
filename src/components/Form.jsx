import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { BsGeoAltFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Swal from 'sweetalert2';

export const Form = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "63ea11aa-dcc7-4102-aab1-e15e6fcf1a84");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Mensaje Enviado!",
                icon: "success"
              });
        }
      };
    
  return (
    <section className='flex md:flex-row flex-col max-md:py-5 max-md:px-5 items-center justify-center gap-10 bg-[#AD8B73]'>
        <form onSubmit={onSubmit} className='text-[#FFFBE9] flex flex-col w-auto'>
            <h2 className=' place-self-center text-3xl font-semibold'>Contáctame!</h2>
            <div className=' w-auto h-auto m-3 flex'>
                <input className=' bg-[#FFFBE9] text-[#AD8B73] font-semibold placeholder-[#AD8B73] rounded-md py-1 px-3 w-full' type='text' id='name' name='name' placeholder='Nombre' required/>
            </div>
            <div className=' w-auto h-auto m-3 flex'>
                <input className=' bg-[#FFFBE9] text-[#AD8B73] font-semibold placeholder-[#AD8B73] rounded-md py-1 px-3 w-full' type='email' id='email' name='email' placeholder='Email' required/>
            </div>
            <div className=' w-auto h-auto m-3 flex'>
                <input className=' bg-[#FFFBE9] text-[#AD8B73] font-semibold placeholder-[#AD8B73] rounded-md py-1 px-3 w-full' type='text' id='phone' name='phone' placeholder='Teléfono' required/>
            </div>
            <div className=' w-auto h-auto m-3 flex'>
                <textarea className=' resize-none md:w-96 h-40 w-full bg-[#FFFBE9] text-[#AD8B73] font-semibold placeholder-[#AD8B73] rounded-md py-1 px-3' type='text' id='message' name='message' placeholder='Mensaje' required/>
            </div>
            <button type='submit' className='bg-[#FFFBE9] text-[#AD8B73] font-semibold rounded-full my-5 py-3 hover:bg-[#CEAB93] duration-300 hover:text-[#FFFBE9]'>Enviar Mensaje</button>
        </form>
        <nav>
            <ul className='flex flex-col gap-5'>
                <li>
                    <div className='text-[#AD8B73] bg-[#FFFBE9] rounded-md px-5 text-xl py-1'>
                        <div className='flex items-center gap-2 font-semibold'>
                            <MdEmail className='text-4xl'/>
                            <h2 className='text-2xl '>Email</h2>
                        </div>
                        <p>kolo03057@gmail.com</p>
                    </div>
                </li>
                <li>
                    <div className='text-[#AD8B73] bg-[#FFFBE9] rounded-md px-5 text-xl py-1'>
                        <div className='flex items-center gap-1 font-semibold'>
                            <BiPhone className='text-4xl'/>
                            <h2 className='text-2xl '>Teléfono</h2>
                        </div>
                        <p>+58 412-440-3455</p>
                    </div>
                </li>
                <li>
                    <div className='text-[#AD8B73] bg-[#FFFBE9] rounded-md px-5 text-xl py-1'>
                        <div className='flex items-center gap-1 font-semibold'>
                            <BsGeoAltFill className='text-4xl'/>
                            <h2 className='text-2xl '>Ubicación</h2>
                        </div>
                        <p>Valencia, 2001, Carabobo, Venezuela</p>
                    </div>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default Form