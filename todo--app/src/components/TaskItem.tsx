import "./styles/TaskItem.css"

function TaskItem() {
  return (
    <div className="task">
      <div className="task__checkbox">
        <input type="checkbox"></input>
      </div>
      <div className="task__name">
        <span className="task__name-text">тест</span>
      </div>
      <div className="task__actions">
        <button className="task__actions-edit">edit</button>
        <button className="task__actions-edit">delete</button>
      </div>
    </div>
  )
}

export default TaskItem;