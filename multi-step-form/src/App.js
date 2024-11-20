import './App.css';
import { useState } from 'react';

import Step1 from "./componants/steps/step1/Step1"; 
import Step2 from "./componants/steps/step2/Step2"; 
import Step3 from "./componants/steps/step3/Step3"; 
import Step4 from "./componants/steps/step4/Step4";


const Steps = [Step1, Step2, Step3, Step4];

function App() {
  const [step, setStep] = useState(2);
  const CurrentStep = Steps[step]
  return (
    <div className="App">
      <CurrentStep previousStep={() => setStep(step - 1)} nextStep={() => setStep(step + 1)}/>
    </div>
  );
}

export default App;
