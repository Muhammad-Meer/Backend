exports.getAddHome = (req, res, next) => {
  res.render('addhome', {
    pageTitle: 'Add Home to Airbnb'
  })
}
