import DesktopSideBar from "../../SideBar";
import TitleDescription from "../../TitleDescription";
import './step4Style.css'

function Step4({previousStep}) {
  const  stepContent = {
    number: 4,
    title: "Finishing up",
    desc: "Double check everything looks OK before confirming",
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
        </div>
      </div>
    </>
  );
}

export default Step4;