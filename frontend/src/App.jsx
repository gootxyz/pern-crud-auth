import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/ProfilePage';
import TaskFormPage from './pages/TaskFormPage';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/tasks/new" element={<TaskFormPage />} />
      <Route path="/tasks/1/edit" element={<TaskFormPage />} />

      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
