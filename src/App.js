import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import ReadingLog from "./components/ReadingLog/ReadingLog";
import Profile from "./components/Profile/Profile";
import BookLibrary from "./components/BookLibrary/BookLibrary";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/readinglog" element={<ReadingLog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/library" element={<BookLibrary />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
