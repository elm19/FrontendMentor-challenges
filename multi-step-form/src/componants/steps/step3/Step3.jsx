import DesktopSideBar from "../../SideBar";
import TitleDescription from "../../TitleDescription";

import './step3Style.css'


function Step3({previousStep, nextStep}) {
  const  stepContent = {
    number: 3,
    title: "Pick add-ons",
    desc: "Add-ons help enhance your gaming experience.",
  }
  return (
    <>
      <DesktopSideBar currentStep={stepContent.number} />
      <div className="step-content">
        <div className="content-step-with-no-buttons">
          <TitleDescription stepContent={stepContent}/>
        </div>
        <div className="buttons-container">
          <button  onClick={previousStep}>back</button>
          <button onClick={nextStep}>next</button>
        </div>
      </div>
    </>
  );
}

export default Step3;