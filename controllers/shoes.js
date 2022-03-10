import { Profile } from '../models/profile.js'
import { Shoe } from '../models/shoe.js'

function index(req, res) {
  res.render('shoes/index', {
    title: `My Shoes`
  })
}

function newShoe(req, res) {
  res.render('shoes/new', {
    title: 'Add A Shoe!'
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Shoe.create(req.body)
    .then((shoe) => {
      Profile.findById(req.user.profile._id)
        .then(profile => {
          profile.shoesListed.push(shoe._id)
          profile.save()
        })
      res.redirect('/dashboard')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/dashboard')
    })
}

function myListings(req, res) {
  Shoe.find({ owner: req.user.profile._id })
    .then(shoes => {
      res.render('shoes/myListings', {
        title: "Your Listings",
        shoes,
      })
    })
}

function update(req, res) {
  Shoe.findById(req.params.id)
    .then(shoe => {
      shoe.updateOne(req.body, { new: true })
        .then(() => {
          res.redirect('/shoes/mylistings')
        })
    })
}

function updateForm(req, res) {
  Shoe.findById(req.params.id)
    .then(shoe => {
      res.render('shoes/update', {
        title: 'Update Shoe',
        shoe
      })
    }
    )
}

function deleteShoe(req, res) {
  Shoe.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/shoes/mylistings')
    })
}

export {
  index,
  newShoe as new,
  create,
  myListings,
  update,
  updateForm,
  deleteShoe as delete
}