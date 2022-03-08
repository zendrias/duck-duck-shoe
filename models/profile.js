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

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  siteSettings: [siteSettingsSchema],
  shoesListed: {
    type: [Schema.Types.ObjectId], "ref": "Shoe"
  },
  shoesReserved: {
    type: [Schema.Types.ObjectId], "ref": "Shoe"
  }
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
