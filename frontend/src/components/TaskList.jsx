function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) return <p>No tasks available</p>;

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            onClick={() => onToggle(task.id)}
            className={task.completed ? "completed" : ""}
          >
            {task.title}
          </span>

          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;