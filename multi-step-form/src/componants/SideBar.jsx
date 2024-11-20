import React, { useState, useEffect } from 'react';
import SideBarText from "./SideBarText";


function SideBar({ currentStep }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Function to update the state with the new window width
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Add event listener for resizing the window
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth > 768;
    const steps = [
        { number: 1, text: 'YOUR INFO' },
        { number: 2, text: 'SELECT PLAN' },
        { number: 3, text: 'ADD-ONS' },
        { number: 4, text: 'SUMMARY' },
    ];
    return (
        <>
            {
                isMobile ?
                    <div className="side-bar-desktop">
                        {steps.map((step) => (
                            <SideBarText desktop={true} key={step.number} currentStep={currentStep} number={step.number} text={step.text} />
                        ))}
                    </div>
                    :
                    <div className="side-bar-phone">
                        {steps.map((step) => (
                            <SideBarText desktop={false} key={step.number} currentStep={currentStep} number={step.number} text={step.text} />
                        ))}
                    </div>
            }
        </>
    );
}

export default SideBar;