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
      res.render('shops/show', {
        shoe,
        title: 'Details'
      })
    })
}

export { index, all, show }