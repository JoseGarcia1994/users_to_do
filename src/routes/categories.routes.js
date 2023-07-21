const {Router} = require("express");
const {createCategory} = require('../controllers/categories.controllers');

const router = Router();

// create a new category
router.post('/categories', createCategory);

module.exports = router;