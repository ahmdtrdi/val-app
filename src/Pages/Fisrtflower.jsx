import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Firstflower from '../assets/firstflower.png'
import Pythonflower from '../assets/pyhtonflower.png'
import { useNavigate } from 'react-router-dom'

function OldFlower() {
  let navigate = useNavigate()
  return (
    <header>
    <div>
      <Row className="py-5 px-2 d-flex justify-content-center align-items-center">
        <Col className="text-center">
          <img src={Firstflower} alt="firstflower" className="img-fluid" style={{ width: "600px" }} />
          <Col className="text-center">
          <img src={Pythonflower} alt="pythonflower" className="py-5 img-fluid" style={{ width: "250px" }} />
          <p style={{ color: "black" }}>andd noww akuu improvveeee, hope bibii likee</p>
          <button className='btn-ls' onClick={() => navigate ("/thankyou/first-flower/new-chapter") }> pencet cinii manis </button>
          </Col>
        </Col>
      </Row>
    </div>
    </header>
  )
}

export default OldFlower