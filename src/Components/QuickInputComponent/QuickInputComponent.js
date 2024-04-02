import React, { useState } from 'react';
import styled from 'styled-components';

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

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  background-color: #ff6f61; 
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #ff4d3e; 
  }
`;

const QuickInputComponent = () => {
  const [passengerCount, setPassengerCount] = useState('');
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [distance, setDistance] = useState('');
  const [predictedFare, setPredictedFare] = useState(0); 

  const handleInputChange = (e, setter) => {
    const { name, value } = e.target;
    setter(value);
    if (name === 'date') {
      const selectedDate = new Date(value);
      const options = { weekday: 'long' };
      const day = new Intl.DateTimeFormat('en-US', options).format(selectedDate);
      setDayOfWeek(day);
    }
  };

  const handlePredictFare = () => {
    console.log("Fare prediction logic");
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  return (
    <InputContainer>
      <InputWrapper>
        <InputLabel>
          Passenger Count:
          <InputField type="number" name="passengerCount" value={passengerCount} onChange={(e) => handleInputChange(e, setPassengerCount)} />
        </InputLabel>
        <br />
        <InputLabel>
          Hour:
          <InputField type="time" name="hour" value={hour} onChange={(e) => handleInputChange(e, setHour)} />
        </InputLabel>
        <br />
        <InputLabel>
          Date:
          <InputField type="date" name="date" value={date} min={getCurrentDate()} onChange={(e) => handleInputChange(e, setDate)} />
        </InputLabel>
        <br />
        <InputLabel>
          Day of Week:
          <InputField type="text" name="dayOfWeek" value={dayOfWeek} readOnly />
        </InputLabel>
        <br />
        <InputLabel>
          Distance:
          <InputField type="number" name="distance" value={distance} min="1" onChange={(e) => handleInputChange(e, setDistance)} />
        </InputLabel>
        <br />
        <StyledButton onClick={handlePredictFare}>Predict fare</StyledButton>
        <br />
        <p>The Predicted fare is: {predictedFare}</p>
      </InputWrapper>
    </InputContainer>
  );
};

export default QuickInputComponent;
