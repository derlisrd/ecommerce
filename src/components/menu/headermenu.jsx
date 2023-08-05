'use client';
import {useState} from 'react'
import Link from "next/link";
import {GrClose} from 'react-icons/gr'
import {BsCart4,BsSearch} from 'react-icons/bs'
import {ImMenu} from 'react-icons/im'
import BuscarField from '../TextFields/BuscarField';
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

    return ( 
        <div className='shadow-md shadow-slate-200'>

        
        <header className="flex justify-between py-4 md:p-4 max-w-5xl mx-auto px-4 sticky top-0 z-10">
        <BuscarField setBuscar={setBuscar} buscar={buscar} />
        <div>
            <h2 className='font-bold hover:text-green-600'>
                <Link href='/'>STORE</Link>
            </h2>
        </div>
        <div className='flex flex-row items-center gap-2'>
            <BsSearch className='cursor-pointer md:hidden' size={20} onClick={()=>{ setBuscar('flex')}} />
            <div className='mx-4 md:hidden'>
                <BsCart4 size={24} />
            </div>
        <ImMenu size={24} className="md:hidden cursor-pointer z-20 hover:text-green-600 ease-in duration-75" onClick={change} />
        <nav className={`backdrop-blur-xl md:relative fixed w-full md:bg-none h-full top-0 ${open} md:left-0 z-10 text-center md:h-auto md:w-auto ease-in duration-100`}>
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
    </header> 
    </div>);
}

export default HeaderMenu;