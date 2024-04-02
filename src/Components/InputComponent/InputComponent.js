import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0; 
  padding-top: 60px;
  padding-bottom: 60px;
  min-height: calc(100vh - 100px);
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

const SelectField = styled.select`
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

const InputComponent = () => {
  const [passengerCount, setPassengerCount] = useState('');
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [distance, setDistance] = useState('');
  const [predictedFare, setPredictedFare] = useState(0); 

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handlePredictFare = () => {
    console.log("Fare prediction logic");
  };

  return (
    <InputContainer>
      <InputWrapper>
        <InputLabel>
          Passenger Count:
          <InputField type="number" value={passengerCount} onChange={(e) => handleInputChange(e, setPassengerCount)} />
        </InputLabel>
        <br />
        <InputLabel>
          Hour:
          <InputField type="number" value={hour} min="0" max="23" onChange={(e) => handleInputChange(e, setHour)} />
        </InputLabel>
        <br />
        <InputLabel>
          Day:
          <InputField type="number" value={date} min="1" max="31" onChange={(e) => handleInputChange(e, setDate)} />
        </InputLabel>
        <br />
        <InputLabel>
          Month:
          <SelectField value={month} onChange={(e) => handleInputChange(e, setMonth)}>
            <option value="">Select Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </SelectField>
        </InputLabel>
        <br />
        <InputLabel>
          Year:
          <InputField type="number" value={year} min={new Date().getFullYear()} onChange={(e) => handleInputChange(e, setYear)} />
        </InputLabel>
        <br />
        <InputLabel>
          Day of Week:
          <SelectField value={dayOfWeek} onChange={(e) => handleInputChange(e, setDayOfWeek)}>
            <option value="">Select Day</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </SelectField>
        </InputLabel>
        <br />
        <InputLabel>
          Distance:
          <InputField type="number" value={distance} min="1" onChange={(e) => handleInputChange(e, setDistance)} />
        </InputLabel>
        <br />
        <StyledButton onClick={handlePredictFare}>Predict fare</StyledButton>
        <br />
        <p>The Predicted fare is: {predictedFare}</p>
      </InputWrapper>
    </InputContainer>
  );
};

export default InputComponent;
