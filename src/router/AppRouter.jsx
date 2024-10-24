import { Route } from 'react-router-dom'
import React from 'react'
import { Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { WildNature } from '../components/WildNature'
import { HistoricCities } from '../components/HistoricCities'
import { ExtremeAdventures } from '../components/ExtremeAdventures'
import { ModernArchitecture } from '../components/ModernArchitecture'
import { FloraAndFauna } from '../components/FloraAndFauna'
import { WorldCultures } from '../components/WorldCultures'
import { CoastalLandscapes } from '../components/CoastalLandscapes'
import { UrbanArt } from '../components/UrbanArt'
import { InternationalCuisine } from '../components/InternationalCuisine'
import { EverydayMoments } from '../components/EverydayMoments'
import { UnderwaterWonders } from '../components/UnderwaterWonders'
import { RockArt } from '../components/RockArt'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="wild-nature" element={<WildNature />} />
            <Route path="historic-cities" element={<HistoricCities />} />
            <Route path="extreme-adventures" element={<ExtremeAdventures />} />
            <Route path="modern-architecture" element={<ModernArchitecture />} />
            <Route path="flora-and-fauna" element={<FloraAndFauna />} />
            <Route path="world-cultures" element={<WorldCultures />} />
            <Route path="coastal-landscapes" element={<CoastalLandscapes />} />
            <Route path="urban-art" element={<UrbanArt />} />
            <Route path="international-cuisine" element={<InternationalCuisine />} />
            <Route path="everyday-moments" element={<EverydayMoments />} />
            <Route path="water-wonders" element={<UnderwaterWonders />} />
            <Route path="rock-art" element={<RockArt />} />

        </Routes>
    </>
  )
}
