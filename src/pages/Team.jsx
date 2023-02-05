import Card from "../components/Card";

const Team = () => {

    const guildRoster = [
        {name: "Oneechan", role: "Guild Master", class: "Paladin"},
        {name: "Brainoff", role: "Raid Leader", class: "Death Knight"},
        {name: "Gargoyledeez", role: "Loot Master", class: "Death Knight"},
        {name: "Skonaz", role: "Officer", class: "Rogue"},
        {name: "Ubet", role: "Core Raider", class: "Warlock"},
        {name: "Tamales", role: "Core Raider", class: "Hunter"},
        {name: "Caribbean", role: "Core Raider", class: "Priest"},
    ]

    return <>
        <h1>Meet our Team!</h1>
        <Card />
    </>

}

export default Team;