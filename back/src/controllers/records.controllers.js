//import model 
const Record = require('../models/Record')

//exports controllers

module.exports = {
    //controller to obtain records
    getAllRecords: async (req,res)=>{
        try {
            const response = await Record.find()
            res.json(response)
        } catch (error) {
            res.json({ msg:'Error' })
        }
    },

    //controller to create new record
    addRecord: async (req,res)=>{
        try {
            const { concept, amount, typeOperation, created, category } = req.body
            const record = new Record({
                concept,
                amount,
                typeOperation,
                created,
                category
            })
            await record.save()
            res.json({msg:'Success'})
        } catch (error) {
            res.json({ msg:'Error' })
        }
    },

    //controller to modify record
    updateRecord: async (req,res)=>{
        try {
            const { id } = req.params
            await Record.findByIdAndUpdate(id,req.body)
            res.json({ msg: 'Success'})
        } catch (error) {
            res.json({msg:'Error'})
        }
    },
    
    //controller to delete record
    deleteRecord: async(req,res)=>{
        try {
            const { id } = req.params
            await Record.findByIdAndDelete(id)
            res.json({ msg: 'Success'})
        } catch (error) {
            res.json({msg:'Error'})
        }
    }
}