function terms(req, res) {
  res.render('legals/termsofservice', {
    title: 'Terms Of Service'
  })
}

function privacy(req, res) {
  res.render('legals/privacypolicy', {
    title: 'Terms Of Service'
  })
}

function shipping(req, res) {
  res.render('legals/shipping', {
    title: 'Terms Of Service'
  })
}

export { terms, privacy, shipping }