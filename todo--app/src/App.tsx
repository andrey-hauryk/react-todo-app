import { useState } from "react";
import CreateTaskModal from "./components/CreateTaskModal";
import TasksBox from "./components/TasksBox";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Сделать домашку", completed: false },
    { id: 2, text: "Купить продукты", completed: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)}>Добавить задачу</button>

      <TasksBox tasks={tasks} onDeleteTask={deleteTask} />

      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateTask={addTask}
      />
    </div>
  );
}

export default App;
