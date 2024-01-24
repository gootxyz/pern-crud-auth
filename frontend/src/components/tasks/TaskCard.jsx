/* eslint-disable react/prop-types */
import { Card, Button } from "../ui";
import { deleteTaskRequest } from "../../api/tasksapi";

function TaskCard({ task }) {
  return (
    <Card className="px-7 py-4">
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.description}</p>

        <div className="my-2 flex justify-end gap-x-2">
          <Button>Edit</Button>
          <Button
            className="bg-red-500"
            onClick={async () => {
              if (window.confirm("Sure to delete the current task?")) {
                await deleteTaskRequest(task.id)
              }
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default TaskCard;
