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


function update(req, res) {
  res.render('shoes/update', {
    title: "Update Your Listing"
  })
}

export { index, newShoe as new, update }