import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { EmployeesContext } from '../../contexts/EmployeesContext';

export const OffCanvasContent = ({ employee }) => {

    const { employeesContext, setEmployeesContext } = useContext(EmployeesContext);

    const [edit, setEdit] = useState(false);
    const { gender, location, email, phone, cell, registered, dob } = employee;

    const dobDate = new Date(dob.date).getDate();
    const dobMonth = new Date(dob.date).getMonth();
    const dobYear = new Date(dob.date).getFullYear();
    const registerDate = new Date(registered.date).getDate();
    const registerMonth = new Date(registered.date).getMonth();
    const registerYear = new Date(registered.date).getFullYear();

    const changeMode = (mode) => {
        setEdit(mode);
    }

    const saveInfo = (ev) => {
        ev.preventDefault();
        if (ev.target.gender.value != '') employee.gender = ev.target.gender.value
        if (ev.target.email.value != '') employee.email = ev.target.email.value
        if (ev.target.phone.value != '') employee.phone = ev.target.phone.value
        if (ev.target.cell.value != '') employee.cell = ev.target.cell.value
        if (ev.target.country.value != '') employee.location.country = ev.target.country.value
        if (ev.target.city.value != '') employee.location.city = ev.target.city.value
        if (ev.target.street.value != '') employee.location.street.name = ev.target.street.value

        setEmployeesContext([...employeesContext])
        setEdit(!edit)
    }

    return (
        <>
            {
                !edit
                    ? (
                        <ListGroup variant="flush">
                            <ListGroup.Item><b>Gender: </b>{gender}</ListGroup.Item>
                            <ListGroup.Item><b>Age: </b>{dob.age}</ListGroup.Item>
                            <ListGroup.Item><b>Bird of date: </b>{`${dobYear}-${dobMonth}-${dobDate}`}</ListGroup.Item>
                            <ListGroup.Item><b>Email: </b>{email}</ListGroup.Item>
                            <ListGroup.Item><b>Phone: </b>{phone}</ListGroup.Item>
                            <ListGroup.Item><b>Cell: </b>{cell}</ListGroup.Item>
                            <ListGroup.Item><b>Country: </b>{location.country}</ListGroup.Item>
                            <ListGroup.Item><b>City: </b>{location.city}</ListGroup.Item>
                            <ListGroup.Item><b>Street: </b>{location.street.name}</ListGroup.Item>
                            <ListGroup.Item><b>Registered: </b>{`${registerYear}-${registerMonth}-${registerDate}`}</ListGroup.Item>
                            <br />
                            <Button variant="danger" onClick={() => changeMode(!edit)}>Edit</Button>
                        </ListGroup>
                    )
                    : (
                        <ListGroup variant="flush">
                            <Form onSubmit={saveInfo}>
                                <ListGroup.Item><Form.Control type="text" placeholder={`Gender: ${gender}`} name="gender" /></ListGroup.Item>
                                <ListGroup.Item><b>Age: </b>{dob.age}</ListGroup.Item>
                                <ListGroup.Item><b>Bird of date: </b>{`${dobYear}-${dobMonth}-${dobDate}`}</ListGroup.Item>
                                <ListGroup.Item><Form.Control type="email" placeholder={`Email: ${email}`} name="email" /></ListGroup.Item>
                                <ListGroup.Item><Form.Control type="text" placeholder={`Phone: ${phone}`} name="phone" /></ListGroup.Item>
                                <ListGroup.Item><Form.Control type="text" placeholder={`Cell: ${cell}`} name="cell" /></ListGroup.Item>
                                <ListGroup.Item><Form.Control type="text" placeholder={`Country: ${location.country}`} name="country" /></ListGroup.Item>
                                <ListGroup.Item><Form.Control type="text" placeholder={`City: ${location.city}`} name="city" /></ListGroup.Item>
                                <ListGroup.Item><Form.Control type="text" placeholder={`Street: ${location.street.name}`} name="street" /></ListGroup.Item>
                                <ListGroup.Item><b>Registered: </b>{`${registerYear}-${registerMonth}-${registerDate}`}</ListGroup.Item>
                                <br />
                                <Button className='submit-button' variant="warning" type='submit'>Save</Button>
                            </Form>
                        </ListGroup>

                    )
            }
        </>
    )
}

OffCanvasContent.propTypes = {
    employee: PropTypes.object
}