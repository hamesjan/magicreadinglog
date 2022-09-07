import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import ReadingLog from "./components/ReadingLog/ReadingLog";
import Profile from "./components/Profile/Profile";
import BookLibrary from "./components/BookLibrary/BookLibrary";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({ signOut, user }) {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/readinglog" element={<ReadingLog />} />
        <Route
          path="/profile"
          element={<Profile username={user.username} signOut={signOut} />}
        />
        <Route path="/library" element={<BookLibrary />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export default withAuthenticator(App);
