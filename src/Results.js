import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  const resultsRef = useRef(null);

  useEffect(() => {
    if (resultsRef.current) {
      const resultsSection =
        resultsRef.current.querySelector(".results-section");

      // GSAP animation for results section
      gsap.from(resultsSection, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, []);

  if (props.results) {
    return (
      <div className="Results" ref={resultsRef}>
        <section className="results-section">
          <h2>
            <em>{props.results.word}</em>
          </h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
