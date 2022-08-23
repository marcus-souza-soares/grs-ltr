import styled from "styled-components";

import ReactMailForm from "react-mail-form";

const Form = styled(ReactMailForm)`
  margin: auto;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  max-width: 720px;
  font-size: 14px;
  text-align: center;
  position: absolute;
  z-index: 5;

  input,
  textarea {
    border-radius: 10px;
    display: block;
    margin: 12px auto;
    width: 100%;
    max-width: 480px;
    border: 1px solid #555;
    outline: 0;
    font-size: 16px;
  }
  input {
    padding: 12px 6px;
  }
  textarea {
    padding: 6px;
    margin-bottom: 70px;
  }
  a {
    display: block;
    margin: auto;
    width: 120px;
    height: 3em;
    line-height: 3em;
    color: #fff;
    background-color: #3b9cff;
    font-size: 16px;
    font-weight: 900;
    text-decoration: blink;
    &:visited,
    &:hover,
    &:focus,
    &:active {
      color: #fff;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Form;
