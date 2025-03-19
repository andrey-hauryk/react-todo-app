import "./styles/TaskItem.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onDeleteTask: (id: number) => void;
}

function TaskItem({ task, onDeleteTask }: TaskItemProps) {
  return (
    <div className="task">
      <div className="task__checkbox">
        <input type="checkbox" checked={task.completed} readOnly />
      </div>
      <div className="task__name">
        <span className="task__name-text">{task.text}</span>
      </div>
      <div className="task__actions">
        <button className="task__actions-edit">edit</button>
        <button className="task__actions-delete" onClick={() => onDeleteTask(task.id)}>delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
