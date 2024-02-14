import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import {useState, useRef, useEffect } from "react";


import sound from "../assets/vnfix.mp3";

function Petal({ angle, distance, color, size }) {
  const angleInRadians = (angle * Math.PI) / 180;
  const x = 50 + distance * Math.cos(angleInRadians);
  const y = 50 + distance * Math.sin(angleInRadians) - 38;

  return (
    <ellipse
      cx={x}
      cy={y}
      rx={size}
      ry={size / 2}
      fill={color}
      transform={`rotate(${angle} ${x} ${y})`}
    />
  );
}

function Flower({ colors, distances, sizes }) {
  const layers = colors.map((color, index) => {
    const petals = [];
    for (let i = 0; i < 360; i += 45) {
      petals.push(
        <Petal
          key={i}
          angle={i}
          distance={distances[index]}
          color={color}
          size={sizes[index]}
        />
      );
    }
    return petals;
  });

  return (
    <svg viewBox="0 0 100 30">
      {layers}
      <circle cx={50} cy={12} r={0.9} fill="#0eadf7" />{" "}
      {/* Center of the flower */}
    </svg>
  );
}

function NewFlower() {
  let navigate = useNavigate()
  const colors = ["#1f7dad", "#89b8ca", "#7dcdf2", "#66d1ff"];
  const bigSizes = [5, 4, 3, 2];
  const bigDistances = [5, 8, 5, 2.5];

  const [value, setValue] = useState(1);
  useEffect(() => {
    if (value % 2 === 0) play();
  }, [value]);

  function play() {
    new Audio(sound).play();
  }

  return (
    <header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Col className=" py-5 3rem text-center">
          <p style={{ color: "black", fontSize: "30px" }}>tadaaaaa 🥺</p>
          <Flower colors={colors} distances={bigDistances} sizes={bigSizes} />
          <p className="py-5" style={{ color: "black", fontSize: "22px" }}>
            ini bunga yang bisa aku bikin bibii 😣
          </p>
          <div className="audio align-center">
            <button onClick={() => setValue(value+1)}>puterr</button>
            <button className='btn-ls' onClick={() => navigate ("/thankyou/first-flower/new-chapter/pick-date") }> pencet cinii untuk lanjott </button>
          </div>
        </Col>
      </div>
    </header>
  );
}

export default NewFlower;
