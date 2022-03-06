function index(req, res) {
  res.render('shoes/index', {
    title: `My Shoes`
  })
}

export { index }