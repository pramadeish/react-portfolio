import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  position: relative;

`;

const Title = styled.h1`
  font-size: 74px;
`;

const Subtitle = styled.h2`
  color: rebeccapurple;
`;

const Desc = styled.p`
  color: lightgray;
`;

const Button = styled.button`
  background-color: rebeccapurple;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(20px);
    }   
  }
`;

const Who = () => {
  return (
    <Section>
      
      <Container>
        <Left>
          <Img src="./img/prog.png" />
        </Left>
        <Right>
          <Title>Trust. Work. Outcome.</Title>
          <Subtitle>-What we Do</Subtitle>
          <Desc>We enjoy creating delightful and modern experiences</Desc>
          <Button>Learn More</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
