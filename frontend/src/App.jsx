import Container from './components/Layout/Container';
import TaskForm from './components/Task/TaskForm';
import TaskList from './components/Task/TaskList';
import { useTasks } from './hooks/useTasks';

function App() {
  const { tasks, isLoading, error, addTask, updateTaskStatus } = useTasks();

  if (isLoading) {
    return (
      <Container>
        <div className="text-center py-8">Loading tasks...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="text-center text-red-500 py-8">{error}</div>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Task Timer</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onTaskAction={updateTaskStatus} />
    </Container>
  );
}

export default App;