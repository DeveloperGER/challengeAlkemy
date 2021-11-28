const mongoose = require('mongoose')

const connectionDB = async () => {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/datadb')
        console.log(`Successful connection with ${db.connection.name}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectionDB