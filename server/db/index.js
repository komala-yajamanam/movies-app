const mongoose = require('mongoose')

mongoose
    .connect('mongodb://54.227.187.189:27017/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
