import { NavLink } from 'react-router-dom'
import yogg from '../assets/yogg.png'
import sarth from '../assets/Sarth10.jpg'
import kt from '../assets/kt.jpg'
import simian from '../assets/simian.png'
import '../Home.css'


const Home = () => {
    return <>
        <img className="banner" src={yogg} alt="yogg" />
        <div className="lead-text">
            <h1>Our Misson: <span id="lich-king">Defeat the Lich King</span></h1>
        </div>
        <div className="home-container">
            <img className="home-image" src={kt} alt="KT" />
            <div className="home-text">
                <h2 className='subheading'>Join our Guild</h2>
                <ul className="copy-list">
                    <li className="subheading-copy">Washed Up is a semi-casual raiding guild focused on progression and ensuring all of our raiders get their fair share of the loot!</li>
                    <li className="subheading-copy">We provide free consumables, enchantments, gems to all raiders who join us as core members of the guild!</li>
                    <li className="subheading-copy">We offer recruitment bonuses to members who find new friends to join our ranks!</li>
                </ul>
                <div className="cta-wrapper">
                    <NavLink className="btn cta" to="/apply">Apply</NavLink>
                </div>
            </div>
            <img className="home-image" src={sarth} alt="Sartharion" />
            <div className="home-text">
                <h2 className='subheading'>Raid Times</h2>
                <p className='subheading-copy schedule'>8 to 11pm Eastern</p>
                <p className="subheading-copy schedule">Tuesday | Wednesday | Thursday</p>
            </div>
            <img className="home-image" src={simian} alt="Super Simian Sphere" />
            <div className="home-text">
                <h2 className='subheading'>Loot Rules</h2>
                <ul className="copy-list">
                    <li className="subheading-copy">2 Soft Reserves per player</li>
                    <li className="subheading-copy">Main Spec &gt; Off Spec</li>
                    <li className="subheading-copy">+1 System: Main Spec, Off Spec, Tier</li>
                    <li className="subheading-copy">Open Roll: Tier Tokens, Vanity Items, Quest Items, Mounts</li>
                    <li className="subheading-copy">BoE Loot is Main Spec &gt; Auction</li>
                </ul>
            </div>
        </div>
    </>
}

export default Home;