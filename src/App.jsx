import './App.css'
import React from 'react'
import Header from './components/header'
import { useState } from 'react'
import UserInput from './components/UserInput'
import Result from './components/results'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
});

const inputIsValid = userInput.duration >= 1;

const handleChange = (inputIdentifier, newValue) =>{
  // console.log(userInput, newValue)
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,
      };
  });

}

  return (
    <div>
    <Header />
    <UserInput userInput={userInput} handleChange={handleChange}/>
    {!inputIsValid && <p>Please enter valid data</p>}
    {inputIsValid && <Result userInput={userInput} />}
    </div>
  );
}

export default App