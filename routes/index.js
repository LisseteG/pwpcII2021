var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Agregar nueva ruta */
router.get('/Hola',function (req, res, next){
  res.status(200).json({message: '¡Soy Lissete!'})
}
)

module.exports = router;
