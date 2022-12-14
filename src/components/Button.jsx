import styled from "styled-components";

export default function Button({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
&:hover{
  cursor: pointer;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
}
  svg{
    width: 20px;
    height: 20px;
  }
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20%;
  height: 40px;
  width: 80%;
  background-color: #15143bdf;
  border-radius: 15px;
  color: #fff;
`;
