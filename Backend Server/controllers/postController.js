const postModel = require("../mongodb/models/postsModel.js");

module.exports.sampleFunc = (req, res) => {
  return res.send("Hello");
};

module.exports.getAllTasks = async (req, res) => {
  try {
    const data = await postModel.find();
    return res.status(200).send(data);
  } catch (err) {
    return res.send(err.message);
  }
};

module.exports.addNewTask = async (req, res) => {
  try {
    const { text, day, reminder } = req.body;

    const newTask = await postModel.create({
      text: text,
      day: day,
      reminder: reminder,
    });

    if (newTask) {
      return res.status(200).json({
        msg: "New Task Added Sucessfully",
      });
    }
  } catch (err) {
    return res.send(err.message);
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const delId = req.params.id;

    const isExist = await postModel.findById(delId);

    if (isExist) {
      const delTask = await postModel.deleteOne({
        _id: isExist._id,
      });

      if (delTask) {
        return res.status(200).json({
          msg: `Task with ${delId} has been successfully deleted`,
        });
      }
    } else {
      return res.status(400).json({
        msg: "Task with the id is not found",
      });
    }
  } catch (err) {
    return res.send(err.message);
  }
};

module.exports.setToggle = async (req, res) => {
  try {
    const delId = req.params.id;

    const isExist = await postModel.findById(delId);

    if (isExist) {
      const filter = { _id: delId };
      const update = { reminder: isExist.reminder === true ? false : true };

      const updatedTask = await postModel.findOneAndUpdate(filter, update, {
        new: true
      });

      if (updatedTask) {
        return res.status(200).json({
          msg: "Successfully Toggled the Reminder of Task",
        });
      }
    }
  } catch (err) {
    return res.send(err.message);
  }
};
