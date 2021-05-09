import React from 'react';
import * as Media from '../../media';
import { Container, Row, Col } from 'reactstrap';
import './Hola.css'

function Hola() {
  return (
    <Main
      text1={
        <>
          ¡Hola a todos!
          <br />
          Soy Antonio Pereira
        </>
      }
      text2={
        <>
          Developer que le encanta implementar diseños que <br />
          inspiran y atraen a las personas.
        </>
      }
      img="https://i.ibb.co/5GTWQvq/img-1-2x.png"
    />
  );
}

export default Hola;

function Main(props) {
  const { text1, text2, img } = props;

  return (
    <>
    <Hello />
    {/* <div className="hero">
      <div className="data">
        <h1 className="text-1">{text1}</h1>
        <div className="text-2 lora-normal-spun-pearl-24px">{text2}</div>
        <IconarrowDown />
      </div>
      <img className="img" src={img} alt=""/>
    </div> */}
    </>
  );
}


function IconarrowDown() {
  return (
    <div className="iconarrow-down">
      <div className="overlap-group">
        <img
          className="vector"
          src="https://anima-uploads.s3.amazonaws.com/projects/6098037e357d58703534784c/releases/6098038f8cb3ecbc5b21752a/img/vector-12@2x.svg" alt=""
        />
        <img
          className="vector-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/6098037e357d58703534784c/releases/6098038f8cb3ecbc5b21752a/img/vector-13@2x.svg" alt=""
        />
      </div>
    </div>
  );
}



const Hello = () => {
  return(
    
    <Container className="hello-cont" fluid>
      <div className="general-div">
      <Row>
        <Col xs="8" sm="8" md="8">
          <div className="hello-text">
            <h1>¡Hola a todos!<br/>Soy Antonio Pereira</h1>
            <span>Developer que le encanta implementar diseños que inspiran y atraen a las personas.</span>
          </div>
          <div className="hello-button">
            <a href="#proyectos" >
              <img src={Media.helloMedia.downButton} alt=""/>
            </a>
          </div>
        </Col>
        <Col xs="4" sm="4" md="4">
         <div className="hello-img">
           <img src="https://i.ibb.co/5GTWQvq/img-1-2x.png" alt="" />
         </div>
        </Col>
      </Row>
      </div>
    </Container>
  )
}