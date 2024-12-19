import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskAction }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No tasks yet. Add your first task to get started!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onTaskAction={onTaskAction}
        />
      ))}
    </div>
  );
};

export default TaskList;