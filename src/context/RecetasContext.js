import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const RecetasContext = createContext()

const RecetasProvider = (props) => {
  const [consultar, guardarConsultar] = useState(false)
  const [recetas, guardarRecetas] = useState([])
  const [busqueda, buscarRecetas] = useState({
    nombre: '',
  })
  const { nombre, categoria } = busqueda

  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`
        const resultado = await axios.get(url)
        console.log(resultado);
        if(resultado.data == "") {
          alert('no se encontraron resultados')
          return
        }
        guardarRecetas(resultado.data.drinks)
      }
      obtenerRecetas()
    }
  }, [busqueda])
  return (
    <RecetasContext.Provider
      value={{
        recetas,
        buscarRecetas,
        guardarConsultar,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  )
}
export default RecetasProvider