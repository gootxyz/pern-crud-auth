/* eslint-disable react/prop-types */
import { Card, Button } from "../ui";
import { useTasks } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { PiTrashSimpleLight } from "react-icons/pi";
import { FiEdit2 } from "react-icons/fi";

function TaskCard({ task }) {
  const navigate = useNavigate();
  const { deleteTask } = useTasks();

  return (
    <Card className="px-7 py-4 flex flex-col justify-center">
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.description}</p>

        <div className="my-2 flex justify-end gap-x-2">
          <Button
          className="hover:bg-indigo-400"
            onClick={() => {
              navigate(`/tasks/${task.id}/edit`);
            }}
          >
            <FiEdit2 className="text-white"/>
          </Button>

          <Button
            className="bg-red-600 hover:bg-red-500"
            onClick={async () => {
              if (window.confirm("Sure to delete the current task?")) {
                deleteTask(task.id);
              }
            }}
          >
            <PiTrashSimpleLight className="text-white" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default TaskCard;
