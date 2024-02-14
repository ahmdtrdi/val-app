import React from "react";
import { useEffect , useRef, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";

import Bg1 from "../assets/ily.jpeg";
import Bg2 from "../assets/aw.jpg";
import sound from "../assets/vn-end.mp3";

function End() {
  const [value, setValue] = useState(1);
  useEffect(() => {
    if (value % 2 === 0) play();
  }, [value]);

  function play() {
    new Audio(sound).play();
  }
  return (
    <header>
      <Row>
      <div className="end">
        <h2>makasii yaa bibii sudah membaca</h2>
        <Row className="py-5 px-5 d-flex justify-content-center align-items-center">
          <Col className="text-center">
          <img src ={Bg1} style={{width: '200px'}}/>
          </Col>
        </Row>
      </div>
      </Row>
      <Row className="d-flex align-center">
      <Col className="text-center"> <img src ={Bg2} style={{width: '280px'}}/></Col>
      </Row>
      <Row className="py-5 d-flex justify-content-center">
        <Col className="text-center">
          <button className="btn-nx" onClick={() => setValue(value+1)}>
            puterrrr, pencetnya sekali ajaa yaa
          </button>
        </Col>
      </Row>
    </header>
  );
}

export default End;
