import React from 'react';
import './Attach.css';
import { useState } from 'react';
import { ButtonGroup, ButtonToolbar, OverlayTrigger } from 'react-bootstrap'
import { Popover } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

function Attach(props) {
    //time
    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }
    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let messageTime = h + ":" + m;
    //text message

    const [showImg, setShowImg] = useState(false);
    const [showVid, setShowVid] = useState(false);
    const [showAud, setShowAud] = useState(false);

    const handleCloseImg = () => setShowImg(false);
    const handleShowImg = () => setShowImg(true);

    const handleCloseVid = () => setShowVid(false);
    const handleShowVid = () => setShowVid(true);

    const handleCloseAud = () => setShowAud(false);
    const handleShowAud = () => setShowAud(true);

    var inputVal = ''
    function getInputValue() {
        inputVal = document.getElementById("myInput").value;
    }

    function sendMsg() {
        getInputValue();
        if (inputVal == '') {
            return;
        }
        var newChat = props.log;

        newChat.push({ side: true, type: 'text', contain: inputVal, time: messageTime })

        props.setLog(newChat);
        // to render chatbox outside
        if (props.bool === false) {
            props.setbool(true)
        }
        else {
            props.setbool(false)
        }
        document.getElementById("myInput").value = '';
    }

    // sending by click or enter
    function handleClick() {
        sendMsg();
    }

    const handleKey = (e) => {
        if (e.key === "Enter") {
            sendMsg();
        }
    }

    const uploadPic = (e) => {
        let source = URL.createObjectURL(e.target.files[0]);
        handleCloseImg();
        var newChat = props.log;
        newChat.push({ side: true, type: 'imageMsg', contain: source, time: messageTime })
        props.setLog(newChat);
        if (props.bool === false) {
            props.setbool(true)
        }
        else {
            props.setbool(false)
        }
    }

    const uploadVideo = (e) => {
        let source = URL.createObjectURL(e.target.files[0]);
        handleCloseVid();
        var newChat = props.log;
        newChat.push({ side: true, type: 'videoMsg', contain: source, time: messageTime })
        props.setLog(newChat);
        if (props.bool === false) {
            props.setbool(true)
        }
        else {
            props.setbool(false)
        }
    }

    return (
        <div className='input-wrapper'>
            <div className="input-group mb-3 dropup">
                <OverlayTrigger
                    trigger="click"
                    overlay={
                        <Popover id={`popover-positioned-top`}>
                            <Popover.Header as="h3">{`Popover top`}</Popover.Header>
                            <Popover.Body>
                                <strong>
                                    <ButtonToolbar>
                                        <ButtonGroup>
                                            <Button variant="primary" onClick={handleShowImg}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                                </svg>
                                            </Button>
                                            <Modal show={showImg} onHide={handleCloseImg}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Modal heading</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <input type="file" onChange={uploadPic}></input>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleCloseImg}>
                                                        Close
                                                    </Button>
                                                    <Button type="file" variant="primary">
                                                        Save Changes
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                            <Button variant="primary" onClick={handleShowVid}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16">
                                                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                                                    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                                                    <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                                </svg>
                                            </Button>
                                            <Modal show={showVid} onHide={handleCloseVid}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Modal heading</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form.Group controlId="formFile" className="mb-3">
                                                        <Form.Label>Default file input example</Form.Label>
                                                        <Form.Control type="file" onChange={uploadVideo} />
                                                    </Form.Group>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleCloseVid}>
                                                        Close
                                                    </Button>
                                                    <Button variant="primary">
                                                        Save Changes
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                            <Button variant="primary" onClick={handleShowAud}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
                                                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                                    <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                                                </svg>
                                            </Button>
                                            <Modal show={showAud} onHide={handleCloseAud}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Modal heading</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form.Group controlId="formFile" className="mb-3">
                                                        <Form.Label>Default file input example</Form.Label>
                                                        <Form.Control type="file" onChange='' />
                                                    </Form.Group>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleCloseAud}>
                                                        Close
                                                    </Button>
                                                    <Button variant="primary">
                                                        Save Changes
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </strong>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <button className="btn btn-outline-secondary"
                        type="button" id="button-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"></path>
                        </svg>
                    </button>
                </OverlayTrigger>
                <input type="text" className="form-control" placeholder="Enter Message"
                    onKeyDown={handleKey}
                    id='myInput'
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"></input>
                <div className='icon-send'
                    onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default Attach;