import DesktopSideBar from "../../SideBar";
import TitleDescription from "../../TitleDescription";
import Card from "./card";
import YearMonthBar from "./YearMonthBar";
import arcade from './assets/icon-arcade.svg'; 
import pro from './assets/icon-pro.svg'
import advanced from './assets/icon-advanced.svg'
import { useState } from "react";
import './step2Style.css'

function Step2({previousStep, nextStep}) {
  const  stepContent = {
    number: 2,
    title: "Select you plan",
    desc: "You have the option of monthly or yearly billing.",
  }
  const [selected, setSelected] = useState(1);
  const [isMonthly, setisMonthly] = useState(true);
  
  return (
    <>
      <DesktopSideBar currentStep={stepContent.number} />
      <div className="step-content">
        <div className="content-step-with-no-buttons">
          <TitleDescription stepContent={stepContent}/>
          <div className="cards-container">
            < Card 
              myIcon={arcade} 
              cardTitle={"Arcade"} 
              desc={isMonthly? "$9/mo": "$90/yr"} 
              selected={selected === 1} 
              selectPlan={() => setSelected(1)}
              isMonthly={isMonthly}
            />

            < Card 
              myIcon={pro} 
              cardTitle={"Pro"} 
              desc={isMonthly? "$12/mo": "$120/yr"} 
              selected={selected === 2}
              selectPlan={() => setSelected(2)}
              isMonthly={isMonthly}
            />
            < Card 
              myIcon={advanced} 
              cardTitle={"Advanced"} 
              desc={isMonthly? "$15/mo": "$150/yr"}
              selected={selected === 3}
              selectPlan={() => setSelected(3)}
              isMonthly={isMonthly}
            />
          </div>
          < YearMonthBar isMonthly={isMonthly} changeYM={() => setisMonthly(!isMonthly)}/>
        </div>
        <div className="buttons-container">
          <button className= "back-button" onClick={previousStep}>Go Back</button>
          <button className="button-next" onClick={nextStep}>Next Step</button>
        </div>
        
      </div>
    </>
  );
}

export default Step2;