'use client';
import {useState} from 'react'
import Link from "next/link";
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
    const change = ()=>{
       
            setOpen(open==='left-full' ? 'left-0' : 'left-full')
    }

    return ( <header className="flex justify-between p-4">
        <div>
            <h2 className='font-bold hover:text-green-600'>
                <Link href='/'>ECOMMERCE</Link>
            </h2>
        </div>
        <ImMenu size={24} className="md:hidden cursor-pointer z-50 hover:text-green-600 ease-in duration-75" onClick={change} />
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
    </header> );
}

export default HeaderMenu;