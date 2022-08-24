import { render } from "@testing-library/react";
import React,  { Component } from "react";
import CardList from "../Components/CardList";
// import { robots } from "./robots";
import Searchbox from "../Components//SearchBox";
import './App.css';
import Scroll from '../Components/Scroll.js';
import ErrorBoundary from '../Components/ErrorBoundry.js'


class App extends Component {
// const App = () => {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ robots: users})
        );
    }

    onSearchChange = (event)  => {
        this.setState({ searchfield: event.target.value})

    }

    render() {
        // const {robots, searchfield }  = this.state --this.state can be deconstructed to have a cleaner code
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length===0) {
            return <h1>Loading...</h1> // I can see it for a fraction of a second when I refresh the page
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = {filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        } 
    }
}

export default App;



// const state = {
    //     robots: robots,
    //     searchfield: ''
    // }