import { Card, Input, Button, Label } from "../components/ui";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const response = await axios.post(
      "http://localhost:3000/api/signin",
      data,
      {
        withCredentials: true,
      }
    );
    console.log(response);
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h1 className="text-4xl font-bold my-2 text-center">Sign In</h1>

        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
          <Button>Sign In</Button>

          <div className="flex flex-col justify-between my-4">
            <p>Not an account yet? </p>
            <Link to="/register" className="font-bold italic underline">
              Sign up
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
