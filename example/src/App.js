import './App.css';
import React, { useEffect, useState } from 'react';
import kodok from 'kodok';

function App() {
	const [isTodos, setTodos] = useState([]);

	function getDataTodos() {
		const url = `https://jsonplaceholder.typicode.com/todos/`;

		kodok
			.get(url)
			.then((res) => {
				if (res.status === 200) {
					setTodos(res.data);
				}
			})
			.catch((err) => {
				if (err) {
					console.log(err);
				}
			});
	}

	useEffect(() => {
		getDataTodos();
	}, []);

	return (
		<div className='App'>
			<h3>Get All Todos</h3>

			{isTodos.map((todo, i) => {
				return (
					<p key={i}>
						{i + 1}. {todo.title}
					</p>
				);
			})}
		</div>
	);
}

export default App;
