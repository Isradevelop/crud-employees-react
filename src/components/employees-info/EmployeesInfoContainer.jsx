import PropTypes from 'prop-types';
import { EmployeesInfoCard } from "./EmployeesInfoCard"
import "./employees-info.css"
import Spinner from 'react-bootstrap/Spinner';
import { useContext } from 'react';
import { EmployeesContext } from '../../contexts/EmployeesContext';

export const EmployeesInfoContainer = ({ isLoading }) => {

    const { employeesContext } = useContext(EmployeesContext);

    return (
        <div className='employees-card-container'>
            {
                isLoading && <Spinner className="employees-container-spinner" animation="grow" variant="light" />
            }
            {
                employeesContext?.map((employee) => {
                    return (
                        <EmployeesInfoCard employee={employee} key={employee.email} />
                    )
                })
            }
        </div>
    )
}

EmployeesInfoContainer.propTypes = {
    employees: PropTypes.array,
    isLoading: PropTypes.bool
}
