import "./Home.css";

import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home__outer-wrapper">
      <h1 className="home__header-text">Hello! Welcome to Book App</h1>
      <h3 className="home__sub-header-text">
        This is an app to help you keep track of your books and build your own
        library.
        <br />
        This app will take your reading data to create a recommender system for
        books using an unsupervised machine learning process.
      </h3>
      <div className="home__main_button_wrapper">
        <div style={{ flexGrow: 1 }} />
        <Link style={{ textDecoration: "none", color: "black" }} to="/library">
          <div className="home__main_button">Library</div>
        </Link>
        <div style={{ flexGrow: 1 }} />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/readinglog"
        >
          <div className="home__main_button">Reading Log</div>
        </Link>
        <div style={{ flexGrow: 1 }} />

        <Link style={{ textDecoration: "none", color: "black" }} to="/profile">
          <div className="home__main_button">Profile</div>
        </Link>
        <div style={{ flexGrow: 1 }} />
      </div>
    </div>
  );
};

export default Home;
