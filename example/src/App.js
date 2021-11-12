import './App.css';
import React, { useEffect, useState } from 'react';
import kodok from '../src/dist';

function App() {
	const [isTodos, setTodos] = useState([]);

	function sendData() {
		const url = `${process.env.END_POINT}/login`;

		const payload = {
			token: 'your_token',
			post_id: '123',
		};

		kodok
			.post(url, payload)
			.then((res) => {
				if (res.status === 200) {
					console.log(res);
				}
			})
			.catch((err) => {
				if (err) {
					console.log(err);
				}
			});
	}

	function deleteData() {
		const url = `${process.env.END_POINT}/post/delete`;

		const payload = {
			token: 'your_token',
			post_id: '123',
		};

		kodok
			.delete(url, payload)
			.then((res) => {
				if (res.status === 200) {
					console.log(res);
				}
			})
			.catch((err) => {
				if (err) {
					console.log(err);
				}
			});
	}

	function editData() {
		const url = `${process.env.END_POINT}/post/edit`;

		const payload = {
			token: 'your_token',
			post_id: '123',
			title: 'Eh sang kodok',
		};

		kodok
			.put(url, payload)
			.then((res) => {
				if (res.status === 200) {
					console.log(res);
				}
			})
			.catch((err) => {
				if (err) {
					console.log(err);
				}
			});
	}

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
			<div>
				<button onClick={sendData}>Send Data</button>
			</div>
			<div>
				<button onClick={deleteData}>Delete Data</button>
			</div>
			<div>
				<button onClick={editData}>Edit Data</button>
			</div>

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
