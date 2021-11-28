import React from 'react'

const FormPanel = ({ data,handleChage, updateRecord, data_update, data_delete, cls }) => {  

    
    return (
        <div className='mb-4 mx-auto w-50'>
            <form onSubmit={updateRecord}>
                <div className="form-group">
                    <input
                        type="text"
                        name="Concept"
                        placeholder='Concepto'
                        className="form-control m-2"
                        value={data.concept}
                        onChange={handleChage}
                        
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="Amount"
                        placeholder="Monto"
                        className="form-control m-2"
                        value={data.amount}
                        onChange={handleChage}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="Type"
                        placeholder="Ingreso o Egreso"
                        className="form-control m-2"
                        value={data.typeOperation}
                        onChange={handleChage}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        name="Date"
                        className="form-control m-2"
                        value={data.created}
                        onChange={handleChage} 
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="Category"
                        placeholder="Categoria"
                        className="form-control m-2"
                        value={data.category}
                        onChange={handleChage}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-lg m-2">
                    Actualizar Registro
                </button>
            </form>
            <div className={`${cls} p-3`}>
                {data_update && data_update.status === 'Success' && <h3 className='text-success'>{data_update.msg}</h3>}
                {data_update && data_update.status === 'Error' && <h3 className='text-danger'>{data_update.msg}</h3>}
                {data_delete && data_delete.status === 'Success' && <h3 className='text-success'>{data_delete.msg}</h3>}
                {data_delete && data_delete.status === 'Error' && <h3 className='text-danger'>{data_delete.msg}</h3>}
            </div>
        </div>
    )
}

export default FormPanel
