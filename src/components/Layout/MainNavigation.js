import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <p className="xokind-logo">Book App</p>
      </Link>
      <p
        style={{ fontSize: "32px", fontWeight: "700" }}
        data-testid="main-navigation-title"
      ></p>
      <div
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <nav>
          <ul>
            <li>
              <Link to="/readinglog">
                <p style={{ color: "black", fontSize: "16px" }}>Reading Log</p>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <p
                  style={{
                    color: "black",
                    fontSize: "16px",
                  }}
                >
                  Profile
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
