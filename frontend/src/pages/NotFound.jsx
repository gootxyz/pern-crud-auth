import { Link } from "react-router-dom";
import { Card, Button } from "../components/ui";
function NotFound() {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h1 className="text-4xl font-bold">Page Not found</h1>
        <h3 className="text-2xl">404</h3>

        <Button>
          <Link to="/">🏠</Link>
        </Button>
      </Card>
    </div>
  );
}

export default NotFound;
