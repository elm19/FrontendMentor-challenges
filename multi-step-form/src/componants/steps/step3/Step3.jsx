import DesktopSideBar from "../../SideBar";
import TitleDescription from "../../TitleDescription";
import Step3Card from "./Step3Card";

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
          < Step3Card 
            title={"Online Service"} 
            desc={"description"} 
            price={"$9/mo"} 
          />
        </div>
        <div className="buttons-container">
          <button className= "back-button" onClick={previousStep}>Go Back</button>
          <button className="button-next" onClick={nextStep}>Next Step</button>
        </div>
      </div>
    </>
  );
}

export default Step3;