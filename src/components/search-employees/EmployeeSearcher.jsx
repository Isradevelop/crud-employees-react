import { useContext } from 'react';
import PropTypes from 'prop-types';
import { EmployeesContext } from '../../contexts/EmployeesContext';
import "./employees-searcher.css"
import Form from 'react-bootstrap/Form';

export const EmployeeSearcher = () => {

    const { employeesContext, setEmployeesContext, employeesContextStorage } = useContext(EmployeesContext);

    const searchEmployee = (ev) => {
        const wordToSearch = ev.target.value;

        if (wordToSearch.length > 2) {
            const empoyeesFiltered = employeesContext.filter(({ name }) => {
                const lowerFirstName = name.first.toLowerCase();
                const lowerLastName = name.last.toLowerCase();
                return lowerFirstName.includes(wordToSearch.toLowerCase()) || lowerLastName.includes(wordToSearch.toLowerCase())
            });
            setEmployeesContext(empoyeesFiltered);
        } else {
            setEmployeesContext(employeesContextStorage);
        }
    }

    return (
        <Form.Control
            type="text"
            className='searcher'
            placeholder='Insert name...'
            onChange={searchEmployee}
        />
    )
}

EmployeeSearcher.propTypes = {
    employees: PropTypes.array,
    setEmployees: PropTypes.func
}
