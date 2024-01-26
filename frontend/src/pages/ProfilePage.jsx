import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";
import { FaUserCheck } from "react-icons/fa";

function ProfilePage() {
  const { user } = useAuth();
  const { name, email } = user;

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center gap-5">
      <Card>
        <FaUserCheck className="h-10 w-10"/>
        <h1 className="text-2xl font-bold">Name: {name}</h1>
        <p className="text-xl">Email: {email}</p>
      </Card>
    </div>
  );
}

export default ProfilePage;
