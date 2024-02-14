import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Burger from "../assets/burger.jpeg";
import Kfc from "../assets/frk.jpeg";
import Ice from "../assets/ic.jpeg";
import Kebab from "../assets/kb.jpeg";
import Japan from "../assets/jpn.jpeg";

function Place() {
  let navigate = useNavigate();

  return (
    <header>
      <div className="mkn">
        <Row className="py-5 d-flex justify-content-center align-items-center">
          <Col className="text-center">
            <h1> Bibiii mauu mkaan apaa </h1>
          </Col>
        </Row>
        <Row className="py-2 d-flex justify-content-center align-items-center">
          <Col className="text-center">
            <img src={Burger} style={{ width: "180px" }} />
          </Col>
          <Col className="text-center">
            <img src={Kfc} style={{ width: "180px" }} />
          </Col>
          <Col className="text-center">
            <img src={Ice} style={{ width: "180px" }} />
          </Col>
          <Col className="text-center">
            <img src={Kebab} style={{ width: "180px" }} />
          </Col>
          <Col className="text-center">
            <img src={Japan} style={{ width: "180px" }} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="text-center">
            <input type="radio" id="burger" name="place" value="burger" />
          </Col>
          <Col className="text-center">
            <input type="radio" id="burger" name="place" value="burger" />
          </Col>
          <Col className="text-center">
            <input type="radio" id="burger" name="place" value="burger" />
          </Col>
          <Col className="text-center">
            <input type="radio" id="burger" name="place" value="burger" />
          </Col>
          <Col className="text-center">
            <input type="radio" id="burger" name="place" value="burger" />
          </Col>
        </Row>

        <Row className="py-5 d-flex justify-content-center align-items-center">
          <Col className="text-center">
            <button
              className="btn-nx2"
              onClick={() =>
                navigate(
                  "/thankyou/first-flower/new-chapter/pick-date/place/tempat"
                )
              }
            >
              nexttt tempatt
            </button>
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default Place;
