import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddRecord from '../pages/AddRecord'
import Home from '../pages/Home'
import Panel from '../pages/Panel'
import Records from '../pages/Records'

const Rout = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/records' element={<Records />} />
            <Route path='/add' element={<AddRecord />} />
            <Route path='/panel' element={<Panel />} />
        </Routes>
    )
}

export default Rout
