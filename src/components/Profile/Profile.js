import "./Profile.css";

import { Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const Profile = (props) => {
  return (
    <div className="profile__outer-wrapper">
      <Heading level={1}>Hello {props.username}</Heading>
      <Button onClick={props.signOut}>Sign out</Button>
      <div className="profile__table-wrapper">
        <div className="profile__table-left-column">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Hello"
            style={{
              height: "150px",
              width: "150px",
            }}
          ></img>
        </div>
        <div className="profile__table-right-column">
          <h1>James, 19</h1>
          <h2>Hello this is a description</h2>
        </div>
      </div>
      <div className="profile__reading-stats">
        <div className="profile__books-this-month">
          <h1>0</h1>
          <h2>books this month</h2>
        </div>

        <div className="profile__minutes-this-month">
          <h1>0</h1>
          <h2>minutes this month</h2>
        </div>

        <div className="profile__days-in-a-row">
          <h1>0</h1>
          <h2>days in a row</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
