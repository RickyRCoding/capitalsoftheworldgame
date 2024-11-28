import React from "react";
import Link from "next/link";

const AfterGame = () => {
  return (
    <h2 className="after">
      You could{" "}
      <Link className="button" href="/">
        play again
      </Link>{" "}
      or{" "}
      <a
        className="button"
        href="https://rickyrcoding.github.io/thatonenerdyguy/"
      >
        play another game
      </a>
      .
    </h2>
  );
};

export default AfterGame;
