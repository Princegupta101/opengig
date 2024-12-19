import Task from '../models/taskModel.js';

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ status: { $ne: 'completed' } });
    const updatedTasks = tasks.map(task => {
      if (task.status === 'running' && task.lastStartTime) {
        const additionalTime = Math.floor((new Date() - task.lastStartTime) / 1000);
        return {
          ...task.toObject(),
          totalTime: task.totalTime + additionalTime
        };
      }
      return task;
    });
    res.json(updatedTasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = new Task({
      name: req.body.name,
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    if (req.body.status === 'running' && task.status !== 'running') {
      task.lastStartTime = new Date();
    } else if (task.status === 'running' && req.body.status !== 'running') {
      const additionalTime = Math.floor((new Date() - task.lastStartTime) / 1000);
      task.totalTime += additionalTime;
      task.lastStartTime = null;
    }

    task.status = req.body.status;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getTasks, createTask, updateTask };