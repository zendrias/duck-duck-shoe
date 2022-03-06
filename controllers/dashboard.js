
function index(req, res) {
  res.render('dashboard/index', {
    title: 'dashboard'
  })
}

export {
  index
}
