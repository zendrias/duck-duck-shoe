function index(req, res) {
  res.render('brands/index', {
    title: 'Duck Brand'
  })
}

export { index }