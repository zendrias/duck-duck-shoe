import mongoose from 'mongoose'

let Schema = mongoose.Schema

const siteSettingsSchema = new mongoose.Schema({
  privacyPolicy: String,
  termsOfService: String,
  shippingPolicy: String
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  siteSettings: [siteSettingsSchema],
  shoesListed: {
    type: [Schema.Types.ObjectId], "ref": "Shoe"
  },
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
