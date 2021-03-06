// import React from "react";
import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(users => {
    //         this.setState({ robots: users})
    //     });
    //   }

      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
        // .then(users => {});
      }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    // render(){
    //     const filteredRobots = this.state.robots.filter(robots =>{
    //         return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    //     })
    //     return( 
    //         <div className='tc'>
    //             <h1 className='f2'>RoboFriends</h1>
    //             <SearchBox searchChange={this.onSearchChange}/>
    //             {/* <CardList robots={this.state.robots}/> */}
    //             <CardList robots={filteredRobots}/>
    //         </div>
    //     );
    // }

    render(){
        const { robots, searchfield } = this.state; // now this.state (destructuring) can be removed everywhere
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // if (robots.length === 0) {
        return !robots.length ?
        <h1>Loading... </h1> :
        ( 
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }

    // render(){
    //     const { robots, searchfield } = this.state; // now this.state (destructuring) can be removed everywhere
    //     const filteredRobots = robots.filter(robot =>{
    //         return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    //     })
    //     // if (robots.length === 0) {
    //     if (!robots.length) {
    //         return <h1>Loading... </h1>
    //     } else {
    //     return( 
    //         <div className='tc'>
    //             <h1 className='f2'>RoboFriends</h1>
    //             <SearchBox searchChange={this.onSearchChange}/>
    //             <Scroll>
    //                 <CardList robots={filteredRobots}/>
    //             </Scroll>
    //         </div>
    //         );
    //     }
    // }

} 

export default App; 