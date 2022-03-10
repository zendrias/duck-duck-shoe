import mongoose from 'mongoose'

let Schema = mongoose.Schema

const siteSettingsSchema = new mongoose.Schema({
  privacyPolicy: {
    type: String,
    default: 'Not Set'
  },
  termsOfService: {
    type: String,
    default: 'Not Set'
  },
  shipping: {
    type: String,
    default: 'Not Set'
  }
})

export { siteSettingsSchema }