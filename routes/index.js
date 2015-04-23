var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Peach Style Guide' });
});

/* GET layout page. */
router.get('/layout', function(req, res, next) {
  res.render('layout_style', { title: 'Layout | Peach Style Guide' });
});

/* GET typography page. */
router.get('/typography', function(req, res, next) {
  res.render('typography_style', { title: 'Typography | Peach Style Guide' });
});

/* GET buttons page. */
router.get('/buttons', function(req, res, next) {
  res.render('buttons_style', { title: 'Buttons | Peach Style Guide' });
});

/* GET forms page. */
router.get('/forms', function(req, res, next) {
  res.render('forms_style', { title: 'Forms | Peach Style Guide' });
});

/* GET navigation page. */
router.get('/navigation', function(req, res, next) {
  res.render('nav_style', { title: 'Navigation | Peach Style Guide' });
});

/* GET media page. */
router.get('/images', function(req, res, next) {
  res.render('media_style', { title: 'Images | Peach Style Guide' });
});

/* GET colors page. */
router.get('/colors', function(req, res, next) {
  res.render('color_style', { title: 'Colors | Peach Style Guide' });
});

module.exports = router;
