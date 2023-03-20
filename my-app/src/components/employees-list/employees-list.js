import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item
        //деструктуризация - вытащим ID отдельно, item  отдельно
        return (
            <EmployeesListItem key={id} {...itemProps}/>
            //это тоже самое что и
            //<EmployeesListItem name={item.name} salary={item.salary} increase={item.increase} key={}/>
        )
    })

    return (
        <ul className={'app-list list-group-flush'}>
            {elements}
        </ul>
    )
}

export default EmployeesList