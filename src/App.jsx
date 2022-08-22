import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyled";
import "./App.css";
import profile from "./imgs/269880537_597220618044253_8746544439028149771_n.jpg";
import Button from "./components/Button";
import { FaTelegramPlane } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
function App() {
  const whatsUrl =
    "https://wa.me/+5573999340124?text=Olá, gostaria de conversar sobre meu projeto com você.";
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <div className="border-profile">
          <Profile background_profile={profile}></Profile>
        </div>

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
          <Button>
            Telegram &nbsp; <FaTelegramPlane style={{ color: "#1c75d4" }} />
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 500px;
  height: 500px;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: rgba(15, 15, 15, 0.6);
  border-radius: 10px;

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
