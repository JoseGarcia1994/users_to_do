const {Router} = require("express");
const Users = require('../models/users.models');
const {createUser, getUserById} = require('../controllers/users.controllers');

const router = Router();

// Create a new user
router.post('/users', createUser);

// Select User and show all task made by User

router.get('/users/:id', getUserById);

module.exports = router;