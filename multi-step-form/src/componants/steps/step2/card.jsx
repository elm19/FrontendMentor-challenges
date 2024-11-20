
const Card = ({myIcon, cardTitle, desc, selected, selectPlan, isMonthly}) => {
    const cardClass = selected ? "card-container card-selected":"card-container"
    const descContainer = isMonthly ? "desc-container" : "desc-container yearly";
    return (
        <button className={cardClass} onClick={selectPlan}>
            <img src={myIcon} alt="My Icon" />
            <div className={descContainer}>
                <div className="card-title">{cardTitle}</div>
                <p className="card-p">{desc}</p>
                {isMonthly ? "" : <p className="card-fr">2 months free</p>}
            </div>
            
        </button>
    )
}



export default Card;