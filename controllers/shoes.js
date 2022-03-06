function index(req, res) {
  res.render('shoes/index', {
    title: `${user.profile.name}'s Shoes`
  })
}

export { index }