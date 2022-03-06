
function index(req, res) {
  res.render('dashboards/index', {
    title: 'dashboard'
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
