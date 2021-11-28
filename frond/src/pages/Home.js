import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actionGetRecords } from '../redux/actions/recordsActions'

const Home = () => {
    const dispatch = useDispatch()
    const records = useSelector(state => state.recordsReducers.records)

    useEffect(() => {
        dispatch(actionGetRecords())        
    }, [dispatch])

    

    return (
        <div className='container p-4 my-4 mx-auto'  >
            <div className='mt-4  d-flex justify-content-center align-items-center flex-column  p-4    '> 
                <h1>SALDO DE CUENTA</h1>
                <h2>{records.reduce((previ,next) => {
                    return previ + next.amount
                  }, 0 )}</h2>
            </div>
        </div>
    )
}

export default Home
