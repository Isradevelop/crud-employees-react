import { useContext, useEffect, useState } from 'react'
import { EmployeesInfoContainer } from './components/employees-info/EmployeesInfoContainer';
import { EmployeeSearcher } from './components/search-employees/EmployeeSearcher';
import { EmployeesContext } from './contexts/EmployeesContext';
import { getEmployeesService } from './services/getEmployeesService';
import './App.css'

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const { setEmployeesContext, setEmployeesContextStorage } = useContext(EmployeesContext);

  useEffect(() => {
    const getEmployees = async () => {
      const employees = await getEmployeesService();
      setEmployeesContext(employees);
      setEmployeesContextStorage(employees);
      setIsLoading(false);
    }

    getEmployees();
  }, [])

  return (
    <>
      <h1 className='text-center'>My Crud</h1>
      <EmployeeSearcher />
      <EmployeesInfoContainer isLoading={isLoading} />
    </>
  )
}

export default App
