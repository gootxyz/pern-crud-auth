import { useEffect, useState } from "react";
import { getAllTasksRequest } from "../api/tasksapi";
import TaskCard from "../components/tasks/TaskCard";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasksRequest().then((response) => {
      setTasks(response.data);
    });
  }, []);
  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default TasksPage;
