import "../../styles/Quote.css";
import "animate.css";

function Quote() {
    return (
        <div className="quote-container">
            {/* <img className="animate__animated animate__fadeInUp" id="quote-top" src="/quotes.png" alt="" /> */}
            {/* <img className="animate__animated animate__fadeInUp" id="quote-bot" src="/quotes.png" alt="" /> */}
            <p className="animate__animated animate__fadeInUp">
                <span className="text-purple">Star Hack </span>
                is
                <span className="text-blue"> more </span>
                than
                <span className="text-purple"> just a </span><br />
                <span className="text-blue"> platform </span>
                – it's a
                <span className="text-purple"> community</span>
                . <br /> We carefully
                <span className="text-blue"> curate </span>
                <span className="text-purple"> hackathons </span>
                that <br />
                <span className="text-blue"> align </span>
                with our sponsors'
                <span className="text-purple"> values</span>
                , <br /> ensuring
                <span className="text-blue"> meaningful </span>
                <span className="text-purple"> partnerships </span> <br />
                that drive
                <span className="text-blue"> positive </span>
                <span className="text-purple"> change </span>
                within the <br />
                <span className="text-blue"> tech industry </span>
                and
                <span className="text-gradient"> beyond</span>.
            </p>
            <p className="author animate__animated animate__fadeInUp animate__delay-1s">
                -Shaan Yu <br />
                Co-Founder @ Star Hack
            </p>
        </div>
    );
}

export default Quote;
