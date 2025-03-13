import "./styles/TasksBox.css";
import TaskItem from "./TaskItem";

function TasksBox() {
  return (
    <div className="tasks">
      <div className="tasks__content">
        <TaskItem></TaskItem>
      </div>
    </div>
  )
}

export default TasksBox;