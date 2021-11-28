import React , {useEffect, useState} from 'react'
import {actionDeleteRecord, actionGetRecords, actionUpdateRecord} from '../redux/actions/recordsActions'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormPanel from './FormPanel'

const TablePanel = () => {
    const dispatch = useDispatch()
    const records = useSelector(state=>state.recordsReducers.records)
    const data_update = useSelector(state=>state.recordsReducers.data_update)
    const data_delete = useSelector(state=>state.recordsReducers.data_delete)
    const [data , setData] = useState({
        concept: '',
        amount: '',
        typeOperation: '',
        created: '',
        category: '',
    })


    const [cls,setCls] = useState('d-none')
    const [recorId,setRecordId] = useState('')

    const handleChange = (e) => {
        if(cls === 'd-block'){
            setCls('d-none')
        }

        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        }


    const getRecord = (record)=>{
        setData({
            concept: record.concept,
            amount: record.amount,
            typeOperation: record.typeOperation,
            created: record.created,
            category: record.category
        })
        setRecordId(record._id)
    }

    const updateRecord = ()=>{
        dispatch(actionUpdateRecord(recorId, data.concept, data.amount, data.typeOperation, data.created, data.category))
        setData({
            concept: '',  
            amount: '',  
            typeOperation: '', 
            created:    '',
            category:   ''   
        })
        dispatch(actionGetRecords())
    }

    const deleteRecord = (id)=>{
        dispatch(actionDeleteRecord(id))
        dispatch(actionGetRecords())
    }

    useEffect(()=>{
        dispatch(actionGetRecords())
    }, [dispatch])

    return (
        <div>
            <FormPanel data={data} handleChage={handleChange} updateRecord = {updateRecord} data_update={data_update} data_delete={data_delete} cls={cls} />
            <table className="table table-light table-hover">
            <thead>
                <tr>
                    <th className='text-center'>#</th>
                    <th className='text-center'>Concepto</th>
                    <th className='text-center'>Monto</th>
                    <th className='text-center'>Tipo de Operacion</th>
                    <th className='text-center'>Fecha</th>
                    <th className='text-center'>Categoria</th>
                    <th className='text-center'>Editar</th>
                    <th className='text-center'>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    records && records.map((record,index)=>{
                        let date = record.created.split('T')[0]
                        const textClass = record.typeOperation.toLowerCase() === 'egreso' ? 'text-center text-danger' : 'text-center text-success'
                        return(
                            <tr key={index}>
                                <td className={textClass}>{index + 1}</td>
                                <td className={textClass}>{record.concept}</td>
                                <td className={textClass}>{record.amount}</td>
                                <td className={textClass}>{record.typeOperation}</td>
                                <td className={textClass}>{date}</td>
                                <td className={textClass}>{record.category}</td>
                                <td className='text-center'><button className='btn btn-success' onClick={_=>getRecord(record)}><FontAwesomeIcon icon={faPencilAlt} /></button></td>
                                <td className='text-center'><button className='btn btn-danger'  onClick={_=>deleteRecord(record._id)}><FontAwesomeIcon icon={faTrash} /></button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>

    )
    
}

export default TablePanel
