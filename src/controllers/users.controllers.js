const Categories = require('../models/categories.models');
const Tasks = require('../models/tasks.models');
const Users = require('../models/users.models');

const createUser = async (req, res) => {
  // try | catch is exception handling
  try {
    // TODO obtain info from body
    const newUser = req.body;

    // TODO create with the information obtained
    await Users.create(newUser); // * {email: 'lsadkjfdskl', password: 'ldkfasdkljf'}

    // TODO respond that the action has been performed.
    // por defecto se envia status 200
    res.status(201).send();
  } catch {
    // catch error
    res.status(400).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
      include: {
        model: Tasks,
        attributes: {
          exclude: ["categoryId", "createdAt", "updatedAt", "createdBy"],
        },
        include: [
          {
            model: Users,
            attributes: {
              exclude: ["createdAt", "updatedAt", "password"],
            },
          },
          {
            model: Categories,
            attributes: {
              exclude: ["createdAt", "updatedAt"]
            }
          },
        ],
      },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createUser,
  getUserById,
}