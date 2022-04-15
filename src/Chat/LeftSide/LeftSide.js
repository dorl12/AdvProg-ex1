import Contact from "./Contact";
import TopLeft from "./TopLeft";
import './LeftSide.css';
import { ListGroup } from "react-bootstrap";
import { contacts } from '../hooks/Storage.js'

function LeftSide(props) {

    // var contacts = [
    //     {id : 0, name : 'Hadar Pinto', img : 'person2.jpg', displayName : 'Hadar Pinto', status : 'Hey! I\'m using ChatBOX'},
    //     {id : 1, name : 'Hadaros Pintomos', img : 'person3.jpeg', displayName : 'Hadaros Pintomos', status : 'Heyos Muchachos'},
    //     {id : 2,name : 'Katz Vegarjuba', img : 'person4.png', displayName : 'Katz Vegarjuba', status : 'YOLO'},
    //     {id : 3,name : 'Dark Bianca', img : 'person5.jpg', displayName : 'Dark Bianca', status : 'Be careful what you wish for'},
    //     {id : 4,name : 'Shimi Hey', img : 'person6.webp', displayName : 'Shimi Hey', status : 'Swalala'},
    //     {id : 5,name : 'Linda', img : 'person7.jpeg', displayName : 'Linda', status : 'I\'m high as fuck'}
    // ];

    const contactList = contacts.map((contact, key) => {
        return <Contact {...contact} key={key} choose={props.choose} setTop={props.setTop} />
    });

    return (
        <div className="left-side">
            <div className="left-side-top">
                <TopLeft />
            </div>
            <div className="left-side-contacts">

            <ListGroup variant='flush'>
            {contactList}
            </ListGroup>
                

            </div>
        </div>


    )
}

export default LeftSide;