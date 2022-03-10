import { Profile } from '../models/profile.js'
import { Shoe } from '../models/shoe.js'

function index(req, res) {
  res.render('shops/index', {
    title: 'Shop Shoes'
  })
}

function all(req, res) {
  Shoe.find({}, (error, shoes) => {
    res.render('shops/allShoes', {
      shoes,
      title: 'Browse Shoes'
    })
  })
}

function show(req, res) {
  Shoe.findById(req.params.id)
    .populate('owner')
    .then(shoe => {
      shoe.views++
      shoe.save()
      res.render('shops/show', {
        shoe,
        title: 'Details',
        user: req.user
      })
    })
}

function profile(req, res) {
  Profile.findById(req.params.id)
    .populate('shoesListed')
    .populate('shoesReserved')
    .then(profile => {
      res.render('shops/profile', {
        profile,
        title: `Profile View`
      })
    })
}

function reserve(req, res) {
  Profile.findById(req.params.id)
    .then(profile => {
      const shoeId = req.rawHeaders[19].split('/')[4]
      profile.shoesReserved.push(shoeId)
      profile.save()
      Shoe.findById(shoeId)
        .then(shoe => {
          shoe.reservations = shoe.reservations + 1
          shoe.save()
          res.redirect(`/shop/${shoeId}`)
        })
    })
}

export { index, all, show, profile, reserve }