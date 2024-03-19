import { useState } from 'react';
import Header from './components/Header/Header';
import ResultsTable from './components/ResultsTable/ResultsTable';
import UserInput from './components/UserInput/UserInput';

const INITIAL_USER_INPUT = {
  initialInvestment: 10000,
  annualInvestiment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      <ResultsTable userInput={userInput} />
    </>
  );
}

export default App;
