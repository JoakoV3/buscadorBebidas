import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

export const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: '',
  })

  const { categorias } = useContext(CategoriasContext)
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext)

  const obtenerDatosReceta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault()
        buscarRecetas(busqueda)
        guardarConsultar(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Search Drinks by Ingredients</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-6">
          <input
            name="nombre"
            type="text"
            className="form-control"
            placeholder="Search by Ingredient"
            onChange={obtenerDatosReceta}
          />
        </div>

        <div className="col-md-6">
          <div className="d-grid gap-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-block btn-danger"
            />
          </div>
        </div>
      </div>
    </form>
  )
}
