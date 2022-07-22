import "./index.css"

const StaticImageCard = ({dataSrc, textContent, titleContent}) => {
    return(
        <div className="StaticImageCard">
            <img src={dataSrc} alt="null" />
            <div className="StaticImageCard__TextContainer">
                <h2>{titleContent}</h2>
                <p>{textContent}</p>
            </div>
        </div>
    )
}

export default StaticImageCard;