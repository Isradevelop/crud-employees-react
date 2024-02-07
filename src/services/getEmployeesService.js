
export const getEmployeesService = async () => {

    const res = await fetch('https://randomuser.me/api/?results=50');
    const employees = await res.json();

    return employees.results;
}
