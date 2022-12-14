import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyled";
import "./App.css";
import profile from "./imgs/banner.jpeg";
import Button from "./components/Button";
import { FaTelegramPlane } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [overlay, setOverlay] = useState(false);
  const whatsUrl =
    "https://wa.me/+5573999687478?text=Olá, gostaria de conversar sobre meu projeto.";
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="border-profile">
            <Profile background_profile={profile}></Profile>
          </div>
          <span className="text">
            <h1 style={{ color: "#fff", fontSize: "25px" }}>
              Gabriel Ribeiro de Souza
            </h1>
            <h3 style={{ color: "#c4b8b8", textAlign: "center" }}>
              Designer de Interiores e Exteriores
            </h3>
          </span>
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
          {overlay ? (
            <Form to="gabrielgrs2912003grs@gmail.com" className="email_form" />
          ) : (
            ""
          )}
          <Overlay status={overlay} onClick={() => setOverlay(false)} />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: rgba(15, 15, 15, 0.6);
  border-radius: 10px;
  font-family: "Russo One", sans-serif;
  margin: 0 5px;

  .border-profile {
    width: 150px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background: #fff;
    margin-bottom: 20px;
    @media screen and (max-width: 600px){
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
  }
  .buttons {
    width: 100%;
  }
  .text{
    background-color: #4b4a4a4e;
    padding: 20px;
    border-radius: 15px;
  }
`;

const Profile = styled.div`
  width: 93%;
  height: 93%;
  margin: 0 auto;
  background-image: ${(props) => `url(${props.background_profile})`};
  background-size: 160px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;

  @media screen and (max-width: 600px){
    width: 70px;
    height: 70px;
    background-size: 90px;
    border-radius: 50%;
  }
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
