import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <h1>BrainyLingo</h1>
    </div>
    <div className="navbar-middle">
      <p>Home</p>
      <p>Leaderboard</p>
      <p>Daily Quiz</p>
      <p>Genre</p>
    </div>
    <div className="navbar-right">
      <button>Sign Out</button>
    </div>
  </nav>
  );
};

export default Navbar;
