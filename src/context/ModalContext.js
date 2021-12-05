import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {
  const [idreceta, guardarIdReceta] = useState(null)
  const [informacion, guardarReceta] = useState({})

  //hacer llamado a la api cuando se reciba la receta
  useEffect(() => {
    const obtenerReceta = async () => {
      if (!idreceta) return
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
      const result = await axios.get(url)
      // console.log(result.data.drinks[0])
      guardarReceta(result.data.drinks[0])
    }
    obtenerReceta()
  }, [idreceta])
  return (
    <ModalContext.Provider
      value={{
        informacion,
        guardarIdReceta,
        guardarReceta,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
