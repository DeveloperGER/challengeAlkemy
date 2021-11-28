import React from 'react'

const TableRecords = ({ records }) => {

    console.log(records)
    return (
        <table className="table table-secondary table-hover">
            <thead>
                <tr>
                    <th className='text-center'>#</th>
                    <th className='text-center'>Concepto</th>
                    <th className='text-center'>Monto</th>
                    <th className='text-center'>Tipo de Operacion</th>
                    <th className='text-center'>Fecha</th>
                    <th className='text-center'>Categoria</th>
                </tr>
            </thead>
            <tbody>
                {
                    records && records.map((item,index)=>{
                        let date = item.created.split('T')[0]
                        const textClass = item.typeOperation.toLowerCase() === 'egreso' ? 'text-center text-danger' : 'text-center text-success'
                        return(
                            <tr key={index}>
                                <td className={textClass}>{index + 1}</td>
                                <td className={textClass}>{item.concept}</td>
                                <td className={textClass}>{item.amount}</td>
                                <td className={textClass}>{item.typeOperation}</td>
                                <td className={textClass}>{date}</td>
                                <td className={textClass}>{item.category}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TableRecords
