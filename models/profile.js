import mongoose from 'mongoose'
import { siteSettingsSchema } from './siteSettings.js'
let Schema = mongoose.Schema

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
