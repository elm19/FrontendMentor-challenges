
const Step3Card = ({title, desc, price}) => {
    return (
        <button className="step3-card-container s">
            <div className="check-title-container">
                <div>✔</div>
                <div className="title-desc">
                    <div className="step3-h">{title}</div>
                    <div className="step3-p">{desc}</div>
                </div>
            </div>
            <div>{price}</div>
        </button>
    )
}

export default Step3Card;