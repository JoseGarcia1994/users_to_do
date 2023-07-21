const Categories = require('../models/categories.models');

const createCategory = async (req, res) => {
  try {
    const { title } = req.body;

    await Categories.create({
        title,
    });
    res.status(201).end();
  } catch(error) {
      res.status(400).json(error)
  }
}

module.exports = {
    createCategory,
};