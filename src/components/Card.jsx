import '../Card.css'

const Card = ({imgPath, playerName, playerRole, playerClass}) => {

    return <>
        <div className="card">
            <img className="player-img" src={imgPath} alt="" />
            <h3 className="player-name">{playerName}</h3>
            <div className="player-summary">
                <p className="guild-role">{playerRole}</p>
                <p className="player-class">{playerClass}</p>
            </div>
            <button className="btn"><a href={`https://classic.warcraftlogs.com/character/US/Ashkandi/${playerName}`}>Warcraftlogs!</a></button>
        </div>
    </>

}

export default Card;