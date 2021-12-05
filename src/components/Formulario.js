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
        <legend>Busca bebidas por ingrediente o nombre</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-6">
          <input
            name="nombre"
            type="text"
            className="form-control"
            placeholder="Buscar por ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>

        <div className="col-md-6">
          <div className="d-grid gap-2">
            <input
              type="submit"
              value="Buscar Bebidas"
              className="btn btn-block btn-danger"
            />
          </div>
        </div>
      </div>
    </form>
  )
}
