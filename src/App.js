import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Profile from "./component/profile/Profile";
import Course from "./component/course/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
