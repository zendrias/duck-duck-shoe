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

export { index, newShoe as new }