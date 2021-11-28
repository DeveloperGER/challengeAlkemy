import { ADD_RECORD,GET_RECORD_BY_ID, GET_ALL_RECORDS, UPDATE_RECORD, DELETE_RECORD } from "../actions/recordsActions"

const initialState = {
    records:[],
    add:{},
    record:{},
    data_update:{},
    data_delete:{}
} 

export const recordsReducers = (state=initialState,action)=>{
    switch(action.type){
        case ADD_RECORD:
            return{
                ...state,
                add:action.payload
            }
        case DELETE_RECORD:
            return{
                ...state,
                date_delete:action.payload
            }
        case GET_RECORD_BY_ID:
            return{
                ...state,
                record:action.payload
            }
        case GET_ALL_RECORDS:
            return{
                ...state,
                records:action.payload
            }
        case UPDATE_RECORD:
            return{
                ...state,
                data_update:action.payload
            }
        default:
            return state
    }
}