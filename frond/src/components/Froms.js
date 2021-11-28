import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actionAddRecord } from '../redux/actions/recordsActions'

const Froms = () => {

    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        concept: '',
        amount: '',
        typeOperation: '',
        created: '',
        category: ''
    })

    const [cls, setCls] = useState('d-none')
    const add = useSelector(state => state.recordsReducers.add)

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const { concept, amount, typeOperation, created, category } = formData
        dispatch(actionAddRecord(concept, amount, typeOperation, created, category))
        setFormData({
            concept: '',
            amount: '',
            typeOperation: '',
            created: '',
            category: ''
        })
        
        setCls('d-block')

    }
    return (
        <div className='mx-auto w-50'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="concept"
                        placeholder="Concepto"
                        className="form-control m-2"
                        value={formData.concept}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="amount"
                        placeholder="Monto"
                        className="form-control m-2"
                        value={formData.amount}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="typeOperation"
                        placeholder="Ingreso o Egreso"
                        className="form-control m-2"
                        value={formData.typeOperation}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        name="created"
                        className="form-control m-2"
                        value={formData.created}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="category"
                        placeholder="Categoria"
                        className="form-control m-2"
                        value={formData.category}
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit" class="btn btn-primary btn-lg m-2">
                    Agregar Registro
                </button>
            </form>
            <div className={`${cls} p-3`}>
                {add && add.status === 'Success' && <h3 className='text-success'>{add.msg}</h3>}
                {add && add.status === 'Error' && <h3 className='text-danger'>{add.msg}</h3>}
            </div>
        </div>
    )
}

export default Froms
