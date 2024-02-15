import "./App.css";
import React from "react";
import Header from "./components/header";
import { useState } from "react";
import UserInput from "./components/UserInput";
import Result from "./components/results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <div className="invalidInput">
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!inputIsValid && <p className="valid-data">Please enter valid data</p>}
      {inputIsValid && <Result userInput={userInput} />}
    </div>
  );
}

export default App;
