import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    /* Grid secciones */
    <NavLink
        to={"/wild-nature"}

    >
        Wild Nature
    </NavLink>
  )
}
