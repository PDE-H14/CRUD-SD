const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/', controller.list);
router.post('/add', controller.save);
router.get('/delete/:id', controller.delete);
router.get('/update/:id', controller.edit);
router.post('/update/:id', controller.update);

//consults
router.post('/byname/', controller.byname);
router.post('/byauthor', controller.byauthor);
router.post('/byduration', controller.byduration);
router.post('/byversion', controller.byversion);
router.post('/bylabel', controller.bylabel);

module.exports = router;