import { Button, Card, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup } = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    // signing up
    await signup(data);
    navigate('/profile')
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
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
            <p>Already an account? </p>
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
