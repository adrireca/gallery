import { Route } from 'react-router-dom'
import React from 'react'
import { Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { WildNature } from '../components/WildNature'
import { WildNatureTest } from '../components/WildNatureTest'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="wild-nature" element={<WildNature />} />
            <Route path="wild-nature-test" element={<WildNatureTest />} />

        </Routes>
    </>
  )
}
