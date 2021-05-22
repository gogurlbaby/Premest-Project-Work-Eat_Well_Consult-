import Navbar from "./navbar"
import Button from "../components/button"
import {Link} from "react-router-dom"
import dietitian  from '../image/dietitian.jpg'
import exercise from "../image/exercise.jpg"
import delivery from "../image/food-delivery.png"


function LandingPage() {

    // const history = useHistory()

    // const gotosignup = (e) => {
    //     e.preventDefault();
    //     history.push("/signup")
    // }


    return (

        <div className="landing">
            <Navbar />
            <div className="mini-landing">
                <h1 className="healthy">Healthy Inside,
                 <br /> Fresh Outside</h1>
                <br />
                <p>Today, more than 95% of all chronic disease is caused by
                food choice, toxic food ingredients,
                <br /> nutritional deficiences and lack of physical exercise. With good guidance from professional dietitians its possible to live healthy and live longer!
                <br />Don't waste much time!!!</p>
                <Link href="#landing-services"><Button text="Learn More" classname="landing-button"/></Link>
            </div> 
            <div className="services"><h1 >Services</h1></div>

            <div id="landing-services">
               <div className="consultation">
                    <h2 className="consult">Consultation With Dietitan</h2>
                    <img className="dietitian" src={dietitian} alt="A happy dietitian  counselling a client" />
                    <p className="premium">Get premium consultation from the best and professional dietitans in the world.</p>
                </div>
                <div className="fitness">
                    <h2>Fitness Exercises</h2>
                    <img className="exercise" src={exercise} alt="People of different ages exercising" />
                    <p className="best">The best investment you can ever make is your own health. 
                    <br/>Get the best exercises to help you get in shape.</p>
                </div>
                <div className="delivery">
                    <h2 className="food">Healthy Food Delivery</h2>
                    <img className="food-delivery" src={delivery} alt="Package of healthy food delivery" />
                    <p className="request">Request for healthy meals to be delivered right at your doorstep.</p>
                </div>
            </div>
           <div>
           <footer className="footer">© 2021. All Rights Reserved | Powered by gogurlbaby.com</footer>
            {/* <div>
           <div className="footer-eatwell">Eat Well Consult<br/><br/>Feel Good!!<br/> <br/>Live Longer!!!</div>
             <div className="footer-contact">
                       Contact<br/><br/>
                       Tel: +233 261582404<br/><br/>
                       Mail: philiahammmond@gmail.com
                     </div>  */}
              {/* <div className="mini-footer"></div> */}
        {/* </div> */}

        </div>
        </div>
        
    );
}

export default LandingPage;