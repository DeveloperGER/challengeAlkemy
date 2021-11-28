import Froms from '../components/Froms'
import React from 'react'

const AddRecord = () => {

    console.log('add')
    return (
        <div className='container p-4 mt-4'>
            <div className='row p-4'>
                <div className='p-4'>
                    <div className='d-flex justify-content-center'>
                        <h2>Agregar Registros</h2>
                    </div>
                    <Froms />
                </div>
            </div>
        </div>
    )
}

export default AddRecord
