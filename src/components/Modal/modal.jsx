import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function AppModal (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const user = props?.user ? props?.user : {};

    useEffect(()=>{
        if (props?.state > 0)
        {
            setShow(true);
        }
    }, [props?.state]);

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>User Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        Object?.keys(user)?.length > 0 &&
                        <>
                            <div className="app__img">
                                <img src={user?.picture?.large} alt={user?.name?.first} />
                            </div>
                            <p>Email: <a href={`mailto: ${user?.email}`}>{user?.email}</a></p>
                            <p>Phone: {user?.phone}</p>
                            <p className="mb-0">Cell: {user?.cell}</p>
                        </>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}