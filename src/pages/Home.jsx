import yogg from '../assets/yogg.png'
import sarth from '../assets/Sarth10.jpg'
import kt from '../assets/kt.jpg'
import simian from '../assets/simian.png'
import '../Home.css'

const Home = () => {
    return <>
        <div className="home-container">
            <img className="home-image"src={yogg} alt="Yogg-Saron" />
            <div className="home-text">
                <h2>Our Misson: Defeat the Lich King</h2>
                <p>Here is some more sample text</p>
            </div>
            <img className="home-image" src={sarth} alt="Sartharion" />
            <div className="home-text">
                <h2>Our Misson: Defeat the Lich King</h2>
                <p>Here is some more sample text</p>
            </div>
            <img className="home-image" src={kt} alt="Sartharion" />
            <div className="home-text">
                <h2>Our Misson: Defeat the Lich King</h2>
                <p>Here is some more sample text</p>
            </div>
            <img className="home-image" src={simian} alt="Sartharion" />
            <div className="home-text">
                <h2>Our Misson: Defeat the Lich King</h2>
                <p>Here is some more sample text</p>
            </div>
        </div>
    </>
}

export default Home;