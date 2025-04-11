import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UerInput";
import Results from "./components/Results";

function App() {
  const [formInfo, setFormInfo] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [name]: +value,
    }));
  };

  return (
    <>
      <Header />

      <UserInput onInputChange={handleInputChange} formInfo={formInfo} />
      <Results formInfo={formInfo} />
    </>
  );
}

export default App;
