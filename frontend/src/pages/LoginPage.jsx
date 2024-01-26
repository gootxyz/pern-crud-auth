import { Card, Input, Button, Label } from "../components/ui";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
//import {Container} from "../components/ui";

function LoginPage() {
  const { register, handleSubmit, formState: {
    errors
  } } = useForm();
  const { signin, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);

    if (user) {
      navigate("/tasks");
    }
  });

  return (
    <div className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>
        {loginErrors &&
          loginErrors.map((error) => (
            <p key={error} className="text-red-500 text-center">
              {error}
            </p>
          ))}
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
          {errors.email && (
            <p className="text-red-500 italic">Email is required</p>
          )}
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <p className="text-red-500 italic">Password is required</p>
          )}
          <Button>Sign In</Button>

          <div className="flex flex-col justify-between my-4">
            <p className="mr-4">Not an account yet? </p>
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
