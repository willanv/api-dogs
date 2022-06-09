import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
//
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-image: url(https://wallpaperaccess.com/full/6943757.jpg);
  }
`
//
const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`
const Div2 = styled.div`
  
`

const Dogimg = styled.img`
  width: 20vw;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);
`
const Osso = styled.img`
  width: 10vw;
  cursor: pointer;
`
//
export default function ExemploAPI() {
  const [dog, setDog] = useState([]);
  function DogList() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      setDog(response.data.message);
    });
  }

  return (
    <Div>
    <GlobalStyle/>
      <Div2>
       <Osso src="https://images.vexels.com/media/users/3/144068/isolated/preview/c3777044d4ede425b246d265b625f237-osso-de-biscoito.png" onClick={() => {DogList();}}/>
      </Div2>
      <Dogimg src={dog} alt="fotos de doguinhos" />
    </Div>
  );
}
