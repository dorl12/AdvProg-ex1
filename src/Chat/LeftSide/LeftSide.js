import Contact from "./Contact";
import TopLeft from "./TopLeft";
import './LeftSide.css';

function LeftSide() {

    var contacts = [
        {img : 'person2.jpg', displayName : 'Hadar Pinto', status : 'Hey! I\'m using ChatBOX'},
        {img : 'person3.jpeg', displayName : 'Hadaros Pintomos', status : 'Heyos Muchachos'},
        {img : 'person4.png', displayName : 'Katz Vegarjuba', status : 'YOLO'},
        {img : 'person5.jpg', displayName : 'Dark Bianca', status : 'Be careful what you wish for'},
        {img : 'person6.webp', displayName : 'Shimi Hey', status : 'Swalala'},
        {img : 'person7.jpeg', displayName : 'Linda', status : 'I\'m high as fuck'}
    
    ];

    const contactList = contacts.map((contact, key) => {
        return <Contact {...contact} key={key} />
    });

    return (
        <div className="left-side">
            <div className="left-side-top">
                <TopLeft />
            </div>
            <div className="left-side-contacts">
                {contactList}

            </div>
        </div>


    )
}

export default LeftSide;