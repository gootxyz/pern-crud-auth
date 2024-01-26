import { Card, Input, TextArea, Label, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";

function TaskFormPage() {
  const { createTask, loadTask, errors: taskErrors, updateTask } = useTasks();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    let task;
    if (!params.id) {
      task = await createTask(data);
    } else {
      task = await updateTask(params.id, data)
    }
    navigate("/tasks");

  });

  useEffect(() => {
    if (params.id) {
      loadTask(params.id).then((task) => {
        setValue("title", task.title);
        setValue("description", task.description);
      });
    }
  }, []);

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {taskErrors.map((error, i) => (
          <p key={i} className="text-red-500">
            {error}
          </p>
        ))}
        <h2 className="text-3xl font-bold my-4">
          {params.id ? "Edit" : "Create"} Task
        </h2>
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

          <Button>{params.id ? "Save" : "Create"}</Button>
        </form>
      </Card>
    </div>
  );
}

export default TaskFormPage;
