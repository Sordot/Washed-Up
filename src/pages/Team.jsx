import Card from "../components/Card";
import oneechan from '../assets/Oneechan.png'
import brainoff from '../assets/Brain.png'
import gargoyledeez from '../assets/Gargoyledeez.png'
import skonaz from '../assets/Skonaz.png'
import ubet from '../assets/Ubet.jpg'
import tamales from '../assets/Tamales.png'
import caribbean from '../assets/Caribbean.png'

const Team = () => {

    const guildRoster = [
        {id: 1, imgPath: oneechan, playerName: "Oneechan", role: "Guild Master", playerClass: "Paladin"},
        {id: 2, imgPath: brainoff, playerName: "Brainoff", role: "Raid Leader", playerClass: "Death Knight"},
        {id: 3, imgPath: gargoyledeez, playerName: "Gargoyledeez", role: "Loot Master", playerClass: "Death Knight"},
        {id: 4, imgPath: skonaz, playerName: "Skonaz", role: "Officer", playerClass: "Rogue"},
        {id: 5, imgPath: ubet, playerName: "Ubet", role: "Core Raider", playerClass: "Warlock"},
        {id: 6, imgPath: tamales, playerName: "Tamales", role: "Core Raider", playerClass: "Hunter"},
        {id: 7, imgPath: caribbean, playerName: "Caribbean", role: "Core Raider", playerClass: "Priest"},
    ]

    return <>
        <h1>Meet our Team!</h1>
        <div className="card-container">
            {guildRoster.map(player => {
                return <>
                    <Card
                        key={player.id}
                        imgPath={player.imgPath}
                        playerName={player.playerName}
                        playerRole={player.role}
                        playerClass={player.playerClass}
                    />
                </>
            })
            }
        </div>
    </>
}

export default Team;