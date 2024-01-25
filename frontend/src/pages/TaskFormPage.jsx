import { Card, Input, TextArea, Label, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskFormPage() {
  const { createTask } = useTasks();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [postError, setPostError] = useState([]);

  const onSubmit = handleSubmit(async (data) => {
    await createTask(data);
    navigate("/tasks");
  });

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {postError.map((error, i) => (
          <p key={i} className="text-red-500">
            {error}
          </p>
        ))}
        <h2 className="text-3xl font-bold my-4">Create a Task</h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            placeholder="Title"
            autoFocus
            {...register("title", {
              required: true,
            })}
          />

          {errors.title && (
            <span className="text-red-500">Title is required</span>
          )}

          <Label htmlFor="description">Description</Label>
          <TextArea
            placeholder="Description"
            rows={3}
            {...register("description")}
          ></TextArea>

          <Button>Create</Button>
        </form>
      </Card>
    </div>
  );
}

export default TaskFormPage;
