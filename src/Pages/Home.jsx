import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { useRef } from "react";



import WelcomImage from "../assets/ice.png";
import KucingImage from "../assets/pliscat.gif";

const Home = () => {
    let navigate = useNavigate();
    const noBtnRef = useRef(null);

    const handleButtonClick = () => { history.push("/thankyou") };

    const handleMouseOver = () => {
        const noBtn = noBtnRef.current;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxLeft = windowWidth - noBtnRect.width; 
        const maxTop = windowHeight - noBtnRect.height; 
    
        const i = Math.floor(Math.random() * maxLeft); 
        const j = Math.floor(Math.random() * maxTop); 
    
        noBtn.style.left = i + "px";
        noBtn.style.top = j + "px";
    };
  return (
    <div className="home">
      <header className="w-100 d-flex align center">
        <Container>
          <Row className=" py-5 d-flex justify-content-center">
            <Col className="text-center">
              <img src={WelcomImage} alt="Welcome" className="img-fluid" style={{width: "850px"}} />
            </Col>
          </Row>
          <Row>
          <Col className="text-center">
            <img
                src={KucingImage}
                alt="Kucing"
                className="img-fluid"
                style={{ width: "200px" }}
              />
            </Col>
          </Row>
        <Row className="py-5">
            <Col className="d-flex justify-content-center">
                <button className="btn-yes" onClick={()=> navigate ("/thankyou")}>yes hit meee</button>
                <button className="btn-no"ref={noBtnRef} onMouseOver={handleMouseOver}>noo..noo pliss noo 😔</button>
            </Col>
        </Row>
        </Container>
      </header>
    </div>
  );
};

export default Home;
