
const YearMonthBar = ({isMonthly, changeYM}) => {
    return (
        <div className="year-month">
            <span>monthly</span>
            <button className="y-m-button" onClick={changeYM}>
                <div className="left-half-circle">
                    {isMonthly ? <div className="y-m-circle"></div> : ""}
                </div>
                <div className="right-half-circle">
                    {isMonthly ? "" : <div className="y-m-circle"></div>}
                </div>
            </button>
            <span>yearly</span>
        </div>
    )
}



export default YearMonthBar;