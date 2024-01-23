import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Container } from "./components/ui";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import TaskFormPage from "./pages/TaskFormPage";
import TasksPage from "./pages/TasksPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/navbar/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isAuth } = useAuth();
  console.log(isAuth);
  return (
    <>
      <Navbar />
      <Container classname="py-5">
        <Routes>
          <Route
            element={<ProtectedRoute isAllowed={!isAuth} redirectTo="/tasks" />}
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route
            element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login" />}
          >
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/new" element={<TaskFormPage />} />
            <Route path="/tasks/1/edit" element={<TaskFormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
