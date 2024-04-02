import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Details = {
  name: "Preprod RideShare",
  description: "Preprod RideShare leverages advanced algorithms to predict fares based on various factors such as passenger count, hour, day, month, year, and day of the week. Preprod RideShare provides accurate fare predictions, ensuring transparency and affordability for its users. This predictive feature empowers passengers to plan their rides effectively while allowing drivers to optimize their earnings and maximize efficiency on the platform.",
  website: "https://www.preprodrideshare.com",
  contacts: [
    "Contact number: 8317441445",
    "Email: mdkhalid1608@gmail.com",
    "linkedin.com/in/mohamed-khalid-b1789622a",
  ],
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactsContainer = styled.div`
  margin-top: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: #66ff99; 
`;

const InputWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #add8e6; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;



const Home = () => {
  return (
    <InputContainer>
      <InputWrapper>
        <Container>
          <Title>Welcome to {Details.name}</Title>
          <Description>{Details.description}</Description>
          <p>Visit our website: <Link href={Details.website} target="_blank">{Details.website}</Link></p>
          
          <ContactsContainer>
            <h2>Contact us at:</h2>
            <Typewriter
              options={{
                strings: Details.contacts,
                autoStart: true,
                loop: true,
              }}
            />
          </ContactsContainer>
        </Container>
      </InputWrapper>
    </InputContainer>
  );
};

export default Home;
