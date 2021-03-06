const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log('connect to mongodb')
  })
  .catch((err) => {
    console.log('error connectiong to mongodb:', err.message)
  })

const personSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 3, unique: true},
  number: {type: String, required: true, minlength: 8},
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

personSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Person', personSchema)