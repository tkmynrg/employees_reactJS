import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
             data: [
                {name: 'Alex I.', salary :800, increase: false, id: 1},
                {name: 'Will S.', salary :3000, increase: true, id: 2},
                {name: 'Carl M.', salary :5000, increase: false, id: 3},
            ]
        }

        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            //
            // const before = data.slice(0, index);
            // //здесь берется чать
            // const after = data.slice(index + 1);
            // //и здесь берется часть
            // const newArr = [...before, ...after]
            // //синтаксисом es6 создаем новый массив

            return {
                data: data.filter(item => item.id !== id)
                //данные отфильтруются и останутся только те элементы, идентификатор которого из data изначального  не совадает с тем id, который к нам пришел из deleteItem
            }

        })
    }

    // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className={'App'}>
                <AppInfo></AppInfo>

                <div className={'search-filter'}>
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;