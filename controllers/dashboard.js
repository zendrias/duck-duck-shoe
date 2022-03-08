import { User } from '../models/user.js'

function index(req, res) {
  User.findById(req.user._id)
    .populate('profile')
    .then(user => {
      res.render('dashboards/index', {
        title: 'dashboard',
        profile: user.profile
      })
    })
}

function analytics(req, res) {
  res.render('dashboards/analytics', {
    title: 'My Analytics'
  })
}

export {
  index,
  analytics
}
