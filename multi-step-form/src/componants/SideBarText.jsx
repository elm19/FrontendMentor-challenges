function SideBarText({number, text, currentStep, desktop}) {
    let classname = "numberText";
    if(currentStep === number){
        classname += " colored"; 
    }
    return (
        desktop ?
        <div className="sidebar-text-container">
            <div className={classname} >{number}</div>
            <div className="step-text">
                {`STEP ${number}`} 
                <span>
                    {text}
                </span>
            </div>
        </div>
        :
        <div className={classname} >{number}</div>
    );
}

export default SideBarText;
