import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TableRecords from '../components/TableRecords'
import { actionGetRecords } from '../redux/actions/recordsActions'

const Records = () => {

    const dispatch = useDispatch()
    const records = useSelector(state => state.recordsReducers.records)

    useEffect(() => {
        dispatch(actionGetRecords())
    }, [dispatch])
    return (
        <div className='container p-4'>
            <div className='p-4 mt-4'>
                <div className='d-flex justify-content-center align-items-center p-4'>
                    <h1>Lista de Registros</h1>
                </div>
                <TableRecords records={records} />
            </div>
        </div>
    )
}

export default Records
