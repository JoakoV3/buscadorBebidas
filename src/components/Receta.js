import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '.3rem',
  boxShadow: '2px 4px 8px #0c0c0c',
  overflow: 'scroll',
  maxHeight: '80vh',
  p: 4,
  content: {
    overflow: 'scroll'
  }
}


export const Receta = ({ receta }) => {
  const [open, setOpen] = useState(false)
  const { guardarIdReceta, informacion, guardarReceta } =
    useContext(ModalContext)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const mostrarIngredientes = (informacion) => {
    let ingredientes = []
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {informacion[`strIngredient${i}`]} | {informacion[`strMeasure${i}`]}
          </li>
        )
      }
    }
    return ingredientes
  }

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          src={receta.strDrinkThumb}
          className={`Imagen de ${receta.strDrink}`}
          alt=""
          className="card-img-top"
        />
        <div className="card-body d-grid gap-2">
          <button
            onClick={() => {
              guardarIdReceta(receta.idDrink)
              handleOpen()
            }}
            type="button"
            className="btn btn-block btn-danger"
          >
            Ver Receta
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => {
          handleClose()
          guardarIdReceta(null)
          guardarReceta({})
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>{informacion.strDrink}</h2>
          <h3 className="mt-3">Instrucciones</h3>
          <p>{informacion.strInstructions}</p>

          <img src={informacion.strDrinkThumb} className="img-fluid my-3" />
          <h3>Ingredientes</h3>
          <ul>{mostrarIngredientes(informacion)}</ul>
        </Box>
      </Modal>
    </div>
  )
}
