const Tasks = require('../models/tasks.models');
const Users = require('../models/users.models');

const createTask = async (req, res) => {
  // try | catch is exception handling
  try {
    // TODO obtain info from body
    const { title, description, categoryId } = req.body;
    const { id } = req.params;
    // TODO create with the information obtained

    const user = await Users.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"]
      },
    })

    const task = await Tasks.create({
      title,
      description,
      categoryId,
      createdBy: user.id,
    });

    // TODO respond that the action has been performed.
    // por defecto se envia status 200
    res.status(201).end();
  } catch (error) {
    // catch error
    res.status(400).json(error);
  }
};

const updateTasks = async (req, res) => {
  try {
    const { id } = req.params;

    const {completed } = req.body;

    await Tasks.update(
      { completed },
      { where: { id }, }
    )
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
}

const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    await Tasks.destroy({
      where: {id},
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  createTask,
  updateTasks,
  deleteTasks
}