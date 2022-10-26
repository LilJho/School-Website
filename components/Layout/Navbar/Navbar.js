import React from "react";

function Navbar() {
  return (
    <nav>
      <div>
        {/* Image */}
        <h2>Palawan State University</h2>
        <p>Office of the Student</p>
        <p>Affairs and Services</p>
      </div>
      <div>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Announcement</a>
          </li>
          <li>
            <a>Students</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <button type="submit">Sign in</button>
        <button type="submit">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;
