import { Card } from "../components/ui";

function HomePage() {
  

  return (
    <div>
      <Card>
        <h1 className="text-3xl font-bold my-4">Home Page</h1>
        <p>
          Create, delete, and update your daily tasks here! Just register with a simple email, name, and password so that we can label your tasks as completely yours! 
        </p>
      </Card>
    </div>
  );
}

export default HomePage;
