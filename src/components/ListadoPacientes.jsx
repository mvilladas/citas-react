import Paciente from "./Paciente";  

function ListadoPacientes({ pacientes,setPaciente,eliminarPaciente }) {
  
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes.length > 0 ? (
        <>
          <h2 className='font-black text-center text-3xl'>Pacientes</h2>
          <p className='text-xl mt-5 mb-5  text-center'>
            Administra tus {''}
            <span className='text-indigo-600'>Pacientes y citas</span>
          </p>
          {pacientes.map((paciente) =>
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente} 
            />
          )}
        </>
      ) : (
        <>
           <h2 className='font-black text-center text-3xl'>No hay pacientes</h2>
          <p className='text-xl mt-5 mb-5  text-center'>
            Comienza agregando pacientes {''}
            <span className='text-indigo-600'>y aparecerán en este lugar</span>
          </p>
        </>
      )}


    </div>

  );
}

export default ListadoPacientes;
