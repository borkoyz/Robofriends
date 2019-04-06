import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'
import ToggleButton from './ToggleButton'
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry.js'
import {setSearchField} from './Actions'


const mapStateToProps = state =>{
	return{
		searchField: state.searchField
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}


class App extends Component{
	constructor(){
		super(); 
		this.state = {
			dataToggle:true,
			robots:[],
		};
	}

	componentDidMount(){
		this.changeDataView(this.state.dataToggle);
	}

	// onSearchChange = (event)=> {
	// 	this.setState({searchfield:event.target.value});
	// };
	onCheckData = ()=>{
		const toggleState = this.state.dataToggle
		this.setState({dataToggle:  !toggleState});
		this.changeDataView(!toggleState);
	};
	changeDataView = (s)=>{
		if(!s){
			this.setState({robots: robots});
		}else{
			fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(users=>this.setState({robots: users}));
		}
	};
	render(){
		const {robots, dataToggle} = this.state;
		const {searchField, onSearchChange} = this.props;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return !robots.length ?
			<h1> Loading </h1> :
			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<ToggleButton dataFn ={this.onCheckData} dataView={dataToggle}/>
					<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots }/>
					</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
};

export default connect(mapStateToProps,mapDispatchToProps)(App);