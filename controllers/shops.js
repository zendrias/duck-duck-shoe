function index(req, res) {
  res.render('shops/index', {
    title: 'Shop Shoes'
  })
}

export { index }