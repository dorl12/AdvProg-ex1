import './Contact.css';

function Contact() {
    return (
        <div className="friend-drawer">
            <span> <img className="profile-image" src={'person2.jpg'} alt=""></img></span>
            <span>
                <div className="text">
                    <h6>Hadar Pinto</h6>
                    <p className="text-muted">Hey, I'm using ChatBOX!</p>
                </div>
            </span>

            <span className="time text-muted small">13:21</span>
        </div>
    )
}

export default Contact;