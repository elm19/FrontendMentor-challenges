
const Card = ({myIcon, cardTitle, desc, selected, selectPlan}) => {
    const cardClass = selected ? "card-container card-selected":"card-container"
    return (
        <button className={cardClass} onClick={selectPlan}>
            <img src={myIcon} alt="My Icon" />
            <div className="desc-container">
                <div className="card-title">{cardTitle}</div>
                <p className="card-p">${desc}/mo</p>
            </div>
            
        </button>
    )
}



export default Card;