import Contact from "./Contact";
import TopLeft from "./TopLeft";
import './LeftSide.css';

function LeftSide() {
    return (
        <div className="left-side">
            <div className="left-side-top">
                <TopLeft />
            </div>
            <div className="left-side-contacts">
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            </div>
        </div>


    )
}

export default LeftSide;