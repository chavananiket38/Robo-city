import React from "react";
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from '../components/Scroll'

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            searchField: "",
            robots: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        })
    return(
        <div className="tc">
            <h1 className="ma5 f1">Robo-City</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filterRobots}/>
            </Scroll>
        </div>
    );
    }
}

export default App;