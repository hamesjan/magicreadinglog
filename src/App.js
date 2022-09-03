import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import ReadingLog from "./components/ReadingLog/ReadingLog";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Layout title={"Hello"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/readinglog" element={<ReadingLog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
