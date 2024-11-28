"use client";

import { useRef, useState, useEffect } from "react";
import React from "react";
import { cow } from "../cow";

export default function Typing() {
  const [counter, setCounter] = useState(0);
  const textRef = useRef();
  const [goods, setGoods] = useState(0);

  const [rad, setRad] = useState(0);

  useEffect(() => {
    setRad(Math.floor(Math.random() * 195) + 1);
  }, [counter]);

  const eqSet = (xs, ys) =>
    xs.size === ys.size && [...xs].every((x) => ys.has(x));

  const handleValidate = () => {
    alert("woking");
    let g = cow[rad][1].trim().split(" ");
    let i = textRef.current.value.trim().toLowerCase().split(" ");
    for (const word of i) {
      if (g.includes(word)) {
        setGoods((oldgoods) => {
          return oldgoods + 1;
        });
      }
    }

    setCounter((oldcounter) => {
      return oldcounter + 1;
    });
    textRef.current.value = "";
  };

  return (
    <>
      <h1 className="title">
        What is the capital of <u>{cow[rad][0]}</u>?
      </h1>
      <input ref={textRef} type="text" />
      <h4>
        btw: Out of the {counter} questions you answered, you got {goods} right.
      </h4>
      {/* goods is not counting */}
      {/* {goods > 0 ? (
        <h4>
          btw: Out of the {counter} questions you ansred, you got {goods} right.
        </h4>
      ) : (
        <>
          <br></br>
          <br></br>
          <br></br>
        </>
      )} */}
      <button className="button" onClick={handleValidate}>
        Validate
      </button>
    </>
  );
}
