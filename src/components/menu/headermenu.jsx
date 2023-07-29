'use client';
import {useState} from 'react'
import Link from "next/link";
import {GrClose} from 'react-icons/gr'
import {BsCart4,BsSearch} from 'react-icons/bs'
import {ImMenu} from 'react-icons/im'
const menu = [
    {
        title:'inicio',
        link:'/'
    },
    {
        title:'categorias',
        link:'/'
    },
    {
        title:'tienda',
        link:'/'
    },
    {
        title:'nosotros',
        link:'/'
    },
    {
        title:'contacto',
        link:'/'
    }
];

function HeaderMenu() {
    const [open,setOpen] = useState('left-full')
    const [buscar,setBuscar] = useState('hidden')
    const change = ()=>{
            setOpen(open==='left-full' ? 'left-0' : 'left-full')
    }

    return ( <header className="flex justify-between py-4 md:p-4">
        <div className={`fixed ${buscar} justify-center items-center top-0 left-0 z-50 w-full h-full backdrop-blur-sm`}>
            <div className='flex gap-4 flex-col'>  
                <GrClose size={24} className='cursor-pointer' onClick={()=>{setBuscar('hidden')}} />
                <input autoFocus className='border-2 text-4xl p-4' placeholder='Buscar...'/>
            </div>
        </div>
        <div>
            <h2 className='font-bold hover:text-green-600'>
                <Link href='/'>STORE</Link>
            </h2>
        </div>
        <div className='flex flex-row items-center gap-2'>
            <BsSearch className='cursor-pointer' size={20} onClick={()=>{ setBuscar('flex')}} />
            <div>
                <BsCart4 size={24} />
            </div>
        <ImMenu size={24} className="md:hidden cursor-pointer z-20 hover:text-green-600 ease-in duration-75" onClick={change} />
        <nav className={`backdrop-blur-sm md:relative fixed w-full md:bg-none h-full top-0 ${open} md:left-0 z-10 text-center md:h-auto md:w-auto ease-in duration-100`}>
            <ul className="flex md:flex-row flex-col items-center justify-center h-full gap-4 md:gap-3 md:h-auto">
                {
                    menu.map((e,i)=>(
                        <li key={i} className="text-2xl uppercase md:text-sm font-bold hover:text-green-600 ease-in duration-75">
                            <Link href={e.link} >{e.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
        
        </div>
    </header> );
}

export default HeaderMenu;