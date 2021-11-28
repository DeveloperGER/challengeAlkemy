import React from 'react'
import TablePanel from '../components/TablePanel'

const Panel = () => {

    
    

    return (
        <div className='container p-4'>
            <div className='p-4 mt-4'>
                <div className='d-flex justify-content-center align-items-center p-4'>
                    <h1>Panel de Control</h1>
                </div>
                <TablePanel />
            </div>
        </div>
    )
}

export default Panel
