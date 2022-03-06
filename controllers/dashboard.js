
function index(req, res) {
  res.render('dashboard/index', {
    title: `${user.profile.name}'s Dashboard`
  })
}

export {
  index
}
