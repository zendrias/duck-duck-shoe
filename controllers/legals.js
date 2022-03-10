import { Profile } from '../models/profile.js'

function newSettings(req, res) {
  Profile.findById(req.params.id)
    .then(profile => {
      if (!profile.siteSettings.join('')) {
        profile.siteSettings.push({
          privacyPolicy: 'Not Set',
          termsOfService: 'Not Set',
          shipping: 'Not Set'
        })
      }
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
      res.redirect('/dashboard')
    })
    .catch(err => {
      console.log(err)
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
    .catch(err => {
      console.log(err)
      res.redirect('/dashboard')
    })
}

export { newSettings, create, index }