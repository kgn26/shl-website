import "../../styles/How.css";
import "animate.css";

function How() {
    return (
        <div className="how-container">
            <h1 className="title">Here's <span className="how-text-gradient">&nbsp;How</span></h1>
            <div className="card-container">
                <div className="how-card tilt-left card-top animate__animated animate__fadeInUp animate__delay-2s">
                    <h2 className="sub-title how-text-gradient">Connect:</h2>
                    <p className="card-text">We <span className="how-text-purple">cultivate </span> a <br /> <span className="how-text-blue">vibrant network </span> of <span className="how-text-purple">innovators</span>,<br /> <span className="how-text-blue">mentors</span>, and <br /> <span className="how-text-purple">industry leaders</span>, creating <br /> <span className="how-text-blue">opportunities </span> for <br /> <span className="how-content-gradient">meaningful</span> <br /> <span className="how-content-gradient">exchange and</span> <br /> <span className="how-content-gradient">growth</span>.</p>
                </div>
                <div className="how-card tilt-right card-mid animate__animated animate__fadeInUp animate__delay-1s">
                    <h2 className="sub-title how-text-gradient">Event:</h2>
                    <p className="card-text">We strive to Advance Education through Tailored Events that Foster Curiosity, <br /> Critical Thinking, and <br /> Skill Development Beyond Traditional Academics.</p>
                </div>
                <div className="how-card tilt-left card-bot animate__animated animate__fadeInUp">
                    <h2 className="sub-title how-text-gradient">Support:</h2>
                    <p className="card-text">We Empower Event Organizers by providing Personalized Support, fostering Invaluable Experiences, incentivizing <br /> Sustainable and Futuristic Development, and Paving the Way to a Better Future.</p>
                </div>
            </div>
        </div>
    );
}

export default How;
