import Card from "../components/Card";
import oneechan from '../assets/Oneechan.png'
import brainoff from '../assets/Brain.png'
import gargoyledeez from '../assets/Gargoyledeez.png'
import skonaz from '../assets/Skonaz.png'
import ubet from '../assets/Ubet.jpg'
import tamales from '../assets/Tamales.png'
import caribbean from '../assets/Caribbean.png'
import hito from '../assets/Hito.jpg'
import ardonis from '../assets/Ardonis.jpg'
import dom from '../assets/Dom.png'
import garumn from '../assets/Garumn.png'
import scrotehorn from '../assets/Scrotehorn.png'

const Team = () => {

    const guildRoster = [
        {id: 1, imgPath: oneechan, playerName: "Oneechan", role: "Guild Master", playerClass: "Paladin"},
        {id: 2, imgPath: brainoff, playerName: "Brainoff", role: "Raid Leader", playerClass: "Death Knight"},
        {id: 3, imgPath: dom, playerName: "Dom", role: "Raid Leader", playerClass: "Druid"},
        {id: 4, imgPath: scrotehorn, playerName: "Scrotehorn", role: "Raid Leader", playerClass: "Druid"},
        {id: 5, imgPath: gargoyledeez, playerName: "Gargoyledeez", role: "Loot Master", playerClass: "Death Knight"},
        {id: 6, imgPath: skonaz, playerName: "Skonaz", role: "Officer", playerClass: "Rogue"},
        {id: 7, imgPath: garumn, playerName: "Garumn", role: "Officer", playerClass: "Shaman"},
        {id: 8, imgPath: ubet, playerName: "Ubet", role: "Core Raider", playerClass: "Warlock"},
        {id: 9, imgPath: tamales, playerName: "Tamales", role: "Core Raider", playerClass: "Hunter"},
        {id: 10, imgPath: caribbean, playerName: "Caribbean", role: "Core Raider", playerClass: "Priest"},
        {id: 11, imgPath: hito, playerName: "Hito", role: "Core Raider", playerClass: "Shaman"},
        {id: 12, imgPath: ardonis, playerName: "Ardonis", role: "Core Raider", playerClass: "Hunter"},
    ]

    return <>
        <h1>Meet our Team!</h1>
        <div className="team-container">
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
        </div>
    </>
}

export default Team;