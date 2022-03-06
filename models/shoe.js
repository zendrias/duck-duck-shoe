import mongoose from 'mongoose'

const shoeSchema = new mongoose.Schema({
  name: String,
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reservations: {
    type: Number
  }
}, {
  timestamps: true
})

const Shoe = mongoose.model('Shoe', shoeSchema)

export {
  Shoe
}
