import { Button, Card, Input } from "../components/ui";
import { useForm } from "react-hook-form";
import axios from "axios";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const response = await axios.post("http://localhost:3000/api/signup", data, {
      withCredentials: true,
    });
    console.log(response);
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-2xl font-bold">RegisterPage</h3>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Enter your name"
            {...register("name", {
              required: true,
            })}
          />

          {errors.name && (
            <p className="text-red-500 italic">Name is required</p>
          )}

          <Input
            type="email"
            placeholder="Type your email"
            {...register("email", { required: true })}
          />

          {errors.email && (
            <p className="text-red-500 italic">Email is required</p>
          )}
          <Input
            type="password"
            placeholder="Type a password"
            {...register("password", { required: true })}
          />

          {errors.password && (
            <p className="text-red-500 italic">Password is required</p>
          )}
          <Button> Register</Button>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
