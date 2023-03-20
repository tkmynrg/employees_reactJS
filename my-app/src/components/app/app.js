import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';


function App () {

    const data = [
        {name: 'Alex I.', salary :800, increase: true},
        {name: 'Will S.', salary :3000, increase: true},
        {name: 'Carl M.', salary :5000, increase: false},
    ]

    return (
      <div className={'App'}>
          <AppInfo></AppInfo>

          <div className={'search-filter'}>
            <SearchPanel/>
             <AppFilter/>
          </div>

          <EmployeesList data={data}/>
          <EmployeesAddForm/>
      </div>
    );
}

export default App;