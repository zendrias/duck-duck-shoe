import { Profile } from '../models/profile.js'

function terms(req, res) {
  res.render('legals/termsofservice', {
    title: 'Terms Of Service'
  })
}

function privacy(req, res) {
  Profile.findById(req.params.id)
    .then(profile => {
      res.render('legals/privacypolicy', {
        title: 'Privacy Policy',
        profile
      })
    })
}

function shipping(req, res) {
  res.render('legals/shipping', {
    title: 'Terms Of Service'
  })
}


function newPrivacy(req, res) {
  res.render('legals/newPrivacy', {
    title: 'Privacy Policy'
  })
}

export { terms, privacy, shipping, newPrivacy }