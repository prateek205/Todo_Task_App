import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="container">
        <h2>About this App</h2>

        <div className="contentList">
          <ul>
            <li>
              <p>
                This application is a user friendly in which you can save your
                daily task at your local storage.
              </p>
            </li>

            <li>
              <p>
                In this application you can edit, delete, mark as complete, save
                and also with confirm an alert message before deleting the task.
              </p>
            </li>

            <li>
              <p>In feature we can also update with more modification.</p>
            </li>

            <li>
              <p>As this is full responsive for small and medium devices.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
