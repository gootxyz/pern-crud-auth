import { Card, Input, TextArea, Label, Button } from "../components/ui";
import { useForm } from "react-hook-form";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });


  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
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
