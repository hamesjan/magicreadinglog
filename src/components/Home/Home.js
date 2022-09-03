import classes from "./Home.css";

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
    </div>
  );
};

export default Home;
