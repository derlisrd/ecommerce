'use client';
import {useState} from 'react'
import {BsCart4,BsSearch} from 'react-icons/bs'
import BuscarField from '../TextFields/BuscarField';

function CartMenu() {
    const [buscar,setBuscar] = useState('hidden')
    return ( <div className='hidden md:block border-b-gray-200 border'>
            <BuscarField setBuscar={setBuscar} buscar={buscar} />
            <div className='container max-w-5xl mx-auto flex flex-row items-center gap-4 justify-end p-2'>
                <BsCart4 size={24} />
                <BsSearch className='cursor-pointer' size={20} onClick={()=>{ setBuscar('flex')}} />
            </div>
    </div> );
}

export default CartMenu;