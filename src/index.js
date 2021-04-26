import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./img/p1.jpg";
import profile2 from "./img/p2.jpg";
import profile3 from "./img/p3.jpg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="uicomments" style={{ fontSize: "20px" }}>
      <UserCard>
        <SingleComment
          name="Anubhav"
          date="Today at 7pm"
          picture={profile1}
          text="Amazing"
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Satyam"
          date="Today at 6pm"
          picture={profile2}
          text="Great job"
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Dibyansh"
          date="Today at 5pm"
          picture={profile3}
          text="Thanks"
        />
      </UserCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
