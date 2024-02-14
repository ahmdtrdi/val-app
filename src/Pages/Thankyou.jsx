// Thankyou.jsx

import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import ThxImage from "../assets/thx.png";
import CatkissImage from "../assets/kiss.gif";

function Thankyou() {

  let navigate = useNavigate();
  useEffect(() => {
    const fallingCatsContainer = document.querySelector(".falling-cats-container");
    const mainCatContainer = document.querySelector(".main-cat-container");
    const mainCatRect = mainCatContainer.getBoundingClientRect();

    const numCats = 20; // Adjust the number of falling cats
    for (let i = 0; i < numCats; i++) {
      const randomX = Math.random() * mainCatRect.width;
      const randomY = Math.random() * mainCatRect.height;
      const catImage = document.createElement("img");
      catImage.src = CatkissImage;
      catImage.alt = "kiss";
      catImage.className = "falling-cat";
      catImage.style.left = `${randomX}px`;
      catImage.style.top = `${-randomY}px`;
      fallingCatsContainer.appendChild(catImage);
    }
  }, []);

  return (
    <header>
      <Container>
        <Row className="py-5 d-flex justify-content-center align-items-center">
          <Col className="text-center">
            <img src={ThxImage} alt="thx" className="img-fluid" style={{ width: "300px" }} />
          </Col>
        </Row>
        <Row className="py-5 d-flex justify-content-center align-items-center main-cat-container">
          <Col className="text-center">
            <img src={CatkissImage} alt="kiss" className="img-fluid" style={{ width: "200px" }} />
          </Col>
        </Row>
        <Row className="py-3 d-flex justify-content-center align-items-center">
          <Col className="text-center">
            <h4 style={{ color: "black" }}>I wanna Show u somethingg u rememberr bibii</h4>
          </Col>
        </Row>
        <Row className="py-5 justify-content-center align-items-center">
            <Col className="text-center">
                <button className="btn-uwu" onClick={()=> navigate ("/thankyou/first-flower")}>click mee UwU</button>
            </Col>
        </Row>
      </Container>
      <div className="falling-cats-container"></div>
    </header>
  );
}

export default Thankyou;