import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyled";
import "./App.css";
import profile from "./imgs/269880537_597220618044253_8746544439028149771_n.jpg";
import Button from "./components/Button";
import { FaTelegramPlane } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [overlay, setOverlay] = useState(false);
  const whatsUrl =
    "https://wa.me/+5573999340124?text=Olá, gostaria de conversar sobre meu projeto com você.";
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <span style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div className="border-profile">
          <Profile background_profile={profile}></Profile>
        </div>
        <h1 style={{color: "#fff", marginTop:"20px", fontSize:"30px"}}>Gabriel Ribeiro de Souza</h1>
        </span>

        <div className="buttons">
          <a href="https://www.instagram.com/arq_gabrielr_s/" target="blank">
            <Button>
              Instagram &nbsp; <AiFillInstagram style={{ color: "#e41f1f" }} />
            </Button>
          </a>
          <a href={whatsUrl} target="blank">
            <Button>
              WhatsApp &nbsp; <RiWhatsappFill style={{ color: "#09b030" }} />
            </Button>
          </a>
          {overlay ? <Form to="marcusadrenaline@gmail.com" className="email_form" /> : ""}
          <Overlay status={overlay} onClick={() => setOverlay(false)}/>
          <span onClick={() => setOverlay(true)} style={{ width: "100%" }}>
            <Button>
              Email &nbsp; <FaTelegramPlane style={{ color: "#1c75d4" }} />
            </Button>
          </span>
        </div>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: rgba(15, 15, 15, 0.6);
  border-radius: 10px;
  font-family: 'Russo One', sans-serif;
  margin: 0 5px;

  .border-profile {
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #fff;
  }
  .buttons {
    width: 100%;
  }
`;

const Profile = styled.div`
  width: 70px;
  height: 70px;
  background-image: ${(props) => `url(${props.background_profile})`};
  background-size: 70px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
`;
const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #383a38d7;
  margin: auto;
  display: ${(props) => (!!props.status ? "block" : "none")};
`;
