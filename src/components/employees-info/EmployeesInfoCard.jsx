import { useState } from 'react';
import PropTypes from 'prop-types';
import { OffCanvasContent } from './OffCanvasContent';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const EmployeesInfoCard = ({ employee }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { email, name, picture, location, dob, gender } = employee;

    return (
        <Card className='employee-card' style={{ width: '18rem' }} key={email}>
            <Card.Img className='employee-card-img' variant="top" src={picture.thumbnail} />
            <Card.Body>
                <Card.Title>{name.first} {name.last}</Card.Title>
                <Card.Text>
                    <label>City: {location.city}</label><br />
                    <label>Country: {location.country}</label><br />
                    <label>Age: {dob.age}</label><br />
                    <label>Gender: {gender}</label>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                    Details
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title><h2 className='offcanvas-title'>{name.first} {name.last}</h2></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <OffCanvasContent employee={employee} />
                    </Offcanvas.Body>
                </Offcanvas>
            </Card.Body>
        </Card>
    )
}

EmployeesInfoCard.propTypes = {
    employee: PropTypes.object
}
