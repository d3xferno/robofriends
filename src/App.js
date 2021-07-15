import React, { Component } from 'react'
import Cardlist from './Cardlist';
import { robots } from './robots';
import Searchbox from './Searchbox';
import Scroll from './Scroll';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        this.setState({robots:robots});
    }

    onsearchchange = (event) =>{
        this.setState({searchfield:event.target.value})
    }
    
    render(){
        const filterrobo = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
        <div className='tc'>
        <h1 className='f1'>ROBOFRIENDS</h1>
        <Searchbox searchchange = {this.onsearchchange}/>
        <Scroll>
        <Cardlist robots={filterrobo}/>
        </Scroll>
        </div>
    );
    }
}

export default App;