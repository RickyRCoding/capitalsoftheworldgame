"use client";

import { useRef, useState, useEffect } from "react";
import React from "react";
import { cow } from "../cow";
import AfterGame from "../components/AfterGame";

export default function Typing() {
  const [counter, setCounter] = useState(0);
  const textRef = useRef();
  const [goods, setGoods] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [show, setShow] = useState(false);
  const [changeis, setChangeIs] = useState();

  const [rad, setRad] = useState(0);

  useEffect(() => {
    setRad(Math.floor(Math.random() * 195) + 1);
  }, [counter]);

  const handleValidate = () => {
    let g = cow[rad][1].trim().split(" ");
    let i = textRef.current.value.trim().toLowerCase().split(" ");
    for (const word of i) {
      if (g.includes(word)) {
        setGoods((oldgoods) => {
          return oldgoods + 1;
        });
        setChangeIs(true);
        break;
      }
    }

    setCounter((oldcounter) => {
      return oldcounter + 1;
    });
    textRef.current.value = "";

    setShow(true);
    setTimeout(() => {
      setShow(false);
      setChangeIs(false);
    }, 1250);
  };

  return (
    <>
      {isDone ? (
        <>
          <h1 className="title">Before you go!</h1>
          {goods === 1 ? (
            <h2>You know the capital of 1 country!</h2>
          ) : (
            <h2>You know the capitals of {goods} countries!</h2>
          )}
          <br />
          <h2>Your accuracy: {Math.round((goods / counter) * 100)}%</h2>
          <br />
          <br />
          <AfterGame />
        </>
      ) : (
        <>
          <h1 className="title">
            What is the capital of <u>{cow[rad][0]}</u>?
          </h1>
          <input ref={textRef} type="text" />
          <br />
          {show && (
            <>
              {changeis ? (
                <p className="correct">Good Job!</p>
              ) : (
                <p className="incorrect">Oops!</p>
              )}
            </>
          )}

          {counter > 0 ? (
            <h4 style={{ fontSize: "1.5rem" }}>
              BTW: You got{" "}
              <u>
                {goods}/{counter}
              </u>{" "}
              questions right.
            </h4>
          ) : (
            <>
              <br />
              <br />
            </>
          )}
          <button className="button" onClick={handleValidate}>
            Validate
          </button>

          {counter > 0 && (
            <>
              <br />
              <button
                className="mb"
                onClick={() => {
                  setIsDone(true);
                }}
              >
                Ok, I&apos;m bored.
              </button>
            </>
          )}
        </>
      )}
    </>
  );
}
