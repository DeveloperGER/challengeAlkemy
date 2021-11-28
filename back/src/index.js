const app = require('./app')

app.listen(app.get('PORT'), _=>{
    console.log(`${app.get('name')} listening on port ${app.get('PORT')}`)
})