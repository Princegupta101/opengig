import { formatTime } from '../../utils/timeUtils';

const TaskItem = ({ task, onTaskAction }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
      <div>
        <h3 className="font-semibold text-lg">{task.name}</h3>
        <p className="text-gray-600">{formatTime(task.totalTime)}</p>
      </div>
      <div className="flex gap-2">
        {task.status !== 'running' ? (
          <button
            onClick={() => onTaskAction(task._id, 'running')}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => onTaskAction(task._id, 'idle')}
            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Pause
          </button>
        )}
        <button
          onClick={() => onTaskAction(task._id, 'completed')}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;