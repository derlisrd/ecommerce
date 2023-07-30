
import {GrClose} from 'react-icons/gr'

function BuscarField({buscar,setBuscar}) {
    return (<div className={`ease-in duration-100 fixed ${buscar} justify-center items-center top-0 left-0 z-50 w-full h-full backdrop-blur-md`}>
    <div className='flex gap-4 flex-col'>  
        <GrClose size={24} className='cursor-pointer' onClick={()=>{setBuscar('hidden')}} />
        <input autoFocus className='border-2 md:text-4xl text-lg sm:text-2xl p-4' placeholder='Buscar...'/>
    </div>
</div>  );
}

export default BuscarField;