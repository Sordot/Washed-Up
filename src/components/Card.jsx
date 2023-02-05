import '../Card.css'

import brainoff from '../assets/Brain.png'
import caribbean from '../assets/Caribbean.png'
import gargoyledeez from '../assets/Gargoyledeez.png'
import oneechaan from '../assets/Oneechan.png'
import skonaz from '../assets/Skonaz.png'
import tamales from '../assets/Tamales.png'
import ubet from '../assets/Ubet.jpg'



const Card = () => {

    return <>
        <div className="card">

            <div className="front">
                <img className="player-img" src={brainoff} alt="" />
                <h3 className="player-name">Player Name</h3>
                <div className="player-summary">
                    <p className="guild-role">Guild Role</p>
                    <p className="player-class">Death Knight</p>
                </div>
            </div>

            <div className="back">
                <div className="player-stats">
                    <p className="player-stat">Stat 1<span>description</span></p>
                    <p className="player-stat">Stat 2<span>description</span></p>
                </div>
                <button className="btn">Goes to Logs</button>
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