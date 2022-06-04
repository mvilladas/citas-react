import React from 'react'

export default function Paciente({ paciente ,setPaciente,eliminarPaciente }) {
    const {nombre,propietar,email,fecha,sintomas,id}=paciente  
    const handleEliminar = () => {
        const respuesta = confirm("¿Deseas eliminar el paciente?");
        if(respuesta){
            eliminarPaciente(id);
        }        
    }
    return (
        <div className='m-5 px-5 py-10 shadow-md bg-white rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase '>
                Nombre: {''}
                <span className='font-normal normal-case'>{paciente.nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase '>
                Propietario: {''}
                <span className='font-normal normal-case'>{paciente.propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase '>
                Email: {''}
                <span className='font-normal normal-case'>{paciente.email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase '>
                Fecha alta: {''}
                <span className='font-normal normal-case'>{paciente.fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase '>
                Síntomas: {''}
                <span className='font-normal normal-case'>{paciente.sintomas}</span>
            </p>
            <div className='flex justify-between mt-5'>
                <button 
                    type='button'
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-800 font-bold
                    uppercase text-white rounded-lg'
                    onClick={()=>setPaciente(paciente)}>
                    Editar
                </button>
                <button 
                    type='button'
                    className='py-2 px-10 bg-red-600 hover:bg-red-800 font-bold
                    uppercase text-white rounded-lg'
                    onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}
