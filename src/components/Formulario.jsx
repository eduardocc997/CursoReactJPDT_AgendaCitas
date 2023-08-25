

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10">
        <h2 className="text-3xl text-center font-black">
            Formulario
        </h2>
        <p className="text-lg mt-5 text-center font-bold mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form className="backgrount-white shadow-md rounded-lg py-10 px-5">
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase">
              Nombre Mascota</label>
            <input 
              id="mascota"
              type="text"
              placeholder="Nombre de mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase">
              Nombre Propietario</label>
            <input 
              id="propietario"
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase">
              Email</label>
            <input 
              id="email"
              type="email"
              placeholder="Email cotacto propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase">
              Alta</label>
            <input 
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase">
              Sintomas</label>
              <textarea
                id="sintomas"
                placeholder="Describe los sontomas"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              />
          </div>
          <input 
            type="submit" 
            value="Agregar paciente"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
                      hover:bg-indigo-700 transition-colors cursor-pointer"
          />
        </form>
    </div>
  )
}

export default Formulario;

