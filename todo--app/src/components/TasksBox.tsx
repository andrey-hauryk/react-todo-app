import "./styles/TasksBox.css";
import TaskItem from "./TaskItem";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TasksBoxProps {
  tasks: Task[];
  onDeleteTask: (id: number, ) => void;
}

function TasksBox({ tasks, onDeleteTask }: TasksBoxProps) {
  return (
    <div className="tasks">
      <div className="tasks__content">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask}/>
        ))}
      </div>
    </div>
  );
}

export default TasksBox;
