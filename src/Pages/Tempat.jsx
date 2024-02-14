import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

import Kawasan from '../assets/kawasan.png'
import Mbw from '../assets/mbw.png'
import Paniki from '../assets/paniki.png'
import Manado from '../assets/manado.png'
import Kos from '../assets/kos.png'

function Tempat() {
    let navigate = useNavigate()
  return (
    <header>
    <div>
        <Row className="py-5 d-flex justify-content-center align-items-center">
            <Col className="text-center">
            <h3> Tempatnya dimanaa nihh </h3>
            </Col>
        </Row>
        <Row className="py-2 d-flex justify-content-center align-items-center">
          <Col className="text-center">
            <img src={Kawasan} style={{ width: "180px" }} />
          </Col>
          <Col className="text-center">
            <img src={Mbw} style={{ width: "180px" }} />
          </Col>
          <Col className="text-center">
            <img src={Paniki} style={{ width: "180px" }} />
          </Col>
          <Col className="text-center">
            <img src={Manado} style={{ width: "180px" }} />
          </Col>
          <Col className="text-center">
            <img src={Kos} style={{ width: "180px" }} />
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
              className="btn-nx3"
              onClick={() =>
                navigate(
                    "/thankyou/first-flower/new-chapter/pick-date/place/tempat/end"
                )
              }
            >
              yayyy jalann
            </button>
          </Col>
        </Row>
    </div>
    </header>
  )
}

export default Tempat