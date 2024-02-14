import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form"

import Bungakucing from '../assets/kucing.jpeg'

function Pickdate() {
    let navigate = useNavigate();

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = data => {
        console.log("Form submitted with data:", data);
        alert(JSON.stringify(data));
    };
    

  return (
    <header>
    <Container>
        <Row className="py-5 px-2 d-flex justify-content-center align-items-center">
            <Col className="text-center">
                <h1>Yuuu bibiii jalaaaann </h1>
                <h3>pilihh waktuunyaa yaa sayang egina syors</h3>
                <img src={Bungakucing} style={{width: "200px"}} />
            </Col>
        </Row>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Col className="py-5 text-center">
            <input type="date" id="date" name="date"
           {...register("yey ngedate", { required: "isi tanggal dulu ishh" })} />
           {errors.date && <p>{errors.date.message}</p>}
            <input type="submit" value="Submit" />
        </Col>
        </form>
        <Col className="py-5 text-center">
             <button className="btn-pl" onClick={() => navigate ("/thankyou/first-flower/new-chapter/pick-date/place") }> pencet cinii manis </button></Col>
    </Container>
    </header>
  )
}

export default Pickdate