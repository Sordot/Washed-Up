import '../Card.css'

const Card = ({imgPath, playerName, playerRole, playerClass}) => {

    return <>
        <div className="card">
            <img className="player-img" src={imgPath} alt="Player" />
            <div className='player-header'>
                <h3 className="player-name">{playerName}</h3>
                <a href={`https://classic.warcraftlogs.com/character/US/Ashkandi/${playerName}`} target='blank'>
                    <img className='warcraftlogs-logo'
                        src="https://assets.rpglogs.com/img/warcraft/favicon.png?v=2" 
                        alt="Warcraft Logs Logo" />
                </a>
            </div>
            <div className="player-summary">
                <p className="guild-role">{playerRole}</p>
                <p className="player-class">{playerClass}</p>
            </div>
        </div>
    </>

}

export default Card;