import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { CardList } from './components/card-list/card-list.jsx';
import { SearchBox } from './components/search-box/search-box.jsx';
// import { render } from '@testing-library/react';

function App() {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(response => setMonsters(response.data));
	}, []);

	const filteredMonsters = monsters.filter(monster =>
		monster.name.toLowerCase().includes(searchField.toLowerCase())
	);
	return (
		<div className='App'>
			<h1 className='page-title'>Monsters Rolodex</h1>
			<SearchBox
				placeholder='Search Monsters'
				handleChange={e => setSearchField(e.target.value)}
			></SearchBox>
			{/* pass monster as prop from app */}
			<CardList monsters={filteredMonsters}></CardList>
		</div>
	);
}

export default App;
