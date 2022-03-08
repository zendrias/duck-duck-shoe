import { Profile } from '../models/profile.js'

function newSettings(req, res) {
  Profile.findById(req.params.id)
    .then(profile => {
      res.render('legals/newSettings', {
        title: 'New Settings',
        profile
      })
    })

}

function create(req, res) {
  Profile.findById(req.params.id)
    .then(profile => {
      profile.siteSettings.splice(0, 1)
      profile.siteSettings.push(req.body)
      profile.save()
      console.log(profile)
      res.redirect('/dashboard')
    })
}

function index(req, res) {
  Profile.findById(req.params.id)
    .then(profile => {
      res.render('legals/policies', {
        profile,
        title: 'View Policies'
      })
    })
}

export { newSettings, create, index }