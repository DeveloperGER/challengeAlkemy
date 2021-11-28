import axios from 'axios'

export const GET_ALL_RECORDS = 'GET_ALL_RECORDS'
export const ADD_RECORD = 'ADD_RECORD'
export const GET_RECORD_BY_ID = 'GET_RECORD_BY_ID'
export const UPDATE_RECORD = 'UPDATE_RECORD'
export const DELETE_RECORD = 'DELETE_RECORD'

export const actionGetRecords = ()=>{
   return async (dispatch)=>{
        try {
            const response = await axios.get(`http://localhost:4000/api`)
            dispatch({
                type:GET_ALL_RECORDS,
                payload:response.data
            })
        } catch (error) {
            
        }    
    }
}

export const actionAddRecord = (concept,amount,typeOperation,created,category )=>{
    return  async (dispatch)=>{
        try {
            const response = await axios.post(`http://localhost:4000/api`,{
                concept:concept,
                amount:amount,
                typeOperation:typeOperation,
                created:created,
                category:category
            })
            dispatch({
                type:ADD_RECORD,
                payload:response.data
            })
        } catch (error) {
            
        }    
    }
}

export const actionGetRecordById = (id)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(`http://localhost:4000/api/${id}`)
            dispatch({
                type:GET_RECORD_BY_ID,
                payload:response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const actionUpdateRecord = (id,concept,amount,typeOperation,created,category)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.put(`http://localhost:4000/api/${id}`,{
                concept:concept,
                amount:amount,
                typeOperation:typeOperation,
                created:created,
                category:category
            })
            dispatch({
                type:UPDATE_RECORD,
                payload:response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const actionDeleteRecord = (id)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.delete(`http://localhost:4000/api/${id}`)
            dispatch({
                type:DELETE_RECORD,
                payload:response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}