import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        return (
            <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase}/>
            //это тоже самое что и
            //<EmployeesListItem {...item}/>
        )
    })

    return (
        <ul className={'app-list list-group-flush'}>
            {elements}
        </ul>
    )
}

export default EmployeesList