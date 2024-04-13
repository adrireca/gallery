import { Route } from 'react-router-dom'
import React from 'react'
import { Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { WildNature } from '../components/WildNature'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="wild-nature" element={<WildNature />} />
        </Routes>
    </>
  )
}
