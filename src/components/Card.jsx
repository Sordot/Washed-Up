import '../Card.css'

const Card = ({imgPath, playerName, playerRole, playerClass}) => {

    return <>
        <div className="card">

            <div className="front">
                <img className="player-img" src={imgPath} alt="" />
                <h3 className="player-name">{playerName}</h3>
                <div className="player-summary">
                    <p className="guild-role">{playerRole}</p>
                    <p className="player-class">{playerClass}</p>
                </div>
            </div>

            <div className="back">
                <div className="player-stats">
                    <p className="player-stat">Stat 1<span>description</span></p>
                    <p className="player-stat">Stat 2<span>description</span></p>
                </div>
                <button className="btn"><a href={`https://classic.warcraftlogs.com/character/US/Ashkandi/${playerName}`}>Warcraftlogs!</a></button>
                <div className="parses">
                    <div className="parse">
                        <p className="parse-amount">Parse 1</p>
                        <p className="boss-name">Boss 1</p>
                    </div>
                    <div className="parse">
                        <p className="parse-amount">Parse 2</p>
                        <p className="boss-name">Boss 2</p>
                    </div>
                    <div className="parse">
                        <p className="parse-amount">Parse 3</p>
                        <p className="boss-name">Boss 3</p>
                    </div>
                </div>
            </div>

            <div className="background"></div>
        </div>
    </>

}

export default Card;