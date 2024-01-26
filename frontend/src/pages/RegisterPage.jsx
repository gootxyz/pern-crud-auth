import { Button, Card, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
//import {Container} from "../components/ui";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, errors: signupErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    // signing up
    const user = await signup(data);

    if (user) {
      navigate("/tasks");
    }
  });

  return (
    <div className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>
      {signupErrors &&
          signupErrors.map((error) => (
            <p key={error} className="text-red-500 text-center">
              {error}
            </p>
          ))}
        <h3 className="text-2xl font-bold">RegisterPage</h3>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            placeholder="Enter your name"
            {...register("name", {
              required: true,
            })}
          />

          {errors.name && (
            <p className="text-red-500 italic">Name is required</p>
          )}

          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            placeholder="Type your email"
            {...register("email", { required: true })}
          />

          {errors.email && (
            <p className="text-red-500 italic">Email is required</p>
          )}

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Type a password"
            {...register("password", { required: true })}
          />

          {errors.password && (
            <p className="text-red-500 italic">Password is required</p>
          )}
          <Button> Register</Button>
          <div className="flex flex-col justify-between my-4">
            <p className="mr-4">Already an account? </p>
            <Link to="/login" className="font-bold italic underline">
              Login
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
